import React from "react";
import "./RoomInfo.css";
import { FaStar } from "react-icons/fa";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { saveSelectedRoomInfo } from "../../../redux/aicncActions";

const RoomInfo = (props) => {
  let history = useHistory();

  const { bookingInfo, saveSelectedRoomInfo } = props;
  const {
    name,
    facilities,
    extra,
    cancellationPolicy,
    rating,
    ratingCount,
    price,
    img,
  } = props.room;

  const totalGuests =
    bookingInfo.adults + bookingInfo.child + bookingInfo.babies;
  const roomsNeeded = Math.ceil(totalGuests / 4);
  const subTotal = roomsNeeded * price * bookingInfo.totalStay;

  const roomInfoHandler = () => {
    saveSelectedRoomInfo(
      bookingInfo,
      props.room,
      roomsNeeded,
      totalGuests,
      subTotal
    );
    history.push("/room-details");
  };

  return (
    <div className="room-info-element" onClick={roomInfoHandler}>
      <div className="row">
        <div className="col-lg-5">
          <img src={img} alt="" />
        </div>
        <div className="col-lg-7">
          <h6>{name}</h6>
          <p>{facilities}</p>
          <p>{extra}</p>
          <p className="cancellation-policy">{cancellationPolicy}</p>
          <div className="rating-price-section">
            <div className="rating-section">
              <FaStar />
              &nbsp;
              <span>{rating + " (" + ratingCount + ")"}</span>
            </div>
            <div className="price-section">
              <p className="room-price">{"$" + price + " /night"}</p>
              <p>{"$" + subTotal + " total"}</p>
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

const mapDispatchToProps = {
  saveSelectedRoomInfo: saveSelectedRoomInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomInfo);
