import { combineReducers } from "redux";
import authUser from "./loginReducer";
import changeUnit from "./unitReducers";
import changeLength from "./lengthReducer";
import changeArea from "./areaReducer";


const rootReducer = combineReducers({
    changeUnit,
    authUser,
    changeLength,
    changeArea,
})

export default rootReducer;