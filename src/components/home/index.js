import React, { useState } from "react";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import home from "../../images/home-phones.png";
import banner from "../../images/banner.png";
import "./home.scss";

const Home = () => {
  const [heart, setHeart] = useState(false);
  const [save, setSave] = useState(false);

  return (
    <div className="home">
      <div className="item">
        <div className="item_top">
          <div className="item_top_left">
            <img src={home} />
            <p>Ung Chấn Vinh</p>
          </div>
          <div className="item_top_right">
            <span>
              <ModeEditOutlineOutlinedIcon></ModeEditOutlineOutlinedIcon>
            </span>
          </div>
        </div>
        <div className="item_body">
          <img src={banner} />
        </div>
        <div className="item_footer">
          <div className="item_footer_top">
            <p>
              <span onClick={() => setHeart(!heart)}>
                {heart ? (
                  <FavoriteOutlinedIcon></FavoriteOutlinedIcon>
                ) : (
                  <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                )}
              </span>
              15 like
            </p>

            <span onClick={() => setSave(!save)}>
              {save ? (
                <BookmarkOutlinedIcon></BookmarkOutlinedIcon>
              ) : (
                <BookmarkBorderOutlinedIcon></BookmarkBorderOutlinedIcon>
              )}
            </span>
          </div>
          <div className="item_footer_footer">
            <p>Ung Chấn Vinh</p>
            <span>asdddddddddddddddddddddddddddddddddddddddddd</span>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="item_top">
          <div className="item_top_left">
            <img src={home} />
            <p>Ung Chấn Vinh</p>
          </div>
          <div className="item_top_right">
            <span>
              <ModeEditOutlineOutlinedIcon></ModeEditOutlineOutlinedIcon>
            </span>
          </div>
        </div>
        <div className="item_body">
          <img src={banner} />
        </div>
        <div className="item_footer">
          <div className="item_footer_top">
            <p>
              <span onClick={() => setHeart(!heart)}>
                {heart ? (
                  <FavoriteOutlinedIcon></FavoriteOutlinedIcon>
                ) : (
                  <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                )}
              </span>
              15 like
            </p>

            <span onClick={() => setSave(!save)}>
              {save ? (
                <BookmarkOutlinedIcon></BookmarkOutlinedIcon>
              ) : (
                <BookmarkBorderOutlinedIcon></BookmarkBorderOutlinedIcon>
              )}
            </span>
          </div>
          <div className="item_footer_footer">
            <p>Ung Chấn Vinh</p>
            <span>asdddddddddddddddddddddddddddddddddddddddddd</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
