import {initialState} from '../constants/state';
import { ADD_SHIPPING } from '../constants/actions';

const shippingReducer = (state=initialState, action) => {

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

export default shippingReducer;