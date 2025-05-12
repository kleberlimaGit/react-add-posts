import classes from './NewPost.module.css';

function NewPost(props) {
const {onBodyChange, onAuthorChange} = props

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Postagem</label>
        <textarea id="body" required rows={3} onChange={onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Seu nome</label>
        <input type="text" id="name" required onChange={onAuthorChange} />
      </p>
    </form>
  );
}

export default NewPost;