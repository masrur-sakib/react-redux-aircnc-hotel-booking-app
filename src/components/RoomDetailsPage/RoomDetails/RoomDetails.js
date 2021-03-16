import React from "react";
import { connect } from "react-redux";
import BookingSummary from "../BookingSummary/BookingSummary";
import RoomContent from "../RoomContent/RoomContent";
import "./RoomDetails.css";

const RoomDetails = (props) => {
  const { bookingInfo } = props;

  return (
    <div className="room-details-page">
      <div className="cover-images-section">
        <div className="cover-image-left">
          <img
            src="https://i.ibb.co/5414knK/photo-1560347876-aeef00ee58a1.jpg"
            alt=""
          />
        </div>
        <div className="cover-image-right">
          <img src={bookingInfo.img} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="room-content-summary-section">
          <div className="row">
            <div className="col-lg-7">
              <RoomContent bookingInfo={bookingInfo} />
            </div>
            <div className="col-lg-5">
              <BookingSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bookingInfo: state.bookingInfo,
  };
};

export default connect(mapStateToProps, null)(RoomDetails);
