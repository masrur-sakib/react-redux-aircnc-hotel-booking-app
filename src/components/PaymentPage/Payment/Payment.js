import React from "react";
import { connect } from "react-redux";
import BookingSummaryBlock from "../../BookingAgreementPage/BookingSummaryBlock/BookingSummaryBlock";
import "./Payment.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "../PaymentForm/PaymentForm";

const stripePromise = loadStripe("pk_test_HQajl2JHQiUqsUrjiPOEEpOZ00SOr6tG6W");

const Payment = ({ bookingInfo }) => {
  console.log(bookingInfo);
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
                <span className="current-step">2. Who's coming? &gt; </span>
                <span className="current-step">3. Confirm and pay</span>
              </div>
              <div className="payment-section">
                <p className="py-3">Payment Selection</p>
                <div className="payment-types">
                  <div className="stripe-payment">
                    <Elements stripe={stripePromise}>
                      <PaymentForm />
                    </Elements>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="agreement-page-summary-container">
                <BookingSummaryBlock />
              </div>
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

// const mapDispatchToProps = {
//   saveTravelPurposeInfo: saveTravelPurposeInfo,
// };

export default connect(mapStateToProps, null)(Payment);
