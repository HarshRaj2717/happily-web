"use client";
import { useState, useEffect } from "react";
import { getChats, postChat } from "../js/api_calls";

function ProfMsg({ content }) {
  return (
    <div className="chat chat-start">
      <div className="chat-bubble bg-white text-black">{content}</div>
    </div>
  );
}

function UserMsg({ content }) {
  return (
    <div className="chat chat-end">
      <div className="chat-bubble bg-sky-500 text-white">{content}</div>
    </div>
  );
}

export default function Chat({ params }) {
  const [allChats, setAllChats] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    async function fetchChats() {
      const chats = await getChats(
        localStorage.getItem("user_api_key"),
        params.appointment_id
      );
      if (chats == []) {
        return;
      }
      setAllChats(chats);
    }
    fetchChats();
    const intervalId = setInterval(fetchChats, 3000);
    return () => clearInterval(intervalId);
  }, [params.appointment_id]);

  async function sendHandler() {
    if (inputMessage.trim() === "") {
      return;
    }
    const chats = await postChat(
      localStorage.getItem("user_api_key"),
      params.appointment_id,
      inputMessage
    );
    setAllChats(chats);
    setInputMessage("");
  }

  return (
    <div className="mx-52 my-32 p-5 rounded-md outline-dashed outline-4">
      {allChats.map((chat, index) =>
        chat.sender === "user" ? (
          <UserMsg key={index} content={chat.content} />
        ) : (
          <ProfMsg key={index} content={chat.content} />
        )
      )}

      <div className="form-control mt-10 flex flex-row">
        <textarea
          className="textarea textarea-bordered bg-white text-black flex-grow mx-5"
          placeholder="Enter your message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        ></textarea>
        <label className="label">
          <span className="label-text-alt"></span>
          <button className="btn bg-sky-500 text-white" onClick={sendHandler}>
            Send!
          </button>
        </label>
      </div>
    </div>
  );
}
