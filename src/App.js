import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import RoomSelection from "./components/RoomSelection/RoomSelection";

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
