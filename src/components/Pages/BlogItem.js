import React from "react";

export const BlogItem = ({ artical }) => {
  return (
    <div className="container my-4">
      <div class="card rounded-3 border shadow-lg">
        <div class="card-body">
          <h5 class="card-title">{artical.title}</h5>
          <p class="card-text"> {artical.content}</p>

          <div className="offset-10 md-col-2">
            <a href="/#" class="btn btn-sm btn-warning">
              Edit
            </a>
            <a href="/#" class="btn btn-sm btn-danger m-2">
              Gowhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
