import React from 'react';
import OrderDetails from './OrderDetails';
import BillingAddress from './BillingAddress';
import ShippingAddress from './ShippingAddress';
import ProductDetails from './ProductDetails';
import Confirm from './Confirm';
import Success from './Success';

export class App extends React.Component{

    state = {
        step:1,
        billingAddress: {},
        shippingAddress: {},
        orderDetails: {},
        specifications: {},
        sameAsShipping: false,
    }

    nextStep = (values) =>{
        const {step} = this.state;
        this.setState({
            step : step + 1,
            ...values
        })
    }

    prevStep = () =>{
        const {step} = this.state;

        this.setState({
            step : step - 1
        })
    }

    render(){
        const {step} = this.state;
        const {billingAddress, shippingAddress, orderDetails , specifications} =  this.state;

        const values =  {billingAddress, shippingAddress, orderDetails , specifications};

        switch(step){
            
            case 2:
                return(
                    <BillingAddress 
                        title = 'Billing Information'
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        copyShippingAddress = {this.copyShippingAddress}
                        values = {billingAddress}
                        sameAsShipping = {this.state.sameAsShipping}
                    />
                )
            case 3:
                return(
                    <OrderDetails 
                        title = 'Order Details'
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values = {orderDetails}
                    />
                )
            case 4:
                return(
                    <ProductDetails 
                        title = 'Product Specifications'
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values = {specifications}
                    />
                ) 
            case 5:
                return(
                    <Confirm 
                        title = 'Confirm Details'
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values = {values}
                    />
                )
            
            case 6:
                return(
                    <Success values={values}/>
            )

            default:
                return(
                    <ShippingAddress 
                        title = 'Shipping Information'
                        nextStep={this.nextStep}
                        values = {shippingAddress}
                    />
                )
        
        }
    };
}

export default App;