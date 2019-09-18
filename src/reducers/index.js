import {combineReducers} from 'redux';
import formReducer  from './formReducer';


const reducers = combineReducers({
    store: formReducer
});

export default reducers;