import React from "react";
import "./BookingSummary.css";
import { FaStar } from "react-icons/fa";
import { connect } from "react-redux";
import { saveReservationInfo } from "../../../redux/aicncActions";
import { useHistory } from "react-router";

const BookingSummary = ({ bookingInfo, userLoggedIn, saveReservationInfo }) => {
  let history = useHistory();
  const total = bookingInfo.subTotal + 10 + 10;
  const reservationInfoHandler = () => {
    saveReservationInfo(bookingInfo, total);
    history.push("/booking-agreement");
  };
  const userSignInHandler = () => {
    history.push("/login");
  };
  return (
    <div className="booking-summary-block">
      <h5 className="room-price">{"$" + bookingInfo.price + " /night"}</h5>
      <div className="rating-section">
        <FaStar />
        &nbsp;
        <span>
          {bookingInfo.rating + " (" + bookingInfo.ratingCount + " reviews)"}
        </span>
      </div>
      <h6 className="summary-date-section-title">Dates</h6>
      <div className="summary-date-section">
        <h5>{bookingInfo.arrival}</h5>
        &#10142;
        <h5>{bookingInfo.departure}</h5>
      </div>
      <h6 className="summary-guests-section-title">Guests</h6>
      <div className="summary-guests-section">
        <h5>{bookingInfo.totalGuests + " guests"}</h5>
      </div>
      <div className="total-charge-calculation-section">
        <div>
          <p>
            {`$${bookingInfo.price} x
              ${bookingInfo.roomsNeeded} room x ${bookingInfo.totalStay} nights`}
          </p>
          <p>{"$" + bookingInfo.subTotal}</p>
        </div>
        <div>
          <p>Cleaning Fee</p>
          <p>$10</p>
        </div>
        <div>
          <p>Service Fee</p>
          <p>$10</p>
        </div>
        <div className="summary-total-price">
          <p>
            <strong>Total</strong>
          </p>
          <p>
            <strong>{"$" + total}</strong>
          </p>
        </div>
        {userLoggedIn === true ? (
          <button
            className="summary-reserve-button"
            onClick={reservationInfoHandler}
          >
            Reserve
          </button>
        ) : (
          <button
            className="summary-reserve-button"
            onClick={userSignInHandler}
          >
            Reserve
          </button>
        )}

        <p className="summary-note">You won't be charged yet.</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bookingInfo: state.bookingInfo,
    userLoggedIn: state.userLoggedIn,
  };
};

const mapDispatchToProps = {
  saveReservationInfo: saveReservationInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingSummary);
