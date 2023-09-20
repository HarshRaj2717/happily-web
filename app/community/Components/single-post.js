"use client";
import React from "react";
import { Grid, Paper, Avatar, Button, Divider } from "@mui/material";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
// import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import "./styles/styles.css";
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import {
  getComments,
  upvotePost,
  downvotePost,
  deletePost,
  createComment,
} from "../js/apiCalls";

function SingleComment({ sender, created_on, content }) {
  const commentDate = new Date(created_on);
  const timeAgo = formatDistanceToNow(commentDate, { addSuffix: true });

  return (
    <div style={{ padding: "15px" }}>
      <Divider style={{ margin: "10px" }} />
      <div
        style={{
          display: "flex",
          gap: "5px",
          alignContent: "center",
        }}
      >
        <Avatar sx={{ width: 24, height: 24 }}>{sender[0]}</Avatar>

        <div>
          <div className="postUserNameC">
            <b>{sender}</b>
          </div>
          <div className="postUserNameCc">{timeAgo}</div>
        </div>
      </div>
      <div
        className="postUserNameCcc"
        style={{ padding: "10px", whiteSpace: "pre-line" }}
      >
        {content}
      </div>
    </div>
  );
}

function CommentInput({
  post_id,
  setComments,
  totalCommentNumber,
  setTotalCommentNumber,
}) {
  const submitHandler = async () => {
    const api_data = await createComment(
      localStorageStorage.getItem("user_api_key"),
      post_id,
      document.getElementById(post_id + "_comment_text").value
    );
    if (api_data.success !== 1) return;
    document.getElementById(post_id + "_comment_text").value = "";
    setTotalCommentNumber(totalCommentNumber + 1);
    const fetched_comments = await getComments(post_id);
    setComments(fetched_comments);
  };

  return (
    <main className="w-3/4 p-1">
      <TextareaAutosize
        id={post_id + "_comment_text"}
        placeholder="Write a comment..."
        className="pad p-3 w-full bg-transparent"
        minRows={2}
        maxRows={6}
      />
      <div className="flex justify-end">
        <Button
          style={{ color: "grey" }}
          className="bg-yellow-300 my-2"
          onClick={submitHandler}
        >
          Submit
        </Button>
      </div>
    </main>
  );
}

function SinglePost({
  sender,
  title,
  content,
  post_id,
  total_votes,
  total_comments,
  created_on,
  shareable_link,
}) {
  const commentDate = new Date(created_on);
  const timeAgo = formatDistanceToNow(commentDate, { addSuffix: true });

  const [isComment, setIsComment] = useState(false);
  const [comments, setComments] = useState([]);
  const [upvoteColor, setUpvoteColor] = useState("");
  const [downvoteColor, setDownvoteColor] = useState("");
  const [totalVoteNumber, setTotalVoteNumber] = useState(total_votes);
  const [totalCommentNumber, setTotalCommentNumber] = useState(total_comments);
  const [deleted, setDeleted] = useState(false);

  const clickHandler = async () => {
    if (isComment) setIsComment(false);
    else {
      const fetched_comments = await getComments(post_id);
      setComments(fetched_comments);
      setIsComment(true);
    }
  };

  const shareHandler = () => {
    navigator.clipboard.writeText(shareable_link);
    window.alert("Link to post copied: " + shareable_link);
  };

  const upvoteHandler = async () => {
    const api_data = await upvotePost(
      localStorageStorage.getItem("user_api_key"),
      post_id
    );
    if (api_data.success !== 1) return;
    if (api_data.user_new_vote_value === 1) {
      setUpvoteColor("primary");
    } else {
      setUpvoteColor("");
    }
    setDownvoteColor("");
    setTotalVoteNumber(api_data.post_total_votes);
  };

  const downvoteHandler = async () => {
    const api_data = await downvotePost(
      localStorageStorage.getItem("user_api_key"),
      post_id
    );
    if (api_data.success !== 1) return;
    if (api_data.user_new_vote_value === -1) {
      setDownvoteColor("primary");
    } else {
      setDownvoteColor("");
    }
    setUpvoteColor("");
    setTotalVoteNumber(api_data.post_total_votes);
  };

  const deleteHandler = async () => {
    const api_data = await deletePost(
      localStorageStorage.getItem("user_api_key"),
      post_id
    );
    if (api_data.success !== 1) return;
    setDeleted(true);
  };

  return deleted ? null : (
    <div className="bb">
      <Grid className="bb">
        <div className="container rounded-full">
          {/* Api Integration */}

          <Paper
            style={{ padding: "15px", marginTop: "0px", borderRadius: "15px" }}
          >
            <div style={{ display: "flex", gap: "10px" }}>
              <Avatar sx={{ width: 24, height: 24 }}>{sender[0]}</Avatar>

              {/* search bar */}
              <div className="UserSection">
                <div className="nameFollow">
                  <div className="postUserName">
                    <b>{sender}</b>
                    <div className="postUserNameCc">{timeAgo}</div>
                  </div>
                  {/* <div className="postUserNameFollow">
                    <b>Follow</b>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Question */}
            <div className="postHeader">
              <div className="questions">{title}</div>
            </div>

            <Divider />
            <div style={{ margin: "15px" }}>
              <div style={{ margin: "15px", whiteSpace: "pre-line" }}>
                {content}
              </div>
              <div style={{ display: "flex", gap: "10px" }}></div>
            </div>
            <div className="postFooterWrapper">
              <div className="postFooter1">
                <Button style={{ color: "grey" }} onClick={upvoteHandler}>
                  <ArrowUpwardOutlinedIcon
                    sx={{ fontSize: 20 }}
                    color={upvoteColor}
                  />
                </Button>
                <span id="total_votes" className="p-2">
                  {totalVoteNumber}
                </span>
                <Button style={{ color: "grey" }} onClick={downvoteHandler}>
                  <ArrowDownwardOutlinedIcon
                    sx={{ fontSize: 20 }}
                    color={downvoteColor}
                  />
                </Button>
                <Button onClick={clickHandler} style={{ color: "grey" }}>
                  <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: 20 }} />
                  <span id="total_comments" className="p-2">
                    {totalCommentNumber}
                  </span>
                </Button>
              </div>
              <div className="postFooter2">
                <Button style={{ color: "grey" }} onClick={shareHandler}>
                  <ShareOutlinedIcon sx={{ fontSize: 20 }} />
                </Button>
                <Button style={{ color: "grey" }} onClick={deleteHandler}>
                  <DeleteForeverIcon />
                </Button>
              </div>
            </div>
            {isComment && (
              <div className="flex justify-center items-center">
                <CommentInput
                  post_id={post_id}
                  setComments={setComments}
                  totalCommentNumber={totalCommentNumber}
                  setTotalCommentNumber={setTotalCommentNumber}
                />
              </div>
            )}
            {isComment &&
              comments.map((comment, index) => (
                <SingleComment
                  key={index}
                  sender={comment.created_by}
                  created_on={comment.created_on}
                  content={comment.content}
                />
              ))}
          </Paper>
        </div>
      </Grid>
    </div>
  );
}

export default SinglePost;
