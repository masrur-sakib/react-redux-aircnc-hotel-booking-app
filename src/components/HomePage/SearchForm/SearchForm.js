import React, { useState } from "react";
import "./SearchForm.css";
import { FiSearch } from "react-icons/fi";
import { useHistory } from "react-router";
import { saveSubmittedInfo } from "../../../redux/aicncActions";
import { connect } from "react-redux";

const SearchForm = ({ saveSubmittedInfo }) => {
  let history = useHistory();

  let presentDateJS = new Date();
  let presentMonth = presentDateJS.getMonth() + 1;
  let presentDay = presentDateJS.getDate();
  if (presentMonth < 10) {
    presentMonth = "0" + presentMonth;
  }
  if (presentDay < 10) {
    presentDay = "0" + presentDay;
  }
  var presentDateHTML =
    presentDateJS.getFullYear() + "-" + presentMonth + "-" + presentDay;

  const [formInfo, setFormInfo] = useState({
    location: "",
    arrival: presentDateHTML.toString(),
    departure: presentDateHTML.toString(),
    adults: 1,
    child: 0,
    babies: 0,
  });

  const valueChangeHandler = (e) => {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    saveSubmittedInfo(formInfo);
    history.push("/room-selection");
  };

  return (
    <div className="search-form-section">
      <form onSubmit={formSubmitHandler}>
        {/* Location Element  */}
        <div className="form-element">
          <label htmlFor="location">LOCATION</label>
          <input
            type="text"
            name="location"
            value={formInfo.location}
            onChange={valueChangeHandler}
            placeholder="Add city ,landmark or address"
            required
          />
        </div>
        {/* Arrival Element  */}
        <div className="form-arrival-departure-element">
          <div className="form-element">
            <label className="grey-label" htmlFor="arrival">
              Arrival
            </label>
            <input
              type="date"
              name="arrival"
              value={formInfo.arrival}
              onChange={valueChangeHandler}
              required
            />
          </div>
          {/* Departure Element  */}
          <div className="form-element">
            <label className="grey-label" htmlFor="departure">
              Departure
            </label>
            <input
              type="date"
              name="departure"
              value={formInfo.departure}
              onChange={valueChangeHandler}
              required
            />
          </div>
        </div>
        <div className="form-element">
          {/* Guests Element Details  */}
          <h6 className="grey-label">Guests</h6>
          <p className="form-guests-element-details">
            {formInfo.adults > 0 ? formInfo.adults + " ADULTS, " : ""}
            {formInfo.child > 0 ? formInfo.child + " CHILD, " : ""}
            {formInfo.babies > 0 ? formInfo.babies + " BABIES" : ""}
          </p>
          {/* Adults Elements  */}
          <div className="guests-element-container">
            <div className="form-guests-element">
              <h6>ADULTS</h6>
              <div className="guests-number-container">
                <span
                  className="guests-number-change-button"
                  onClick={() => {
                    if (formInfo.adults > 0) {
                      setFormInfo({ ...formInfo, adults: formInfo.adults - 1 });
                    }
                  }}
                >
                  &minus;
                </span>
                <span>{formInfo.adults}</span>
                <span
                  className="guests-number-change-button"
                  onClick={() => {
                    setFormInfo({ ...formInfo, adults: formInfo.adults + 1 });
                  }}
                >
                  &#43;
                </span>
              </div>
            </div>
          </div>
          {/* Child Elements  */}
          <div className="guests-element-container">
            <div className="form-guests-element">
              <h6>CHILD</h6>
              <div className="guests-number-container">
                <span
                  className="guests-number-change-button"
                  onClick={() => {
                    if (formInfo.child > 0) {
                      setFormInfo({ ...formInfo, child: formInfo.child - 1 });
                    }
                  }}
                >
                  &minus;
                </span>
                <span>{formInfo.child}</span>
                <span
                  className="guests-number-change-button"
                  onClick={() => {
                    setFormInfo({ ...formInfo, child: formInfo.child + 1 });
                  }}
                >
                  &#43;
                </span>
              </div>
            </div>
            <p className="grey-label">Age 2-12</p>
          </div>

          {/* BABIES Elements  */}
          <div className="guests-element-container">
            <div className="form-guests-element">
              <h6>BABIES</h6>
              <div className="guests-number-container">
                <span
                  className="guests-number-change-button"
                  onClick={() => {
                    if (formInfo.babies > 0) {
                      setFormInfo({ ...formInfo, babies: formInfo.babies - 1 });
                    }
                  }}
                >
                  &minus;
                </span>
                <span>{formInfo.babies}</span>
                <span
                  className="guests-number-change-button"
                  onClick={() => {
                    setFormInfo({ ...formInfo, babies: formInfo.babies + 1 });
                  }}
                >
                  &#43;
                </span>
              </div>
            </div>
            <p className="grey-label">Younger than 2</p>
          </div>
        </div>
        <button className="form-submit-button" type="submit">
          <FiSearch className="form-submit-button-icon" />
          Submit
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  saveSubmittedInfo: saveSubmittedInfo,
};

export default connect(null, mapDispatchToProps)(SearchForm);
