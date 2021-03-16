import React, { useState } from "react";
import { connect } from "react-redux";
import dataRoomInfo from "../../../data/dataRoomInfo/dataRoomInfo";
import RoomInfo from "../RoomInfo/RoomInfo";
import "./RoomsSection.css";

const RoomsSection = ({ bookingInfo }) => {
  const [roomsInfo] = useState(dataRoomInfo);

  let arrivalFullDate = new Date(bookingInfo.arrival);
  let departureFullDate = new Date(bookingInfo.departure);

  let arrivalMonth = arrivalFullDate.toLocaleString("en-us", {
    month: "short",
  });
  let departureMonth = departureFullDate.toLocaleString("en-us", {
    month: "short",
  });

  let arrivalDay = arrivalFullDate.getUTCDate();
  let departureDay = departureFullDate.getUTCDate();

  return (
    <div className="room-section">
      <div className="search-short-description">
        <span>{arrivalMonth + " " + arrivalDay + " - "}</span>
        <span>{departureMonth + " " + departureDay}</span>
        &nbsp; &#124; &#124; &nbsp;
        <span>
          {bookingInfo.adults + bookingInfo.child + bookingInfo.babies}
        </span>
        <span> Guests</span>
        <h4>
          Stay in &nbsp;
          <span>{bookingInfo.location}</span>
          &nbsp; Division
        </h4>
      </div>
      <div className="room-filters-section">
        <p>Cancellation flexibility</p>
        <p>Type of place</p>
        <p>Price</p>
        <p>Instant Book</p>
        <p>More Filters</p>
      </div>
      <div className="room-info">
        {roomsInfo.map((room) => (
          <RoomInfo key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bookingInfo: state.bookingInfo,
  };
};

export default connect(mapStateToProps, null)(RoomsSection);
