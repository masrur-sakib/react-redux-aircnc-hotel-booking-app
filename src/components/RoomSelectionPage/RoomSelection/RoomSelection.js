import React from "react";
import MapSection from "../MapSection/MapSection";
import RoomsSection from "../RoomsSection/RoomsSection";
import "./RoomSelection.css";

const RoomSelection = () => {
  return (
    <div className="room-selection-page">
      <div className="row">
        <div className="col-lg-5">
          <RoomsSection />
        </div>
        <div className="col-lg-7">
          <MapSection />
        </div>
      </div>
    </div>
  );
};

export default RoomSelection;
