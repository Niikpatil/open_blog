import React from "react";
import { useState } from "react";
import { Main } from "./components/Layouts/Main";
import { Blogs } from "./components/Pages/Blogs";

function App() {
  const onDelete = (artical) => {
    // console.log(`Aricle get deleted`, artical);

    setArticals(
      articals.filter((e) => {
        return e !== artical;
      })
    );
  };

  const [articals, setArticals] = useState([
    {
      id: 1,
      title: "Meditation",
      content: "Meditation keeps your mental helth good.",
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

  return (
    <div className="App">
      <Main>
        <Blogs articals={articals} onDelete={onDelete} />
      </Main>
    </div>
  );
}

export default App;
