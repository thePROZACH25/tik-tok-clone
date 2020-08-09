import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import "./Video.css";

function Video() {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src="https://v16m.tiktokcdn.com/f2221faf4ba02f411b4f9795a8886370/5f32c9fe/video/tos/useast2a/tos-useast2a-ve-0068c003/350272427b154725897e4085847f6347/?a=1233&amp;br=5016&amp;bt=2508&amp;cr=0&amp;cs=0&amp;dr=0&amp;ds=3&amp;er=&amp;l=202008091640290101902090843F22C872&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;qs=0&amp;rc=am40eTRyOm51dTMzOzczM0ApNDloaTM2NTw0N2U6NjU0ZmdqZTUvbDAvczNfLS01MTZzcy5gYzU0Xi9fMTRhMF8wMjE6Yw%3D%3D&amp;vl=&amp;vr="
      ></video>
      <VideoFooter />
    </div>
  );
}

export default Video;
