import React from "react";

export default function Sidebar() {
  return (
    <>
      <div className="left-side-bar">
        <div className="first-section menu-section-all">
          <ul>
            <li>
              <i className="fas fa-home"></i> Home
            </li>
            <li>
              <i className="fas fa-fire"></i> Trending
            </li>
            <li>
              <i className="fas fa-photo-video"></i> Subscriptions
            </li>
          </ul>
        </div>
        <div className="second-section menu-section-all">
          <ul>
            <li>
              <i className="fas fa-book-medical"></i> Library
            </li>
            <li>
              <i className="fas fa-video"></i> Your Videos
            </li>
            <li>
              <i className="fas fa-clock"></i> Watch Later
            </li>
            <li>
              <i className="fas fa-history"></i> History
            </li>
            <li>
              <i className="fas fa-thumbs-up"></i> Liked Videos
            </li>
          </ul>
        </div>
        <h3 className="yt-sub-heading">Subscriptions</h3>
        <div className="third-section menu-section-all">
          <ul>
            <li>
              <i className="fas fa-user-circle"></i>Joma Tech
            </li>
            <li>
              <i className="fas fa-user-circle"></i>Sandeep Maheswari
            </li>
            <li>
              <i className="fas fa-user-circle"></i>LearnWithSF
            </li>
            <li>
              <i className="fas fa-user-circle"></i>Clever Programmer
            </li>
            <li>
              <i className="fas fa-user-circle"></i>Moshiur
            </li>
            <li>
              <i className="fas fa-user-circle"></i>Jhankar Mahbub
            </li>
            <li>
              <i className="fas fa-user-circle"></i>Anisul Islam
            </li>
            <li>
              <i className="fas fa-user-circle"></i>lazuk Hasan
            </li>
            <li>
              <i className="fas fa-user-circle"></i>Hitesh Chowdhary
            </li>
            <li>
              <i className="fas fa-user-circle"></i>Freelancer Nasim
            </li>
            <li>
              <i className="fas fa-user-circle"></i>Al Siam World
            </li>
            <li>
              <i className="fas fa-user-circle"></i>Learn With Cyber 71
            </li>
            <li>
              <i className="fas fa-user-circle"></i>Rabbil Hasan
            </li>
            <li>
              <i className="fas fa-user-circle"></i>Stack Learner
            </li>
            <li>
              <i className="fas fa-user-circle"></i>Easy Tuturial
            </li>
            <li>
              <i className="fas fa-user-circle"></i>Shohag360
            </li>
            <li>
              <i className="fas fa-user-circle"></i>Edueka!
            </li>
          </ul>
        </div>

        <h3 className="yt-sub-heading menu-section-all">More From Youtube</h3>
        <div className="fourth-section menu-section-all">
          <ul>
            <li>
              <i className="fas fa-gamepad"></i>Gaming
            </li>
            <li>
              <i className="fas fa-headset"></i>Live
            </li>
            <li>
              <i className="fas fa-running"></i>Sport
            </li>
          </ul>
        </div>
        <div className="fifth-section menu-section-all">
          <ul>
            <li>
              <i className="fas fa-cog"></i>Setting
            </li>
            <li>
              <i className="fas fa-flag"></i>Report History
            </li>
            <li>
              <i className="fas fa-question-circle"></i>Help
            </li>
            <li>
              <i className="fas fa-comment-alt"></i>Send Feedback
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
