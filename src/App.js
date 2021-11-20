import React from "react";
import { useState } from "react";
import { Main } from "./components/Layouts/Main";
import { BlogForm } from "./components/Pages/BlogForm";
import { Blogs } from "./components/Pages/Blogs";

function App() {
  const onDelete = (artical) => {
    setArticals(
      articals.filter((e) => {
        return e !== artical;
      })
    );
  };

  const addBlog = (title, content) => {
    // console.log("title", title, content);

    let sno;
    sno = articals[articals.length - 1].sno + 1;
    const myBlog = {
      sno: sno,
      title: title,
      content: content,
    };
    console.log(myBlog);
    setArticals([...articals, myBlog]);
  };

  const [articals, setArticals] = useState([
    {
      sno: 1,
      title: "Meditation",
      content: "Meditation keeps your mental helth good.",
    },
    {
      sno: 2,
      title: "Stay fit",
      content: "Physical activity important for Health",
    },
    {
      sno: 3,
      title: "Running",
      content: "Keep your Heart helthy",
    },
  ]);

  return (
    <div className="App">
      <Main>
        <BlogForm addBlog={addBlog} />
        <Blogs articals={articals} onDelete={onDelete} />
      </Main>
    </div>
  );
}

export default App;
