import React from "react";
import { Link } from "react-router-dom";
import "./ourDairyCard.scss";
import { format, parseISO } from "date-fns";
import LazyLoad from "react-lazy-load";

const OurDairyCard = ({ id, image, title, date, description, link }) => {
  return (
    <Link
      key={id}
      className={`gridDiv${id} grid-item`}
      to={link}
      target="blank"
    >
      <LazyLoad height={"100%"} offset={300}>
        <img src={image} alt="" className="ourDairyImage" />
      </LazyLoad>
      <div className="ourDairyAbsolute">
        <div className="text-end">
          <span className="label">{title}</span>
        </div>
        <div className="date-text-div">
          <div className="date">{format(parseISO(date), "dd MMM yyyy")}</div>
          <div className="text">{description}</div>
        </div>
      </div>
    </Link>
  );
};

export default OurDairyCard;
