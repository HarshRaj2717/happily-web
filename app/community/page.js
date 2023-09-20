"use client";
import React, { useEffect, useState } from "react";
import SinglePost from "./Components/single-post";
import TitleBar from "./Components/TitleBar";
import LoadingPosts from "./Components/loading-posts";
import { getPosts } from "./js/apiCalls";

export default function Community() {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const posts = await getPosts();
      setAllPosts(posts);
      setIsLoading(false);
    }
    fetchPosts();
  }, []);

  return (
    <main>
      <TitleBar />
      {isLoading ? (
        <LoadingPosts />
      ) : (
        allPosts.map((post) => (
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
        ))
      )}
    </main>
  );
}
