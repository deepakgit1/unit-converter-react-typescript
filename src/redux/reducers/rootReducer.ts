import { combineReducers } from "redux";
import authUser from "./loginReducer";
import changeUnit from "./unitReducers";

const rootReducer = combineReducers({
    changeUnit,
    authUser
})

export default rootReducer;