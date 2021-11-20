import React from "react";

export const BlogItem = ({ artical, onDelete }) => {
  return (
    <div className="container my-4">
      <div className="card rounded-3 shadow-lg">
        <div className="card-body">
          <h5 className="card-title">{artical.title}</h5>
          <p className="card-text"> {artical.content}</p>
          <div className="btn btn-sm offset-md-10 md-col-2">
            <button
              className="btn btn-sm btn-danger m-2"
              onClick={() => onDelete(artical)}
            >
              <b>Delete</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
