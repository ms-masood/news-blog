import { combineReducers } from "redux";
import userSetting from "./userSetting";

const allReducers = combineReducers({
  userSetting,
});

export default allReducers;
