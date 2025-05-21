import { Link } from "react-router-dom";
import styles from "./Post.module.css";

function Post({ id, author, body }) {
  return (
    <li className={styles.post}>
      <Link to={id} className={styles.link} onClick={(e) => console.log("Post clicked:", id)}>
        <p className={styles.author}>{body}</p>
        <p className={styles.text}>{author}</p>
      </Link>
    </li>
  );
}

export default Post;
