import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  const data = [
    {
      title: "HOME",
      url: "/",
    },
    {
      title: "HTML",
      url: "/html",
    },
    {
      title: "CSS",
      url: "/css",
    },
    {
      title: "REACT",
      url: "/re",
    },
    {
      title: "JAVA SCRIPT",

      url: "/js",
    },
  ];

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">SHIVAM.</Link>
      </div>

      <div className="nav-links">
        {data.map((a) => {
          return (
            <Link to={a.url} key={a.title}>
              {a.title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;