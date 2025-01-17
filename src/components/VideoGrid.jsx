import React from "react";

export default function VideoGrid() {
  return (
    <>
      <div className="right-side-bar">
        <div className="right-side-top-bar">
          <ul>
            <li>All</li>
            <li>Computer Programming</li>
            <li>Motivation</li>
            <li>Css</li>
            <li>Telegu Songs</li>
            <li>Courses</li>
            <li>Websites</li>
            <li>Linux</li>
            <li>WEb Development</li>
            <li>Web Design</li>
            <li>Photoshop</li>
          </ul>
        </div>
        <div className="right-side-videos">
          <div className="yt-videos-wrapper">
            <div className="yt-videos">
              <video
                src="videos/siam.mp4"
                className="video"
                type="video/mp4"
                width="380px"
                poster="img/khaab.jpg"
                controls
              ></video>
              <div className="yt-video-deatails">
                <i className="fas fa-user-circle"></i>
                <div className="yt-details-wrap">
                  <h3>
                    KHAAB || AKHIL || PARMISH VERMA || NEW PUNJABI SONG 2018
                  </h3>
                  <span>Crown Records</span>
                  <span>490M views . 4 years ago</span>
                </div>
              </div>
            </div>
            <div className="yt-videos">
              <video
                src="videos/aasiqui.mp4"
                className="video"
                type="video/mp4"
                width="380px"
                controls
              ></video>
              <div className="yt-video-deatails">
                <i className="fas fa-user-circle"></i>
                <div className="yt-details-wrap">
                  <h3>
                    Meri Aashiqui Song | Rochak Kohli Feat. Jubin Nautiyal
                  </h3>
                  <span>T - Series</span>
                  <span>312M views . 8 months ago</span>
                </div>
              </div>
            </div>
            <div className="yt-videos">
              <video
                src="videos/aayDua.mp4"
                className="video"
                type="video/mp4"
                width="380px"
                controls
              ></video>
              <div className="yt-video-deatails">
                <i className="fas fa-user-circle"></i>
                <div className="yt-details-wrap">
                  <h3>
                    Meri Aashiqui Song - Rochak Kohli Feat. Jubin Nautiyal
                  </h3>
                  <span>T - Series</span>
                  <span>400M views . 1 years ago</span>
                </div>
              </div>
            </div>

            <div className="yt-videos">
              <video
                src="videos/mirchi.mp4"
                className="video"
                type="buttabomma/mp4"
                width="370px"
                controls
              ></video>
              <div className="yt-video-deatails">
                <i className="fas fa-user-circle"></i>
                <div className="yt-details-wrap">
                  <h3>
                    Mirchi Songs | Idedo Bagundi Video Song | Latest Telugu
                    Video Songs{" "}
                  </h3>
                  <span>SriBalajiMovies</span>
                  <span>68M views . 7 years ago</span>
                </div>
              </div>
            </div>
            <div className="yt-videos">
              <video
                src="videos/joYaad.mp4"
                className="video"
                type="video/mp4"
                width="370px"
                controls
              ></video>
              <div className="yt-video-deatails">
                <i className="fas fa-user-circle"></i>
                <div className="yt-details-wrap">
                  <h3>Roi Na Je Yaad Meri Aayi Ve || Roi na song </h3>
                  <span>Crown Records</span>
                  <span>120M views . 5 month</span>
                </div>
              </div>
            </div>
            <div className="yt-videos">
              <video
                src="videos/palPal.mp4"
                className="video"
                type="video/mp4"
                width="370px"
                controls
              ></video>
              <div className="yt-video-deatails">
                <i className="fas fa-user-circle"></i>
                <div className="yt-details-wrap">
                  <h3>Pal Pal Dil Ke Paas –Title | Arijit Singh </h3>
                  <span>T - Series</span>
                  <span>305M views . 9 Month Ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
