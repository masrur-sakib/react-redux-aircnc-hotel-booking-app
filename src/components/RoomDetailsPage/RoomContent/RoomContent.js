import React from "react";
import "./RoomContent.css";
import { FaHome, FaCheckSquare, FaUserAlt, FaStar } from "react-icons/fa";
import { BiSprayCan } from "react-icons/bi";

const RoomContent = ({ bookingInfo }) => {
  return (
    <div className="room-content-section">
      <div className="room-content-section-title">
        <h4>{bookingInfo.name}</h4>
        <div className="user-avatar-section">
          <img src="https://i.ibb.co/dBZykMx/Md-Masrur-Rahman-S.png" alt="" />
          <p className="text-center">Sakib</p>
        </div>
      </div>
      <div className="location-and-facilities">
        <p className="hotel-location">{bookingInfo.location}</p>
        <p>{bookingInfo.facilities}</p>
      </div>
      <div className="room-features">
        <div className="room-content-mini-section">
          <FaHome />
          <div>
            <p>
              <strong>Entire home</strong>
            </p>
            <p>You will have condonium to Yourself</p>
          </div>
        </div>
        <div className="room-content-mini-section">
          <FaCheckSquare />
          <div>
            <p>
              <strong>Self check-in</strong>
            </p>
            <p>You can check in with the doorman.</p>
          </div>
        </div>
        <div className="room-content-mini-section">
          <BiSprayCan />
          <div>
            <p>
              <strong>Sparkling clean</strong>
            </p>
            <p>Our guests always says this place is sparkling clean.</p>
          </div>
        </div>
        <div className="room-content-mini-section">
          <FaUserAlt />
          <div>
            <p>
              <strong>Sakib is a superhost</strong>
            </p>
            <p>
              Superhosts are experienced and highly rated hosts who are
              committed to providing great stays for guests.
            </p>
          </div>
        </div>
      </div>
      <div className="room-content-description">
        <p>
          It's newly constructed 7 storied building maintaining building code by
          famous architect. Enough lights and natural air are playing here. this
          place (apartment) is calm and noise free. You'll love this place for
          it's lovely and bright looks comfortable stay.
        </p>
        <p>
          You'll love this place for it's lovely and bright looks comfortable
          stay. It's newly constructed 7 storied building maintaining building
          code by famous architect. Enough lights and natural air are playing
          here. this place (apartment) is calm and noise free. You'll love this
          place for it's lovely and bright looks comfortable stay. You'll love
          this place.
        </p>
        <p>
          Enough lights and natural air are playing here. this place (apartment)
          is calm and noise free.
        </p>
      </div>
      <div>
        <h5>Reviews</h5>
        <div className="room-rating-section">
          <FaStar />
          &nbsp;
          <span>
            {bookingInfo.rating + " (" + bookingInfo.ratingCount + " reviews)"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RoomContent;
