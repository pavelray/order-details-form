import {combineReducers} from 'redux';
import shippingReducer  from './shipping';
import billingReducer from './billing';
import orderDetailsReducer from './orderDetails';
import specificationsReducer from './specification';
import detailsReducer from './details';

const rootReducer = combineReducers({
    shippingReducer,
    billingReducer,
    orderDetailsReducer,
    specificationsReducer,
    detailsReducer
});

export default rootReducer;