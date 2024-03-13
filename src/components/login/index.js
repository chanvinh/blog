import React, { useCallback, useEffect, useState } from "react";
import home from "../../images/home-phones.png";
import screen1 from "../../images/screenshot1.png";
import screen2 from "../../images/screenshot2.png";
import screen3 from "../../images/screenshot3.png";
import screen4 from "../../images/screenshot4.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./login.scss";

const Login = () => {
  const images = [screen1, screen2, screen3, screen4];
  const [index, setIndex] = useState(0);

  const runImage = useCallback(async () => {
    await setTimeout(() => {
      document.getElementById("screenImages").classList.add(".screenImages");
      setIndex((index + 1) % images.length);
    }, 3000);
  }, [images.length, index]);

  useEffect(() => {
    if (images.length) {
      runImage();
      return () => {
        document
          .getElementById("screenImages")
          .classList.remove(".screenImages");
        clearTimeout(runImage());
      };
    }
    return () => {};
  }, [images.length, runImage]);

  return (
    <div className="login">
      <div className="login__left">
        <img className="home" src={home} alt="" />
        <div className="screen">
          <img id="screenImages" className="screenImages" src={images[index]} />
        </div>
      </div>
      <div className="login__right">
        <div className="form_1">
          <h1>Login My Blog</h1>
          <form>
            <input
              type="text"
              placeholder="Phone number, username, or email"
            ></input>
            <input type="password" placeholder="Password"></input>
            <button type="submit">Login in</button>
          </form>
          <span>OR</span>
          <h2>
            <FacebookIcon></FacebookIcon>Login in with Facebook
          </h2>
          <p>Forgot password?</p>
        </div>
        <div className="form_2">
          <h2>
            Don't have an account? <span>Sign up</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
