import { Outlet } from "react-router-dom";
import PostList from "../components/PostList";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  try {
    const response = await fetch("http://localhost:3001/posts");
    if (!response.ok) {
      throw new Error("Erro ao buscar postagens");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    alert(error.message);
  }
}
