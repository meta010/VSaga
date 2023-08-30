import ReactPlayer from "react-player";
import React, { useRef } from "react";
import './Player.css'
function PlayerComponent({VIDEO_PATH}) {
    // const VIDEO_PATH = "https://youtu.be/0BIaDVnYp2A";
  const playerRef = useRef(null);
  return (
    <div>
      <ReactPlayer height={"50%"} width={"100%"} className='video-player' ref={playerRef} url={VIDEO_PATH} controls={true} />
    </div>
  );
}
export default PlayerComponent;
