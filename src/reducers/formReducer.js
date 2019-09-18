import {initialState} from '../constants/state';
import { ADD_SHIPPING, ADD_BILLING, PERVIOUS_STEP, ADD_PRODUCT_SPEC, ADD_ORDER, SUBMIT_DETAILS } from "../constants/actions";

export default (state = initialState, action) => {
    let rObj;
    switch(action.type){
        case ADD_SHIPPING:
            rObj = {
                ...state,
                shippingAddress: action.payload,
                step: state.step+1
            }
            return rObj;
        case ADD_BILLING:
            rObj = {
                ...state,
                billingAddress: action.payload,
                step: state.step+1
            }
            return rObj;
        case ADD_ORDER:
            rObj = {
                ...state,
                orderDetails: action.payload,
                step: state.step+1
            }
            return rObj;
        case ADD_PRODUCT_SPEC:
            rObj = {
                ...state,
                specifications: action.payload,
                step: state.step+1
            }
            return rObj;
        case PERVIOUS_STEP:
            rObj = {
                ...state,
                step: state.step-1
            }
            return rObj;
        case SUBMIT_DETAILS:
            rObj = {
                ...state,
                step: state.step+1
            }
            return rObj;
        default:
            return state;
    }
};
