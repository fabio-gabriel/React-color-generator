import { legacy_createStore } from "redux";
import { cardReducer } from "./components/cardReducer";

let store = legacy_createStore(cardReducer);

export default store;
