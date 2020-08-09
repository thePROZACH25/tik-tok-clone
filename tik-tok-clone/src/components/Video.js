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
        src="https://v16m.tiktokcdn.com/6f0775043c50179ef2ca9722ecd5928c/5f330917/video/tos/useast2a/tos-useast2a-ve-0068c004/0831670ad54b44309d85ffff4612188d/?a=1233&br=2580&bt=1290&cr=0&cs=0&dr=0&ds=3&er=&l=202008092109420101902192230746630E&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=am9mdzc5dWlkdjMzNjczM0ApaTRlZWc4ODxnNztpaDY0Z2czX19wcGVrbjVfLS0xMTZzc2JiLTZhNS4uXy80YDZiMjM6Yw%3D%3D&vl=&vr="
      ></video>
      <VideoFooter />
    </div>
  );
}

export default Video;
