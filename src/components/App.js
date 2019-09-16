import React from 'react';
import OrderDetails from './OrderDetails';
import BillingAddress from './BillingAddress';
import ShippingAddress from './ShippingAddress';
import ProductDetails from './ProductDetails';
import Confirm from './Confirm';
import Success from './Success';
import { connect } from "react-redux";
//import mockApi from '../api/mockApi';

export class App extends React.Component{

    render(){
        const {step} = this.props;
       
        switch(step){
            
            case 2:
                return(
                    <BillingAddress 
                        title = 'Billing Information'
                    />
                )
            case 3:
                return(
                    <OrderDetails 
                        title = 'Order Details'
                    />
                )
            case 4:
                return(
                    <ProductDetails 
                        title = 'Product Specifications'
                    />
                ) 
            case 5:
                return(
                    <Confirm 
                        title = 'Confirm Details'
                    />
                )
            
            case 6:
                return(
                    <Success />
            )

            default:
                return(
                    <ShippingAddress 
                        title = 'Shipping Information'
                    />
                )
        
        }
    };
}


const mapStateToProps = state => {
    return { step: state.step };
};

export default connect(mapStateToProps)(App);