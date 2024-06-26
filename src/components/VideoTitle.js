import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-48 pl-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-semibold text-6xl">{title}</h1>
      <p className="text-lg py-6 w-1/2">{overview}</p>
      <div>
        <button className="px-12 py-2 bg-white text-lg text-black rounded-lg hover:bg-opacity-80">
          {" "}
          Play
        </button>
        <button className="px-12 py-2 mx-2 bg-gray-500 text-white text-lg rounded-lg hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
