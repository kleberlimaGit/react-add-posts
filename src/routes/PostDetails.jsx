import { Link, Form, redirect, useLoaderData } from "react-router-dom";
import styles from "./NewPost.module.css";
import Modal from "../components/Modal";

function PostDetails() {
  const post = useLoaderData();

  return (
    <Modal>
      <Form method="POST" className={styles.form}>
        <p>
          <label htmlFor="body">Postagem</label>
          <textarea id="body" required rows={3} name="body" defaultValue={post.body} />
        </p>
        <p>
          <label htmlFor="name">Seu nome</label>
          <input type="text" id="name" required name="author" defaultValue={post.author} />
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

export default PostDetails;

export async function action({ request, params }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  postData.id = params.id;
  await fetch(`http://localhost:3001/posts/${params.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  return redirect("/");
}

export async function loader({ params }) {
  try {
    const response = await fetch(`http://localhost:3001/posts/${params.id}`);
    if (!response.ok) {
      alert("Postagem não encontrada");
      return redirect("/");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    alert(error.message);
  }
}
