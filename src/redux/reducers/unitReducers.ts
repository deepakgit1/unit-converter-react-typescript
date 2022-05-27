import { Action } from "../actions/actions";

const initialVal = ""

const changeUnit = (state=initialVal,action:Action)=>{
   
    if(action.type==="CONVERT"){
        if (action.payload.inputUnit === "KGS") {
            switch (action.payload.outputUnit) {
                case "KGS": return action.payload.val * 1;
                case "GMS": return action.payload.val * 1000;
                case "MGS": return action.payload.val * 1000000;
                case "POUND": return action.payload.val * 2.2046244202;
                case "TONNE": return action.payload.val * 0.001;
                default:
                    break;
            }
        } else if (action.payload.inputUnit === "GMS") {
            switch (action.payload.outputUnit) {
                case "KGS": return action.payload.val * 0.001;
                case "GMS": return action.payload.val * 1;
                case "MGS": return action.payload.val * 1000;
                case "POUND": return action.payload.val * 0.0022046244;
                case "TONNE": return action.payload.val * 0.000001;
                default:
                    break;
            }
        } else if (action.payload.inputUnit === "MGS") {
            switch (action.payload.outputUnit) {
                case "KGS": return action.payload.val * 0.000001;
                case "GMS": return action.payload.val * 0.001;
                case "MGS": return action.payload.val * 1;
                case "POUND": return action.payload.val * 0.0000022046;
                case "TONNE": return action.payload.val * 0.000000001;
                default:
                    break;
            }
        } else if (action.payload.inputUnit === "POUND") {
            switch (action.payload.outputUnit) {
                case "KGS": return action.payload.val * 0.453592;
                case "GMS": return action.payload.val * 453.592;
                case "MGS": return action.payload.val * 453592;
                case "POUND": return action.payload.val * 1;
                case "TONNE": return action.payload.val * 0.000453592;
                default:
                    break;
            }
        } else if (action.payload.inputUnit === "TONNE") {
            switch (action.payload.outputUnit) {
                case "KGS": return action.payload.val * 1000;
                case "GMS": return action.payload.val * 1000000;
                case "MGS": return action.payload.val * 1000000000;
                case "POUND": return action.payload.val * 2204.6244202;
                case "TONNE": return action.payload.val * 1;
                default:
                    break;
            }
        }else if(action.payload.inputUnit === "" && action.payload.outputUnit==="" ){
            return ""
        }
        console.log(state)
        return state
    }else{
        return state
    }
}

export default changeUnit;