import React from "react";
import BookingSummary from "../../RoomDetailsPage/BookingSummary/BookingSummary";
import ReviewRules from "../ReviewRules/ReviewRules";
import "./BookingAgreement.css";

const BookingAgreement = () => {
  return (
    <div>
      <div className="container">
        <div className="booking-agreement-summary-section">
          <div className="row">
            <div className="col-lg-7">
              <div className="step-indicator">
                <span className="current-step">
                  1. Review House Rules &gt;{" "}
                </span>
                <span>2. Who's coming? &gt; </span>
                <span>3. Confirm and pay</span>
              </div>
              <ReviewRules />
            </div>
            <div className="col-lg-5">
              <div className="agreement-page-summary-container">
                <BookingSummary />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingAgreement;
