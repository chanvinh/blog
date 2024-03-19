import React, { useEffect, useState } from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import "./profile.scss";
import banner from "../../images/banner.png";
import { list } from "./list";

const Profile = () => {
  const [id, setId] = useState(
    localStorage.getItem("id_profile")
      ? String(localStorage.getItem("id_profile"))
      : "1"
  );

  useEffect(() => {
    localStorage.setItem("id_profile", id);
  }, [id]);

  return (
    <div className="profile">
      <div className="profile_top">
        <div className="profile_top_left">
          <img src={banner} />
        </div>
        <div className="profile_top_right">
          <div className="name_setting">
            <h2>chanvinh0411</h2>
            <div className="setting">
              <button>Edit profile</button>
              <span>
                <SettingsOutlinedIcon></SettingsOutlinedIcon>
              </span>
            </div>
          </div>
          <div className="list">
            <ul>
              <li>
                <span>2</span> posts
              </li>
              <li>
                <span>2</span> followers
              </li>
              <li>
                <span>2</span> following
              </li>
            </ul>
          </div>
          <div className="bio">
            <p>Chấn Vinh</p>
            <p>Chấn Vinh (陈荣)</p>
          </div>
        </div>
      </div>
      <div className="profile_footer">
        <div className="profile_footer_top">
          <ul>
            {list.map((item) => {
              return (
                <li
                  onClick={() => setId(item.id)}
                  key={item.id}
                  className={item.id === id ? "active_list" : ""}
                >
                  <span>{item.icon}</span>
                  {item.name}
                </li>
              );
            })}
          </ul>
          {id === "1" && (
            <div className="profile_post">
              <div className="item_post">
                <img src={banner} />
                <div className="hover_item">
                  <p>
                    <span>
                      <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                    </span>
                    28
                  </p>
                  <p>
                    <span>
                      <ModeCommentOutlinedIcon></ModeCommentOutlinedIcon>
                    </span>
                    28
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
