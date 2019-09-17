
import {ADD_SHIPPING, ADD_BILLING, ADD_PRODUCT_SPEC, ADD_ORDER, SUBMIT_DETAILS, PERVIOUS_STEP} from '../constants/actions';

export const addShipping = (payload) => {
    return { type: ADD_SHIPPING, payload };
}

export const addBilling = (payload) => {
    return { type: ADD_BILLING, payload };
}

export const addOrder = (payload) => {
    return { type: ADD_ORDER, payload };
}

export const addProductSpec = (payload) => {
    return { type: ADD_PRODUCT_SPEC, payload };
}

export const getDetails = (payload) => {
    return { type: PERVIOUS_STEP, payload };
}

export const submitDetails = (payload) => {
    return { type: SUBMIT_DETAILS, payload };
}