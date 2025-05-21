import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import styles from "./PostList.module.css";

function PostList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 ? (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post key={post.id} author={post.author} body={post.body} id={post.id} />
          ))}
        </ul>
      ) : (
        <h2 style={{ textAlign: "center", color: "#888" }}>
          Nenhuma postagem encontrada.
        </h2>
      )}
    </>
  );
}

export default PostList;
