import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { saveTravelPurposeInfo } from "../../../redux/aicncActions";
import BookingSummaryBlock from "../../BookingAgreementPage/BookingSummaryBlock/BookingSummaryBlock";
import "./TravelPurpose.css";

const TravelPurpose = ({ bookingInfo, saveTravelPurposeInfo }) => {
  let history = useHistory();
  const [travelPurpose, setTravelPurpose] = useState("");

  const travelPurposeInfoHandler = (e) => {
    e.preventDefault();
    saveTravelPurposeInfo(bookingInfo, travelPurpose);
    history.push("/payment");
  };
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
                <span>3. Confirm and pay</span>
              </div>
              <div className="travel-purpose-section">
                <h5 className="pb-2">Travelling for work?</h5>
                <div className="travel-purpose-section-short-description">
                  <div>
                    <p>Say Hello to your host</p>
                    <p>
                      Let Sakib know a little about yourseld and why you're
                      coming?
                    </p>
                    <form
                      className="travel-purpose-form"
                      onSubmit={travelPurposeInfoHandler}
                    >
                      <textarea
                        type="text"
                        name="travelPurpose"
                        value={travelPurpose}
                        placeholder="Tell Sakib about your travel purpose in brief."
                        required
                        onChange={(e) => setTravelPurpose(e.target.value)}
                      />
                      <button
                        type="submit"
                        // onClick={travelPurposeInfoHandler}
                        className="travel-purpose-button"
                      >
                        Continue
                      </button>
                    </form>
                  </div>
                  <div>
                    <img
                      src="https://i.ibb.co/dBZykMx/Md-Masrur-Rahman-S.png"
                      alt=""
                    />
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

const mapDispatchToProps = {
  saveTravelPurposeInfo: saveTravelPurposeInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TravelPurpose);
