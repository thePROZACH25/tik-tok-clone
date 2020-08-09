import React from 'react';
import Video from "../src/components/Video"
import './App.css';

function App() {
  return (
    // BEM
    <div className="app">
      
      <div className="app___videos">
        <Video 
        url="https://v16m.tiktokcdn.com/6f0775043c50179ef2ca9722ecd5928c/5f330917/video/tos/useast2a/tos-useast2a-ve-0068c004/0831670ad54b44309d85ffff4612188d/?a=1233&br=2580&bt=1290&cr=0&cs=0&dr=0&ds=3&er=&l=202008092109420101902192230746630E&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=am9mdzc5dWlkdjMzNjczM0ApaTRlZWc4ODxnNztpaDY0Z2czX19wcGVrbjVfLS0xMTZzc2JiLTZhNS4uXy80YDZiMjM6Yw%3D%3D&vl=&vr="
        channel="Zach"
        description="I love it"
        song="back that ass up"
        likes={123}
        messages={85}
        shares={177}
        />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
      
      </div>
    </div>
  );
}

export default App;
