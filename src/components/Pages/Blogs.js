import React from "react";
import { BlogItem } from "./BlogItem";

export const Blogs = ({ articals, onDelete }) => {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        backgroundColor: color,
        height: 5,
      }}
    />
  );

  return (
    <div>
      <h1>Articals for Readers</h1>
      <ColoredLine color="blue" />
      {articals.length <= 0 ? (
        <h3>No Content to display</h3>
      ) : (
        articals.map((artical) => {
          return (
            <div key={artical.id}>
              <BlogItem artical={artical} onDelete={onDelete} />
            </div>
          );
        })
      )}
    </div>
  );
};
