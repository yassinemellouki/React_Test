import { combineReducers } from "redux";
import resume from "./resumeReducer";
import app from "./appReducer";

const rootReducer = combineReducers({
  resume,
  app
});

export default rootReducer;
