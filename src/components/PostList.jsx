import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import styles from "./PostList.module.css";

function PostList() {
  const posts = useLoaderData();

  function addPostHandler(postData) {
    createPosts(postData);
  }

  function createPosts(postData) {
    fetch("http://localhost:3001/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => {
        setPosts((prevPosts) => [...prevPosts, postData]);
      })
      .catch((error) => {
        alert("Erro ao criar postagem");
      });
  }

  return (
    <>
      {posts.length > 0 ? (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post key={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      ) : (
        <h2 style={{ textAlign: "center", color: "#888" }}>Nenhuma postagem encontrada.</h2>
      )}
    </>
  );
}

export default PostList;
