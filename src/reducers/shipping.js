import {initialState} from '../constants/state';
import { ADD_SHIPPING } from '../constants/actions';

const shippingReducer = (state=initialState, action) => {

    if(action.type === ADD_SHIPPING){
        state = {
            ...state,
            shippingAddress: action.payload,
            step: state.step+1
        }
    }
    
    return state;
};

export default shippingReducer;