import React, { Component } from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Input, Select, InputCheckBox , LabelError} from './FormFields';
import {addBilling,getDetails} from '../actions';

export class BillingAddress extends Component {
  
  country =[
    {
        value: '',
        text: 'Select'
    },
    {
        value: 'USA',
        text: 'USA'
    },
    {
        value: 'CANADA',
        text: 'Canada'
    }
  ]

  state = {
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
    contactNo: '',
    isSameAsShipping: false,
    errors: {}
  }

  validateForm = (values) =>{
    let error = {};
    
    if(values.fullName === ''){
      error.fullName ='Full Name is required';
    }
    if(values.addressLine1 === ''){
      error.addressLine1 ='Address Line 1 is required';
    }
    if(values.city === ''){
      error.city ='City is required';
    }
    if(values.state === ''){
      error.state ='State is required';
    }
    if(values.country === ''){
      error.country ='Please select a country';
    }
    if(values.pincode === ''){
      error.pincode ='Pincode is required';
    }
    if(values.contactNo === ''){
      error.contactNo ='Contact No is required';
    }


    if(Object.values(error).length > 0){
      this.setState({errors:error});
      return false;
    }
    return true;
  }

  componentDidMount(){
    this.setState({...this.props.billingAddress, errors: {}});
  }

  continue = e =>{
    e.preventDefault();
    let isValid = this.validateForm(this.state);
    
    if(isValid)
      this.props.addBilling(this.state);
      //this.props.nextStep({billingAddress: this.state});
  }

  previous = e =>{
    e.preventDefault();
    this.props.getDetails();
    //this.props.prevStep();
  }

  handleChange =(e)=>{
    const name = e.target.name;
    const value = e.target.value;

    let temp = Object.assign({}, this.state.errors);

    if(value !== ''){
      delete temp[name];
    }

    this.setState({[name]:value, errors:temp});
  }

  copyShippingAddress = ()=>{
    let temp = Object.assign({}, this.props.shippingAddress);
    temp.isSameAsShipping = !this.state.isSameAsShipping;
    
    if(temp.isSameAsShipping === true){
        this.setState(temp);
    }
    else{
      this.setState({
        fullName: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        pincode: '',
        contactNo: '',
        isSameAsShipping: false,
        errors: {}
      });
    }
  }

  render() {
    const {title} = this.props;
    const {errors,...values} = this.state;

    return (
      <form className="ui form">
        <h2 className="ui dividing header">{title}</h2>
        <div className="ui checkbox">
            <InputCheckBox checked={values.isSameAsShipping} 
                handleClick={this.copyShippingAddress}/>
            <label><b>Same as Shipping Address</b></label>
            <br/>
        </div>
        <div className="field">
            <label>Full Name</label>
            <div className="field">
                <Input name='fullName' type='text' placeholder='First Name' 
                    handleChange={this.handleChange}
                    value={values.fullName} />
                <LabelError text={errors.fullName}/>
            </div>
            
        </div>
        <div className="field">
            <label>Address Line 1</label>
            <div className="field">
                <Input type="text" name='addressLine1' placeholder="Address Line 1"
                    handleChange={this.handleChange} 
                    value={values.addressLine1}/>
                <LabelError text={errors.addressLine1}/>
            </div>
        </div>
        <div className="field">
            <label>Address Line 2</label>
            <div className="field">
                <Input type="text" name='addressLine2' placeholder="Address Line 2" 
                  handleChange={this.handleChange} 
                  value={values.addressLine2}/>
            </div>
        </div>
        <div className="two fields">
            <div className="field">
                <label>City</label>
                <Input type="text" name='city' placeholder="City"
                  handleChange={this.handleChange}  
                  value={values.city}/>
                <LabelError text={errors.city}/>
            </div>
            
            <div className="field">
                <label>State</label>
                <Input type="text" name='state' placeholder="State" 
                  handleChange={this.handleChange}
                  value={values.state}/>
                <LabelError text={errors.state}/>
            </div>
        </div>
        <div className="two fields">
            <div className="field">
                <label>Country</label>
                <Select value={values.country} name='country'
                  handleChange={this.handleChange} 
                  options={this.country}/>
                <LabelError text={errors.country}/>
            </div>
            <div className="field">
                <label>Zip</label>
                <Input type="text" placeholder="Zip" name='pincode'
                  handleChange={this.handleChange}
                  value={values.pincode}/>
                <LabelError text={errors.pincode}/>
            </div>
        </div>
        <div className="field">
            <label>Contact No</label>
            <div className="field">
                <Input type="text" placeholder="Contact No" name='contactNo'
                  handleChange={this.handleChange}
                  value={values.contactNo} />
                <LabelError text={errors.contactNo}/>
            </div>
        </div>
        <div className="ui button"  onClick={this.previous}>Previous</div>
        <div className={`ui primary button right floated`} onClick={this.continue} >Next</div>
    </form>
    )
  }

}

const mapStateToProps = state => {
  return { billingAddress: state.billingAddress, shippingAddress : state.shippingAddress};
};


const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
		{
			addBilling,
			getDetails
		},
		dispatch
	);


export default connect(mapStateToProps,mapDispatchToProps)(BillingAddress)
