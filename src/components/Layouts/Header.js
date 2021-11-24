import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-secondary bg-light shadow-sm">
        <div className="container-fluid">
          <nav className="navbar navbar-light ">
            <Link to="/" className="navbar-brand ">
              OPEN BLOG
            </Link>
          </nav>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/addblog">
                  Blog Write
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
