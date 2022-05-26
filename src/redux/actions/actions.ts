interface iVal{
    inputUnit:string,
    outputUnit:string,
    val:0
}

interface LoginVal{
    username: string,
    password: string
}

export type Action ={
    type:string,
    payload: iVal
}

export type LoginType={
    type : string,
    payload: LoginVal
}

export const convertUnit =(data:any)=>{
    return{
        type:"CONVERT",
        payload:data
    }
}

export const loginAuth =(data:any)=>{
    return{
        type:"LOGIN",
        payload:data
    }
} 
