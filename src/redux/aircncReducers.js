import {
  CLEAR_INFO,
  SAVE_AGREEMENT_INFO,
  SAVE_RESERVATION_INFO,
  SAVE_SELECTED_ROOM_INFO,
  SAVE_SUBMITTED_INFO,
  SAVE_TRAVEL_PURPOSE_INFO,
} from "./aicncActions";

const initialState = {
  bookingInfo: null,
};

const aircncReducers = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SUBMITTED_INFO:
      return {
        bookingInfo: action.payload,
      };

    case SAVE_SELECTED_ROOM_INFO:
      return {
        bookingInfo: action.payload,
      };

    case SAVE_RESERVATION_INFO:
      return {
        bookingInfo: action.payload,
      };

    case SAVE_AGREEMENT_INFO:
      return {
        bookingInfo: action.payload,
      };

    case SAVE_TRAVEL_PURPOSE_INFO:
      return {
        bookingInfo: action.payload,
      };

    case CLEAR_INFO:
      return {
        bookingInfo: null,
      };

    default:
      return state;
  }
};

export default aircncReducers;
