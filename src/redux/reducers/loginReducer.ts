import { LoginType } from "../actions/actions";

const initialVal = "";

const authUser =(state=initialVal,action:LoginType)=>{
    // console.log(action)
    if(action.type === "LOGIN"){
        if(action.payload.username === "user" && action.payload.password === "user"){
            localStorage.setItem("user",action.payload.username)
            return state = "user"
        }else if(!action.payload.username || !action.payload.password){
            alert("Please Enter All Credentials.")
        }else{
            alert("Invalid username or password!!!") 
        }
    }
    return state
}

export default authUser;