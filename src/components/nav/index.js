import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.scss";
import { list } from "./list";

const Nav = () => {
  const [id, setId] = useState("1");

  return (
    <div className="nav">
      <h1>My blog</h1>
      <ul>
        {list.map((item) => {
          return (
            <li onClick={() => setId(item.id)} className={!item.key && item.id === id ? "active_nav" : ""}>
              {item.key ? (
                <p>
                  {item.icon}
                  {item.name}
                </p>
              ) : (
                <Link>
                  {item.icon}
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
