import { createStore } from "redux";
import aircncReducers from "./aircncReducers";

export const store = createStore(
  aircncReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
