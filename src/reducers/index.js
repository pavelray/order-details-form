import { ADD_SHIPPING } from "../constants/actions";

const initialState = {
    step:1,
    billingAddress: {},
    shippingAddress: {},
    orderDetails: {},
    specifications: {}
  };


function rootReducer(state = initialState, action) {
    if(action.type === ADD_SHIPPING){
        const rObj = {
            ...state,
            shippingAddress: action.payload,
            step: state.step+1
        }
        return rObj;
    }
    return state;
};

export default rootReducer;