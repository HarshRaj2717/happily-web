"use client";
import React, { useEffect, useState } from "react";
import SinglePost from "../Components/single-post";
import TitleBar from "../Components/TitleBar";
import { getPosts } from "../js/apiCalls";

export default function Community({ params }) {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const posts = await getPosts();
      let postByID = [];
      posts.forEach((post) => {
        if (String(params.post_id) === String(post.id)) {
          postByID.push(post);
          return;
        }
      });
      setAllPosts(postByID);
    }
    fetchPosts();
  }, []);

  return (
    <main>
      <TitleBar />
      {allPosts.map((post) => (
        <SinglePost
          key={post.id}
          post_id={post.id}
          sender={post.created_by}
          title={post.title}
          content={post.content}
          total_votes={post.total_votes}
          total_comments={post.total_comments}
          created_on={post.created_on}
          shareable_link={window.location.origin + "/community/" + post.id}
        />
      ))}
    </main>
  );
}
