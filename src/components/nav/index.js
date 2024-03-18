import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import home from "../../images/home-phones.png";
import "./nav.scss";
import { api, list, list__key } from "./list";

const Nav = () => {
  const [id, setId] = useState(
    localStorage.getItem("id")
      ? String(JSON.parse(localStorage.getItem("id")))
      : "1"
  );
  const [key, setKey] = useState(
    localStorage.getItem("key")
      ? String(JSON.parse(localStorage.getItem("key")))
      : ""
  );
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(
    localStorage.getItem("id")
      ? Boolean(JSON.parse(localStorage.getItem("showSearch")))
      : false
  );

  const handleClick = useCallback((id, key) => {
    if (id === "0" || id === "1") {
      setId("1");
      setKey(key ? key : "");
      setShowSearch(false);
      window.localStorage.clear();
      return;
    }

    if (key === "2") {
      setId(id);
      setKey(key ? key : "");
      setShowSearch(true);
      return;
    }

    setId(id);
    setKey(key ? key : "");
    setShowSearch(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("id", id);
    localStorage.setItem("key", key);
    localStorage.setItem("showSearch", showSearch);
  }, [id, key, showSearch]);

  return (
    <>
      {id && !key && (
        <div className="nav">
          <h1>My blog</h1>
          <ul>
            {list.map((item) => {
              return (
                <li
                  onClick={() => handleClick(item.id, item.key)}
                  className={!item.key && item.id === id ? "active_nav" : ""}
                >
                  {item.key ? (
                    <p>
                      {item.icon}
                      {item.name}
                    </p>
                  ) : (
                    <Link to={item.link}>
                      {item.icon}
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {id && key && (
        <div className="nav__key">
          <div className="nav__key__left">
            <ul>
              {list__key.map((item) => {
                return (
                  <li
                    onClick={() => handleClick(item.id, item.key)}
                    className={
                      item.id === id && item.key === key ? "active_nav_key" : ""
                    }
                  >
                    {item.id && !item.key ? (
                      <>
                        <Link to={item.link}>{item.icon}</Link>
                        {item.name ? <span>{item.name}</span> : <></>}
                      </>
                    ) : (
                      <>
                        <p>{item.icon}</p>
                        {item.name ? <span>{item.name}</span> : <></>}
                      </>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="nav__key__right">
            {showSearch && (
              <div id="search" className="search">
                <div className="search_top">
                  <h2>Search</h2>
                  <form>
                    <span>
                      <SearchOutlinedIcon></SearchOutlinedIcon>
                    </span>
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
                      placeholder="Search"
                    ></input>
                    {search ? (
                      <span onClick={() => setSearch("")}>
                        <CloseOutlinedIcon></CloseOutlinedIcon>
                      </span>
                    ) : (
                      <></>
                    )}
                  </form>
                </div>
                <div className="search_bottom">
                  <div className="search_api">
                    <ul>
                      {api.map((item) => {
                        return (
                          <li>
                            <div className="user">
                              <img src={home} />
                              <p>{item.name}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
