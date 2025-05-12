import { useState } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostList.module.css";
function PostList({isPosting, onStopPosting}) {
  
  const [enteredPosts, setEnteredPosts] = useState("");
  const [author, setAuthor] = useState("");
  
  const hasContent = enteredPosts.trim().length > 0 || author.trim().length > 0;
 
  function bodyChangeHandler(event) {
    setEnteredPosts(event.target.value);
  }

  function authorChangeHandler(event) {
    console.log(event.target.value);
    setAuthor(event.target.value);
  }

  return (
    <>
    {isPosting && (
      <Modal onClose={onStopPosting}>
        <NewPost
          onBodyChange={bodyChangeHandler}
          onAuthorChange={authorChangeHandler}
        />

      </Modal> )}
        {hasContent && (
          <ul className={styles.posts}>
            <Post author={author} body={enteredPosts} />
          </ul>
        )}
    </>
  );
}

export default PostList;
