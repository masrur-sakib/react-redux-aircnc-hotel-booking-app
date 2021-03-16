export const SAVE_SUBMITTED_INFO = "SAVE_SUBMITTED_INFO";
export const SAVE_SELECTED_ROOM_INFO = "SAVE_SELECTED_ROOM_INFO";
export const SAVE_RESERVATION_INFO = "SAVE_RESERVATION_INFO";

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
