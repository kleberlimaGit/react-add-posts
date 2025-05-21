import { Link, Form, redirect } from "react-router-dom";
import styles from "./NewPost.module.css";
import Modal from "../components/Modal";

function NewPost() {
  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      id: Date.now(),
      body: enteredPosts,
      author: author,
    };
    onAddPost(postData);
  }

  return (
    <Modal>
      <Form method="POST" className={styles.form}>
        <p>
          <label htmlFor="body">Postagem</label>
          <textarea id="body" required rows={3} name="body" />
        </p>
        <p>
          <label htmlFor="name">Seu nome</label>
          <input type="text" id="name" required name="author" />
        </p>
        <p className={styles.actions}>
          <Link type="button" to="..">
            Cancelar
          </Link>
          <button type="submit">Adicionar</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  postData.id = Date.now();
  await fetch("http://localhost:3001/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  return redirect("/");
}
