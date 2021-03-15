import React from "react";
import "./ExperienceSection.css";
import { FaStar } from "react-icons/fa";

const ExperienceSection = (props) => {
  return (
    <div className="experience-card-item">
      <img
        className="experience-card-img"
        src={props.experience.img}
        alt=""
      ></img>
      <p className="experience-card-place">
        <strong>{props.experience.place}</strong>
      </p>
      <p className="experience-card-title">{props.experience.title}</p>
      <p>
        <small>
          $<span>{props.experience.price}</span> per person
        </small>
      </p>
      <div className="experience-card-rating">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <span className="experience-card-rating-point">
          {props.experience.rating}
        </span>
      </div>
    </div>
  );
};

export default ExperienceSection;
