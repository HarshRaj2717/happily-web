"use client";
import React from "react";
import { Grid, Paper, Button, Divider, TextareaAutosize } from "@mui/material";
import Input from "@mui/joy/Input";
import { createPost } from "../js/apiCalls";
import "./styles/posts.css";

function CreatePost() {
  const buttonStyle = {
    backgroundColor: "#F5C03D",
    color: "black",
    margin: "15px",
    width: "10%",
  };

  async function clickHandler() {
    const api_data = await createPost(
      localStorage.getItem("user_api_key"),
      document.getElementById("title_textarea").value,
      document.getElementById("content_textarea").value
    );
    if (api_data.success !== 1) return;
    window.location.href = "/community";
  }

  return (
    <main className="m-10">
      <div className="bb">
        <Grid className="bb">
          <div className="container">
            <Paper>
              <h3 className="pad">Create a Post</h3>
              <Divider />
              <div className="pad">
                <Input
                  id="title_textarea"
                  placeholder="Title"
                  size="lg"
                  className="text-2xl p-2 mx-2"
                />
              </div>
              <div className="pad flex justify-center items-center">
                <TextareaAutosize
                  id="content_textarea"
                  minRows={15}
                  maxRows={15}
                  className="w-11/12 bg-transparent p-5 font-sans"
                  placeholder="Write your answer here"
                />
              </div>
              <Button
                variant="contained"
                style={buttonStyle}
                onClick={clickHandler}
              >
                Submit
              </Button>
            </Paper>
          </div>
        </Grid>
      </div>
    </main>
  );
}

export default CreatePost;