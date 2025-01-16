import React from "react";
import Sidebar from "./Sidebar";
import VideoGrid from "./VideoGrid";

export default function Home() {
  return (
    <main>
      <section className="menu-video-box">
        <div className="container">
          <Sidebar/>
          <VideoGrid/>
        </div>
      </section>
    </main>
  );
}
