import counterReducers from "./counter";
import isLoggedReducers from "./isLoggedReducers";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducers,
  login: isLoggedReducers
});

export default allReducers;
