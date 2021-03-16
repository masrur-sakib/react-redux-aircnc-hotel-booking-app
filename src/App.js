import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/HomePage/Home/Home";
import RoomSelection from "./components/RoomSelectionPage/RoomSelection/RoomSelection";
import RoomDetails from "./components/RoomDetailsPage/RoomDetails.js/RoomDetails";

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
            <RoomDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
