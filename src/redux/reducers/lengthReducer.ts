import { LenghtType } from "../actions/actions";

const initialVal = ""

const changeLength = (state=initialVal,action:LenghtType)=>{
   
    if(action.type==="LENGTH CONVERT"){
        if (action.payload.inputLength === "Meter") {
            switch (action.payload.outputLength) {
                case "Meter": return action.payload.val * 1;
                case "Kilometer": return action.payload.val * 0.001;
                case "Centimeter": return action.payload.val * 100;
                case "Milimeter": return action.payload.val * 1000;
                case "Mile": return action.payload.val * 0.0006213689;
                default:
                    break;
            }
        } else if (action.payload.inputLength === "Kilometer") {
            switch (action.payload.outputLength) {
                case "Meter": return action.payload.val * 1000;
                case "Kilometer": return action.payload.val * 1;
                case "Centimeter": return action.payload.val * 100000;
                case "Milimeter": return action.payload.val * 1000000;
                case "Mile": return action.payload.val * 0.6213688756;
                default:
                    break;
            }
        } else if (action.payload.inputLength === "Centimeter") {
            switch (action.payload.outputLength) {
                case "Meter": return action.payload.val * 0.01;
                case "Kilometer": return action.payload.val * 0.00001;
                case "Centimeter": return action.payload.val * 1;
                case "Milimeter": return action.payload.val * 10;
                case "Mile": return action.payload.val * 0.0000062137;
                default:
                    break;
            }
        } else if (action.payload.inputLength === "Milimeter") {
            switch (action.payload.outputLength) {
                case "Meter": return action.payload.val * 0.001;
                case "Kilometer": return action.payload.val * 0.000001;
                case "Centimeter": return action.payload.val * 0.1;
                case "Milimeter": return action.payload.val * 1;
                case "Mile": return action.payload.val * 6.213688756E-7;
                default:
                    break;
            }
        } else if (action.payload.inputLength === "Mile") {
            switch (action.payload.outputLength) {
                case "Meter": return action.payload.val * 1609.35;
                case "Kilometer": return action.payload.val * 1.60935;
                case "Centimeter": return action.payload.val * 160935;
                case "Milimeter": return action.payload.val * 1609350;
                case "Mile": return action.payload.val * 1;
                default:
                    break;
            }
        }
        console.log(state)
        return state
    }else{
        return state
    }
}

export default changeLength;