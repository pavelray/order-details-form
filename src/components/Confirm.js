import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {submitDetails,getDetails} from '../actions';

export class Confirm extends Component {
  
  componentDidMount(){
    this.setState({...this.props});
  }
  
  continue = e =>{
    e.preventDefault();
    this.props.submitDetails(this.state);
  }

  previous = e =>{
    e.preventDefault();
    this.props.getDetails();
  }

render() {
    const {title} = this.props;
    const {billingAddress, shippingAddress, orderDetails , specifications} =  this.props;
    return (
        <form className="ui form">
            <h2 className="ui dividing header">{title}</h2>
            <div className="ui segment">
                <h4 className="ui dividing header">Shipping Details</h4>
                <div className="inline fields">
                    <label>Full Name : </label>
                    <div className="field">
                        <span>{shippingAddress.fullName}</span>
                    </div>
                    <label>Address : </label>
                    <div className="field">
                        <span>
                            { shippingAddress.addressLine1 !== undefined ? `${shippingAddress.addressLine1} , ${shippingAddress.addressLine2}` : ''}
                        </span>
                    </div>
                </div>
                <div className="inline fields">
                    <div className="field">
                        <label>City : </label>
                        <span>{shippingAddress.city}</span>
                    </div>
                    <div className="field">
                        <label>State : </label>
                        <span>{shippingAddress.state}</span>
                    </div>
                    <div className="field">
                        <label>Country : </label>
                        <span>{shippingAddress.country}</span>
                    </div>
                    <div className="field">
                        <label>Zip : </label>
                        <span>{shippingAddress.pincode}</span>
                    </div>
                    <div className="field">
                        <label>Contact No : </label>
                        <span>{shippingAddress.contactNo}</span>
                    </div>
                </div>
            </div>
            

            <div className="ui segment">
                <h4 className="ui dividing header">Billing Details</h4>
                <div className="inline fields">
                    <label>Full Name : </label>
                    <div className="field">
                        <span>{billingAddress.fullName}</span>
                    </div>
                    <label>Address : </label>
                    <div className="field">
                        <span>{`${billingAddress.addressLine1} , ${billingAddress.addressLine2}`}</span>
                    </div>
                </div>
                <div className="inline fields">
                    <div className="field">
                        <label>City : </label>
                        <span>{billingAddress.city}</span>
                    </div>
                    <div className="field">
                        <label>State : </label>
                        <span>{billingAddress.state}</span>
                    </div>
                    <div className="field">
                        <label>Country : </label>
                        <span>{billingAddress.country}</span>
                    </div>
                    <div className="field">
                        <label>Zip : </label>
                        <span>{billingAddress.pincode}</span>
                    </div>
                    <div className="field">
                        <label>Contact No : </label>
                        <span>{billingAddress.contactNo}</span>
                    </div>
                </div>
            </div>

            <div className="ui segment">
                <h4 className="ui dividing header">Order Details</h4>
                <div className="inline fields">
                    <label>Price : </label>
                    <div className="field">
                        <span>{orderDetails.price}</span>
                    </div>
                    <label>Quantity : </label>
                    <div className="field">
                        <span>{orderDetails.quantity}</span>
                    </div>
                </div>
            </div>

            <div className="ui segment">
                <h4 className="ui dividing header">Product Specifications</h4>
                <div className="inline fields">
                    <label>Actual Thickness (mm) : </label>
                    <div className="field">
                        <span>{specifications.actualThickness}</span>
                    </div>
                    <label>Actual Length (ft) : </label>
                    <div className="field">
                        <span>{specifications.actualLength}</span>
                    </div>
                    <label>Actual Width (ft) : </label>
                    <div className="field">
                        <span>{specifications.actualWidth}</span>
                    </div>
                </div>
                <div className="inline fields">
                    <label>Series Name : </label>
                    <div className="field">
                        <span>{specifications.seriesName}</span>
                    </div>
                    <label>Type : </label>
                    <div className="field">
                        <span>{specifications.type}</span>
                    </div>
                    <label>Warranty : </label>
                    <div className="field">
                        <span>{specifications.warranty}</span>
                    </div>
                </div>
            </div>

            <div className="ui button"  onClick={this.previous}>Back</div>
            <div className="ui primary button right floated" onClick={this.continue}>Confirm & Continue</div>
        </form>
    )
  }
}

const mapStateToProps = ({store}) => {
    return {...store};
  };
  
  
const mapDispatchToProps = (dispatch) => bindActionCreators({submitDetails,getDetails},dispatch);


export default connect(mapStateToProps,mapDispatchToProps)(Confirm)
