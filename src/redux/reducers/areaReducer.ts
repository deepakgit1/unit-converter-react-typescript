import { AreaType } from "../actions/actions";

const initialVal = ""

const changeArea = (state=initialVal,action:AreaType)=>{
   
    if(action.type==="AREA CONVERT"){
        if (action.payload.inputArea === "SquereMeter") {
            switch (action.payload.outputArea) {
                case "SquereMeter": return action.payload.val * 1;
                case "SquereKilometer": return action.payload.val * 0.000001;
                case "SquereCentimeter": return action.payload.val * 10000;
                case "SquereMilimeter": return action.payload.val * 1000000;
                case "Acre": return action.payload.val * 0.0002471054;
                default:
                    break;
            }
        } else if (action.payload.inputArea === "SquereKilometer") {
            switch (action.payload.outputArea) {
                case "SquereMeter": return action.payload.val * 1000000;
                case "SquereKilometer": return action.payload.val * 1;
                case "SquereCentimeter": return action.payload.val * 10000000000;
                case "SquereMilimeter": return action.payload.val * 1000000000000;
                case "Acre": return action.payload.val * 247.10538147;
                default:
                    break;
            }
        } else if (action.payload.inputArea === "SquereCentimeter") {
            switch (action.payload.outputArea) {
                case "SquereMeter": return action.payload.val * 0.0001;
                case "SquereKilometer": return action.payload.val * 1.E-10;
                case "SquereCentimeter": return action.payload.val * 1;
                case "SquereMilimeter": return action.payload.val * 100;
                case "Acre": return action.payload.val * 2.471053814E-8;
                default:
                    break;
            }
        } else if (action.payload.inputArea === "SquereMilimeter") {
            switch (action.payload.outputArea) {
                case "SquereMeter": return action.payload.val * 0.000001;
                case "SquereKilometer": return action.payload.val * 1.E-12;
                case "SquereCentimeter": return action.payload.val * 0.01;
                case "SquereMilimeter": return action.payload.val * 1;
                case "Acre": return action.payload.val * 2.471053814E-10;
                default:
                    break;
            }
        } else if (action.payload.inputArea === "Acre") {
            switch (action.payload.outputArea) {
                case "SquereMeter": return action.payload.val * 4046.8564224;
                case "SquereKilometer": return action.payload.val * 0.0404849413;
                case "SquereCentimeter": return action.payload.val * 404849412.71;
                case "SquereMilimeter": return action.payload.val * 40484941271;
                case "Acre": return action.payload.val * 1;
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

export default changeArea;