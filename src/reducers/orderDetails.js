import {initialState} from '../constants/state';
import { ADD_ORDER } from '../constants/actions';

const orderDetailsReducer = (state=initialState, action) => {

    if(action.type === ADD_ORDER){
        const rObj = {
            ...state,
            orderDetails: action.payload,
            step: state.step+1
        }
        return rObj;
    }
    return state;
};

export default orderDetailsReducer;