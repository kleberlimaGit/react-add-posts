import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModalHandler() {
    setIsModalOpen(true);
  }

  function closeModalHandler() {
    setIsModalOpen(false);
  }

  return (
    <>
      <MainHeader onCreatePost={openModalHandler} />
      <main>
        <PostList
          isPosting={isModalOpen}
          onStopPosting={closeModalHandler}
        />
      </main>
    </>
  );
}

export default App;
