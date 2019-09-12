import React from 'react';
import OrderDetails from './OrderDetails';
import BillingAddress from './BillingAddress';
import ShippingAddress from './ShippingAddress';
import ProductDetails from './ProductDetails';
import Confirm from './Confirm';
import Success from './Success';
import { connect } from "react-redux";
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App(props) {
    return (
        <Router>
            <Route exact strict path="/" render={()=> <ShippingAddress title = 'Shipping Information'/>} />
            <Route exact strict path="/step-1" render={()=> <ShippingAddress title = 'Shipping Information'/>} />
            <Route exact strict path="/step-2" render={()=> <BillingAddress title = 'Billing Information'/>} />
            <Route exact strict path="/step-3" render={()=> <OrderDetails title = 'Order Details'/>} />
            <Route exact strict path="/step-4" render={()=> <ProductDetails title = 'Product Specifications'/>} />
            <Route exact strict path="/step-5" render={()=> <Confirm title = 'Confirm Details'/>} />
            <Route exact strict path="/step-6" render={()=> <Success />} />

        </Router>
    );
  }

const mapStateToProps = state => {
    return { step: state.step };
};

export default connect(mapStateToProps)(App);