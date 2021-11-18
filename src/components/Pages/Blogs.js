import React from "react";

export const Blogs = (props) => {
  const BlogItem = props.articals.map((artical) => {
    return <div>{artical.title}</div>;
  });

  return (
    <div>
      <h1>Navbar examples</h1>
      <p>{BlogItem}</p>
    </div>
  );
};
