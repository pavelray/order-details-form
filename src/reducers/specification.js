import {initialState} from '../constants/state';
import { ADD_PRODUCT_SPEC } from '../constants/actions';
    
const specificationsReducer = (state=initialState, action) => {
    if(action.type === ADD_PRODUCT_SPEC){
        const rObj = {
            ...state,
            specifications: action.payload,
            step: state.step+1
        }
        return rObj;
    }
    return state;
};

export default specificationsReducer;
