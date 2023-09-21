"use client";
import React from "react";
import { Paper, Avatar } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";

function TitleBar() {
  return (
    <div className="bb">
      <div className="container">
        <Paper  style={{ padding: "15px",borderRadius:"10px" }}>
          <div style={{ display: "flex", gap: "10px" }}>
            <Avatar>
              { localStorage.getItem("user_email")
                ? localStorage.getItem("user_email")[0]
                : null}
            </Avatar> 
            <a className="secDivSubDiv no-underline text-xl" href="community/create-post">
              <PostAddIcon className="iconn" />
              <span className="searchBarContents">Create a Post</span>
            </a>
            {/* search bar */}
          </div>
          <div className="secondDivSearchBar"></div>
        </Paper>
      </div>
    </div>
  );
}

export default TitleBar;
