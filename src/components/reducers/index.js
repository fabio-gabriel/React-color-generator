import { combineReducers } from "redux";
import { cardReducer } from "./cardReducer";
import { logReducer } from "./loginReducer";

const rootReducer = combineReducers({ card: cardReducer, log: logReducer });

export default rootReducer;
