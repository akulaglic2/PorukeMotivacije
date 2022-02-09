import { combineReducers } from "redux";
import isLogged from "./isLogged";
import data from "./data";

const allReducers = combineReducers({
  logged: isLogged,
  data: data,
});

export default allReducers;
