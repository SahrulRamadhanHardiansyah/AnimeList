"use client";

import YouTube from "react-youtube";

const VideoPlayer = ({ videoId }) => {
  const options = {
    playerVars: {
      autoplay: 0,
    },
    width: "100%",
    height: "100%",
  };

  return (
    <div className="w-full px-4 py-2 flex justify-center items-center">
      <div className="w-full max-w-4xl aspect-video">
        <YouTube videoId={videoId} opts={options} className="w-full h-full" containerClassName="w-full h-full" iframeClassName="w-full h-full" />
      </div>
    </div>
  );
};

export default VideoPlayer;
