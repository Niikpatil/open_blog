import React from "react";
import { BlogItem } from "./BlogItem";

export const Blogs = ({ articals }) => {
  return (
    <div>
      <h1>Articals for Readers</h1>
      <div className="border border-bottom mb-3 border-warning "></div>

      {articals.map((artical) => {
        return <BlogItem artical={artical} />;
      })}
    </div>
  );
};
