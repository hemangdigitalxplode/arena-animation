import React, { useState } from "react";
import LazyLoad from "react-lazy-load";
import "./couresCard.scss";
import { Arrow, YellowArrow } from "../../assets";
import ReactPlayer from "react-player/lazy";

const CouresCard = ({ title, src }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <div className="border-style">
        <LazyLoad className="card-video" offset={300}>
          <ReactPlayer
            playsinline
            url={src}
            controls={false}
            width={"100%"}
            height={"100%"}
            playing={true}
            muted={true}
            loop={true}
            className="img"
          />
        </LazyLoad>
        {/* <img src={src} alt={title} className="img" /> */}
        <div className="bottom-div">
          <div className="title">{title}</div>
          <div className="arrow-div">
            <LazyLoad height={"100%"} offset={300}>
              <img
                src={isHovered ? YellowArrow : Arrow}
                alt="arrow"
                className="arrow"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </LazyLoad>
          </div>
        </div>
      </div>
    </>
  );
};

export default CouresCard;
