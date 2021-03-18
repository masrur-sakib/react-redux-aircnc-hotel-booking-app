import {
  CLEAR_INFO,
  SAVE_AGREEMENT_INFO,
  SAVE_RESERVATION_INFO,
  SAVE_SELECTED_ROOM_INFO,
  SAVE_SUBMITTED_INFO,
  SAVE_TRAVEL_PURPOSE_INFO,
  USER_LOGIN,
  USER_LOGOUT,
} from "./aicncActions";

const initialState = {
  userLoggedIn: false,
  bookingInfo: null,
};

const aircncReducers = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        userLoggedIn: true,
      };
    case USER_LOGOUT:
      return {
        ...state,
        userLoggedIn: false,
      };
    case SAVE_SUBMITTED_INFO:
      return {
        ...state,
        bookingInfo: action.payload,
      };

    case SAVE_SELECTED_ROOM_INFO:
      return {
        ...state,
        bookingInfo: action.payload,
      };

    case SAVE_RESERVATION_INFO:
      return {
        ...state,
        bookingInfo: action.payload,
      };

    case SAVE_AGREEMENT_INFO:
      return {
        ...state,
        bookingInfo: action.payload,
      };

    case SAVE_TRAVEL_PURPOSE_INFO:
      return {
        ...state,
        bookingInfo: action.payload,
      };

    case CLEAR_INFO:
      return {
        ...state,
        bookingInfo: null,
      };

    default:
      return state;
  }
};

export default aircncReducers;
