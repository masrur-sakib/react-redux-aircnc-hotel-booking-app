import React from "react";
import { connect } from "react-redux";
import "./BookingSummaryBlock.css";
import { FaStar } from "react-icons/fa";

const BookingSummaryBlock = ({ bookingInfo }) => {
  return (
    <div className="booking-agreement-summary-block">
      <div className="booking-agreement-summary-block-header">
        <div className="row">
          <div className="col-lg-7">
            <h4>{bookingInfo.name}</h4>
            <div className="rating-section">
              <FaStar />
              &nbsp;
              <span>
                {bookingInfo.rating +
                  " (" +
                  bookingInfo.ratingCount +
                  " reviews)"}
              </span>
            </div>
          </div>
          <div className="col-lg-5">
            <img src={bookingInfo.img} alt="" />
          </div>
        </div>
      </div>
      <h6 className="summary-date-section-title">Dates</h6>
      <div className="summary-date-section">
        <h6>{bookingInfo.arrival}</h6>
        &#10142;
        <h6>{bookingInfo.departure}</h6>
      </div>
      <h6 className="summary-guests-section-title">Guests</h6>
      <div className="summary-guests-section">
        <h6>{bookingInfo.totalGuests + " guests"}</h6>
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
            <strong>{"$" + bookingInfo.total}</strong>
          </p>
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
  // saveReservationInfo: saveReservationInfo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingSummaryBlock);
