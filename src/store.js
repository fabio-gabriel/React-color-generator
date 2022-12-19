import { legacy_createStore } from "redux";
import rootReducer from "./components/reducers/index";

let store = legacy_createStore(rootReducer);

export default store;
