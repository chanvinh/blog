import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./nav.scss";
import { list, list__key } from "./list";

const Nav = () => {
  const [id, setId] = useState(
    localStorage.getItem("id") &&
      window.location.href !== "http://localhost:3000/"
      ? String(JSON.parse(localStorage.getItem("id")))
      : "1"
  );
  const [key, setKey] = useState(
    localStorage.getItem("key") &&
      window.location.href !== "http://localhost:3000/"
      ? String(JSON.parse(localStorage.getItem("key")))
      : ""
  );
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(
    localStorage.getItem("id")
      ? JSON.parse(localStorage.getItem("showSearch"))
      : false
  );

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClick = useCallback((id, key) => {
    if (id === "0" || id === "1") {
      setId("1");
      setKey(key ? key : "");
      setShowSearch(false);
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

  const handleClearSearch = useCallback(() => {
    setData([]);
    setSearch("");
  }, []);

  useEffect(() => {
    if (window.location.href === "http://localhost:3000/Profile") {
      localStorage.setItem("id", "6");
      localStorage.setItem("key", "");
      localStorage.setItem("showSearch", false);
      return;
    }
    localStorage.setItem("id", id);
    localStorage.setItem("key", key);
    localStorage.setItem("showSearch", showSearch);
  }, [id, key, showSearch]);

  useEffect(() => {
    if (!search.trim()) {
      setData([]);
      return;
    }
    setLoading(true);
    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${search}&type=less`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, [search]);

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
                    {search && !loading && (
                      <span onClick={handleClearSearch}>
                        <CloseOutlinedIcon></CloseOutlinedIcon>
                      </span>
                    )}
                    {loading && (
                      <span className="animationLoad">
                        <AutorenewOutlinedIcon></AutorenewOutlinedIcon>
                      </span>
                    )}
                  </form>
                </div>
                <div className="search_bottom">
                  <div className="search_api">
                    <ul>
                      {data &&
                        data.length > 0 &&
                        data.map((item) => {
                          return (
                            <li>
                              <div className="user">
                                <img src={item.avatar} />
                                <p>{item.full_name}</p>
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
