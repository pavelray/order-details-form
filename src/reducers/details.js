import {initialState} from '../constants/state';
import { SHOW_DETAILS, SUBMIT_DETAILS } from '../constants/actions';

const detailsReducer = (state=initialState, action) => {

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

export default detailsReducer;