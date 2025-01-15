import React from "react";

export default function Header() {
  return (
    <header className="youtube-header">
      <div className="container">
        <div className="tube-bar-header">
          <div className="tube-bar">
            <i className="fas fa-bars"></i>
          </div>
          <div className="tube-logo">
            <img src="assets/youtube.webp" alt="" /> Youtube <sup>BD</sup>
          </div>
        </div>
        <div className="tube-search-account">
          <div className="search-box">
            <input type="text" placeholder="Search" />
            <i className="fas fa-search"></i>
            <i className="fas fa-microphone"></i>
          </div>
          <div className="account-box">
            <i className="fas fa-video-slash"></i>
            <i className="fas fa-th"></i>
            <i className="fas fa-bell"></i>
            <img src="assets/alsiam.png" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}
