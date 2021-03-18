export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
export const SAVE_SUBMITTED_INFO = "SAVE_SUBMITTED_INFO";
export const SAVE_SELECTED_ROOM_INFO = "SAVE_SELECTED_ROOM_INFO";
export const SAVE_RESERVATION_INFO = "SAVE_RESERVATION_INFO";
export const SAVE_AGREEMENT_INFO = "SAVE_AGREEMENT_INFO";
export const SAVE_TRAVEL_PURPOSE_INFO = "SAVE_TRAVEL_PURPOSE_INFO";
export const CLEAR_INFO = "CLEAR_INFO";

export const userLogIn = () => {
  return {
    type: USER_LOGIN,
  };
};

export const userLogOut = () => {
  return {
    type: USER_LOGOUT,
  };
};

export const saveSubmittedInfo = (info) => {
  // Total Stay Calculation
  const arrivalDate = new Date(info.arrival);
  const departureDate = new Date(info.departure);
  const timeDifference = Math.abs(departureDate - arrivalDate);
  const dateDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  const totalStay = dateDifference + 1;

  return {
    type: SAVE_SUBMITTED_INFO,
    payload: { ...info, totalStay: totalStay },
  };
};

export const saveSelectedRoomInfo = (
  bookingInfo,
  RoomInfo,
  roomsNeeded,
  totalGuests,
  subTotal
) => {
  return {
    type: SAVE_SELECTED_ROOM_INFO,
    payload: {
      ...bookingInfo,
      ...RoomInfo,
      roomsNeeded: roomsNeeded,
      totalGuests: totalGuests,
      subTotal: subTotal,
    },
  };
};
export const saveReservationInfo = (bookingInfo, total) => {
  return {
    type: SAVE_SELECTED_ROOM_INFO,
    payload: {
      ...bookingInfo,
      total: total,
    },
  };
};
export const saveAgreementInfo = (bookingInfo) => {
  return {
    type: SAVE_SELECTED_ROOM_INFO,
    payload: {
      ...bookingInfo,
      rulesAgreed: true,
    },
  };
};
export const saveTravelPurposeInfo = (bookingInfo, travelPurpose) => {
  return {
    type: SAVE_SELECTED_ROOM_INFO,
    payload: {
      ...bookingInfo,
      travelPurpose: travelPurpose,
    },
  };
};
export const clearInfo = () => {
  return {
    type: CLEAR_INFO,
  };
};
