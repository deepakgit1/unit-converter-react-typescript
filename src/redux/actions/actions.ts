interface iVal{
    inputUnit:string,
    outputUnit:string,
    val:0
}

interface LoginVal{
    username: string,
    password: string
}

interface LengthVal{
    inputLength:string,
    outputLength:string,
    val:0
}

interface AreaVal{
    inputArea:string,
    outputArea:string,
    val:0
}

export type Action ={
    type:string,
    payload: iVal
}

export type LenghtType={
    type:string,
    payload: LengthVal
}

export type AreaType={
    type:string,
    payload: AreaVal
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

export const lengthUnit =(data:any)=>{
    return{
        type:"LENGTH CONVERT",
        payload:data
    }
}

export const areaUnit =(data:any)=>{
    return{
        type:"AREA CONVERT",
        payload:data
    }
}

export const loginAuth =(data:any)=>{
    return{
        type:"LOGIN",
        payload:data
    }
} 
