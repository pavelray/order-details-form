import {initialState} from '../constants/state';
import { ADD_BILLING } from '../constants/actions';

const billingReducer = (state=initialState, action) => {
    if(action.type === ADD_BILLING){
        const rObj = {
            ...state,
            billingAddress: action.payload,
            step: state.step+1
        }
        return rObj;
    }
    return state;
};

export default billingReducer;
    
