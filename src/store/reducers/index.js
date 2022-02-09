import { combineReducers } from "redux";
import isLogged from "./isLogged";

const allReducers = combineReducers({
  logged: isLogged,
});

export default allReducers;
