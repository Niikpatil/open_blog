import React from "react";
import { useState, useEffect } from "react";
import { Main } from "./components/Layouts/Main";
import { About } from "./components/Pages/About";
import { BlogForm } from "./components/Pages/BlogForm";
import { Blogs } from "./components/Pages/Blogs";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // To store the user data we use localStorage, it get stored in BrowserDom
  // let initBlog;

  // if (localStorage.getItem("articals") === null) {
  //   initBlog = [];
  // } else {
  //   initBlog = JSON.parse(localStorage.getItem("articals"));
  // }

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

  const [articals, setArticals] = useState([
    {
      id: 1,
      title: "Meditation",
      content: "Meditaion keeps your mental helth good.",
    },
    {
      id: 2,
      title: "Stay fit",
      content: "Physical activity important for Health",
    },
    {
      id: 3,
      title: "Running",
      content: "Keep your Heart helthy",
    },
  ]);

  //                     IMP Note
  // This usee` ffectHook prevent the loading of articals
  // until the users data get updated in setArticals function

  useEffect(() => {
    localStorage.setItem("articals", JSON.stringify(articals));
  }, [articals]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Main>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <div>
                    <Blogs articals={articals} onDelete={onDelete} />
                  </div>
                );
              }}
            ></Route>

            <Route
              exact
              path="/addblog"
              render={() => {
                return (
                  <div>
                    <BlogForm addBlog={addBlog} />
                  </div>
                );
              }}
            ></Route>

            <Route exact path="/about">
              <About />
            </Route>
          </Main>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
