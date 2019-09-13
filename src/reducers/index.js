import { ADD_SHIPPING, ADD_BILLING, SHOW_DETAILS, ADD_PRODUCT_SPEC, ADD_ORDER, SUBMIT_DETAILS } from "../constants/actions";

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
    if(action.type === ADD_BILLING){
        const rObj = {
            ...state,
            billingAddress: action.payload,
            step: state.step+1
        }
        return rObj;
    }
    if(action.type === ADD_ORDER){
        const rObj = {
            ...state,
            orderDetails: action.payload,
            step: state.step+1
        }
        return rObj;
    }
    if(action.type === ADD_PRODUCT_SPEC){
        const rObj = {
            ...state,
            specifications: action.payload,
            step: state.step+1
        }
        return rObj;
    }

    if(action.type === SHOW_DETAILS){
        const rObj = {
            ...state,
            step: state.step-1
        }
        return rObj;
    }
    if(action.type === SUBMIT_DETAILS){
        const rObj = {
            ...state,
            step: state.step+1
        }
        return rObj;
    }
    return state;
};

export default rootReducer;