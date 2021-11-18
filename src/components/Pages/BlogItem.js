import React from "react";

export const BlogItem = ({ artical }) => {
  return (
    <div>
      <li>{artical.title}</li>
      <ol>{artical.content}</ol>
    </div>
  );
};
