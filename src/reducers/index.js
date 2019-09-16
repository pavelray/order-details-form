//import { ADD_SHIPPING, ADD_BILLING, SHOW_DETAILS, ADD_PRODUCT_SPEC, ADD_ORDER, SUBMIT_DETAILS } from "../constants/actions";

import {combineReducers} from 'redux';
import shippingReducer  from './shipping';
import billingReducer from './billing';
import orderDetailsReducer from './orderDetails';
import specificationsReducer from './specification';
import detailsReducer from './details';

/*const initialState = {
    step:1,
    billingAddress: {},
    shippingAddress: {},
    orderDetails: {},
    specifications: {}
  };


const rootReducer = (state=initialState, action) => {

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
}; */

const rootReducer = combineReducers({
    shippingReducer,
    billingReducer,
    orderDetailsReducer,
    specificationsReducer,
    detailsReducer
});

export default rootReducer;