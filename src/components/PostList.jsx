import NewPost from "./NewPost";
import Post from "./Post";
import styles from './PostList.module.css';
function PostList(){

    return (<>
        <NewPost/>
        <ul className={styles.posts}>
            <Post author="Kleber Lima" body="Java é a melhor stack"/>
        </ul>
    
    </>
    )
}

export default PostList;