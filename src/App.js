import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/HomePage/Home/Home";
import RoomSelection from "./components/RoomSelectionPage/RoomSelection/RoomSelection";
import RoomDetails from "./components/RoomDetailsPage/RoomDetails/RoomDetails";
import BookingAgreement from "./components/BookingAgreementPage/BookingAgreement/BookingAgreement";
import TravelPurpose from "./components/TravelPurposePage/TravelPurpose/TravelPurpose";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/room-selection">
            <RoomSelection />
          </Route>
          <Route path="/room-details">
            <RoomDetails></RoomDetails>
          </Route>
          <Route path="/booking-agreement">
            <BookingAgreement />
          </Route>
          <Route path="/travel-purpose">
            <TravelPurpose />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
