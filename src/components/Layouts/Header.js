import React from "react";

export const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-secondary bg-light shadow-sm">
        <div className="container-fluid">
          <h1 className="navbar-brand">OPEN BLOG</h1>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
