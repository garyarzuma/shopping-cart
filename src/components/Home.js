import React from "react";
import backgroundImages from "../images/Background-Shopping-Cart.png";

const Home = () => {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${backgroundImages})`,
      }}
    >
      <h1 className="welcome">Welcome</h1>

      <div className="home-container">
        <div className="fancy-text">WHERE QUALITY</div>
        <div className="fancy-text">Meets Fashion</div>
      </div>
    </div>
  );
};

export default Home;
