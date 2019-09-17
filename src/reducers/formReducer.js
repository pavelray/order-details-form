import {initialState} from '../constants/state';
import { ADD_SHIPPING, ADD_BILLING, PERVIOUS_STEP, ADD_PRODUCT_SPEC, ADD_ORDER, SUBMIT_DETAILS } from "../constants/actions";

const formReducer = (state = initialState, action) => {
    
    switch(action.type){
        case ADD_SHIPPING:
            state = {
                ...state,
                shippingAddress: action.payload,
                step: state.step+1
            }
            return state;
        case ADD_BILLING:
            state = {
                ...state,
                billingAddress: action.payload,
                step: state.step+1
            }
            return state;
        case ADD_ORDER:
            state = {
                ...state,
                orderDetails: action.payload,
                step: state.step+1
            }
            return state;
        case ADD_PRODUCT_SPEC:
            state = {
                ...state,
                specifications: action.payload,
                step: state.step+1
            }
            return state;
        case PERVIOUS_STEP:
            state = {
                ...state,
                step: state.step-1
            }
            return state;
        case SUBMIT_DETAILS:
            state = {
                ...state,
                step: state.step+1
            }
            return state;
        default:
            return state;
    }
};

export default formReducer;