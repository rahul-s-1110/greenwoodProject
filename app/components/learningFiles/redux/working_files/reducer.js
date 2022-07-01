// import { Alert } from "react-native";
import { INCREMENT_SIZE,DECREMENT_SIZE } from "../../actionType";

const inititalState = {
    initialValue : 0
}

const ValueReducer = (state=inititalState,acton) =>{
    switch (acton.type) {
        case INCREMENT_SIZE:
            return{
               increse:state.initialValue + 1
            }
        case DECREMENT_SIZE :
            {
                decrese:state.initialValue - 1
            }
        default:
            {
                return state;
            }
    }
}
export default ValueReducer 