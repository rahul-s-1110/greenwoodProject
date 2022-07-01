import { INCRENENT_SIZE,DECREMENT_SIZE } from "../../actionType"

export const increaseAction = (parameter) =>{
    return{
        type : INCRENENT_SIZE,
        payload : parameter
    }
}

export const decreseAction = () =>{
    return{
        type:DECREMENT_SIZE
    }
}