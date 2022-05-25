export type Action ={
    type:string,
    payload: string | number
}

export const convertUnit =()=>{
    return{
        type:"CONVERT"
    }
}