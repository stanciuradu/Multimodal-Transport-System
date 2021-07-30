import { createStore } from "redux";
import userReducer from "../redux/reducers/userReducers";

const store = createStore(userReducer);

export default store;