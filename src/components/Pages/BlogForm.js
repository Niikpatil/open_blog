import React from "react";
import { useState } from "react";

export const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // clog;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="title" class="form-label">
            Title
          </label>
          <input
            type="title"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            id="title"
            class="form-control"
            placeholder="Hope this title grabe readers attention"
          />
        </div>
        <div class="mb-3">
          <label for="content" class="form-label">
            Article
          </label>
          <textarea
            type="text"
            name="content"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            id="title"
            class="form-control"
            placeholder="Please write Something that fascinate the readers mind..."
          />
        </div>
        <button type="submit" class="btn btn-sm btn-secondary">
          Submit
        </button>
      </form>
    </div>
  );
};
