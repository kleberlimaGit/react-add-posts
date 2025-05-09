import classes from './NewPost.module.css';

function NewPost() {

function changeBodyHandler(event) {
    console
  }


  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Postagem</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>
        <label htmlFor="name">Seu nome</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;