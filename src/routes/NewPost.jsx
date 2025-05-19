import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NewPost.module.css";
import Modal from "../components/Modal";

function NewPost({ onAddPost }) {
  const [enteredPosts, setEnteredPosts] = useState("");
  const [author, setAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredPosts(event.target.value);
  }

  function authorChangeHandler(event) {
    setAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      id: Date.now(),
      body: enteredPosts,
      author: author,
    };
    onAddPost(postData);
    onCloseModal();
  }

  return (
    <Modal>
      <form className={styles.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Postagem</label>
          <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
        </p>
        <p>
          <label htmlFor="name">Seu nome</label>
          <input
            type="text"
            id="name"
            required
            onChange={authorChangeHandler}
          />
        </p>
        <p className={styles.actions}>
          <Link type="button" to="..">
            Cancelar
          </Link>
          <button type="submit">Adicionar</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
