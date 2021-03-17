import React from "react";
import { connect } from "react-redux";
import "./Payment.css";

const Payment = ({ bookingInfo }) => {
  console.log(bookingInfo);
  return (
    <div>
      <p>Payment Page</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bookingInfo: state.bookingInfo,
  };
};

export default connect(mapStateToProps, null)(Payment);
