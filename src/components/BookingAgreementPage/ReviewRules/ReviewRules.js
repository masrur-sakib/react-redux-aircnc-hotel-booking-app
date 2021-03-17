import React from "react";
import { connect } from "react-redux";
import "./ReviewRules.css";
import { FaBabyCarriage, FaSmoking } from "react-icons/fa";
import { MdPets, MdDoNotDisturb } from "react-icons/md";
import { useHistory } from "react-router";
import { saveAgreementInfo } from "../../../redux/aicncActions";

const ReviewRules = ({ bookingInfo, saveAgreementInfo }) => {
  let history = useHistory();

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

  const agreementHandler = () => {
    saveAgreementInfo(bookingInfo);
    history.push("/travel-purpose");
  };

  return (
    <div className="review-rules-section">
      <h4>Review House Rules</h4>
      <h6 className="total-stay-location">
        {bookingInfo.totalStay + " nights in " + bookingInfo.location}
      </h6>
      <div className="check-in-checkout-section">
        <div className="check-in-section">
          <div className="check-in-month-day">
            <p>{arrivalMonth}</p>
            <p>{arrivalDay}</p>
          </div>
          <div>
            <p>Check-in</p>
            <p>After 12:00 PM</p>
          </div>
        </div>
        <div className="checkout-section">
          <div className="checkout-month-day">
            <p>{departureMonth}</p>
            <p>{departureDay}</p>
          </div>
          <div>
            <p>Checkout</p>
            <p>Before 11:00 AM</p>
          </div>
        </div>
      </div>
      <p className="check-in-info">Self check-in with building staff</p>
      <h6 className="review-note-title">Things to keep in mind</h6>
      <div className="review-note">
        <div className="review-note-icon">
          <FaBabyCarriage />
        </div>
        <span>Suitable for children and infants</span>
      </div>
      <div className="review-note">
        <div className="review-note-icon">
          <MdPets />
        </div>
        <span>Pets allowed</span>
      </div>
      <div className="review-note">
        <div className="review-note-icon">
          <MdDoNotDisturb />
        </div>
        <span>No parties or events</span>
      </div>
      <div className="review-note">
        <div className="review-note-icon">
          <FaSmoking />
        </div>
        <span>Smoking allowed</span>
      </div>
      <button className="rules-agreement-button" onClick={agreementHandler}>
        Agree and Continue
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bookingInfo: state.bookingInfo,
  };
};

const mapDispatchToProps = {
  saveAgreementInfo: saveAgreementInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewRules);
