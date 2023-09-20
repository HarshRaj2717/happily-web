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

function SingleLoadingPost() {
  return (
    <div className="bb blur-sm pointer-events-none">
      <Grid className="bb">
        <div className="container rounded-full">
          <Paper
            style={{ padding: "15px", marginTop: "0px", borderRadius: "15px" }}
            className="rounded-full"
          >
            <div style={{ display: "flex", gap: "10px" }}>
              <Avatar sx={{ width: 24, height: 24 }}>X</Avatar>

              {/* search bar */}
              <div className="UserSection">
                <div className="nameFollow">
                  <div className="postUserName">
                    <b>XXXXXXX</b>
                    <div className="postUserNameCc">about 24 hours ago</div>
                  </div>
                  {/* <div className="postUserNameFollow">
                      <b>Follow</b>
                    </div> */}
                </div>
              </div>
            </div>

            {/* Question */}
            <div className="postHeader">
              <div className="questions">XXXXXXX</div>
            </div>

            <Divider />
            <div style={{ margin: "15px" }}>
              <div style={{ margin: "15px", whiteSpace: "pre-line" }}>
                XXXXXXX
              </div>
              <div style={{ display: "flex", gap: "10px" }}></div>
            </div>
            <div className="postFooterWrapper">
              <div className="postFooter1">
                <Button style={{ color: "grey" }}>
                  <ArrowUpwardOutlinedIcon sx={{ fontSize: 20 }} />
                </Button>
                <span id="total_votes" className="p-2">
                  XX
                </span>
                <Button style={{ color: "grey" }}>
                  <ArrowDownwardOutlinedIcon sx={{ fontSize: 20 }} />
                </Button>
                <Button style={{ color: "grey" }}>
                  <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: 20 }} />
                  <span id="total_comments" className="p-2">
                    XX
                  </span>
                </Button>
              </div>
              <div className="postFooter2">
                <Button style={{ color: "grey" }}>
                  <ShareOutlinedIcon sx={{ fontSize: 20 }} />
                </Button>
                <Button style={{ color: "grey" }}>
                  <DeleteForeverIcon />
                </Button>
              </div>
            </div>
          </Paper>
        </div>
      </Grid>
    </div>
  );
}

export default function LoadingPosts() {
  const numberOfPosts = 25;

  const postArray = new Array(numberOfPosts).fill(null);

  return (
    <div>
      {postArray.map((_, index) => (
        <SingleLoadingPost key={index} />
      ))}
    </div>
  );
}
