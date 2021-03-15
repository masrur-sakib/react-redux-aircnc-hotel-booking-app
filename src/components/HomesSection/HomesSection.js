import React from "react";
import "./HomesSection.css";
import { FaStar } from "react-icons/fa";

const HomesSection = (props) => {
  return (
    <div className="home-card-item">
      <img className="home-card-img" src={props.home.img} alt=""></img>
      <p className="home-card-place">
        <strong>{props.home.place}</strong>
      </p>
      <p className="home-card-title">{props.home.title}</p>
      <p>
        <small>
          $<span>{props.home.price}</span> per person
        </small>
      </p>
      <div className="home-card-rating">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <span className="home-card-rating-point">{props.home.rating}</span>
      </div>
    </div>
  );
};

export default HomesSection;
