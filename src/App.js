import React from "react";
import { useState, useEffect } from "react";
import { Main } from "./components/Layouts/Main";
import { BlogForm } from "./components/Pages/BlogForm";
import { Blogs } from "./components/Pages/Blogs";

function App() {
  // To store the user data we use localStorage, it get stored in BrowserDom
  let initBlog;

  if (localStorage.getItem("articals") === null) {
    initBlog = [];
  } else {
    initBlog = JSON.parse(localStorage.getItem("articals"));
  }

  const onDelete = (artical) => {
    setArticals(
      articals.filter((e) => {
        return e !== artical;
      })
    );
    // localStorage.getItem("articals", JSON.stringify(articals));
  };

  // user data get loaded by addBlog form
  const addBlog = (title, content) => {
    let sno;

    if (articals.length === 0) {
      sno = 0;
    } else {
      sno = articals[articals.length - 1].sno + 1;
    }
    const myBlog = {
      sno: sno,
      title: title,
      content: content,
    };
    setArticals([...articals, myBlog]);
  };

  const [articals, setArticals] = useState(initBlog);

  //                     IMP Note
  // This useeffectHook prevent the loading of articals
  // until the users data get updated in setArticals function

  useEffect(() => {
    localStorage.setItem("articals", JSON.stringify(articals));
  }, [articals]);

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
