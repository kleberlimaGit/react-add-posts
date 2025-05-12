import styles from './Post.module.css';

function Post({author, body}) {
    return <li className={styles.post}>
        <p className={styles.author}>{body}</p>
        <p className={styles.text}>{author}</p>
    </li>
}

export default Post;

