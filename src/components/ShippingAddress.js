import React, { Component } from 'react'
import {Input, Select, LabelError} from './FormFields';
import { connect } from "react-redux";
import {addShipping} from '../actions'

export class ShippingAddress extends Component {

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
    errors: {}
  }

  continue = e =>{
    e.preventDefault();
    let isValid = this.validateForm(this.state);
    
    if(isValid)
      this.props.addShipping(this.state);
      //this.props.nextStep({shippingAddress: this.state});
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

  handleChange =(e)=>{
    const name = e.target.name;
    const value = e.target.value;

    let temp = Object.assign({}, this.state.errors);

    if(value !== ''){
      delete temp[name];
    }

    this.setState({[name]:value, errors:temp});
  }

  componentDidMount(){
    this.setState({...this.props.shippingAddress, errors: {}});
  }


  render() {
    const {title} = this.props;
    const {errors,...values} = this.state;

    return (
      <form className="ui form">
        <h2 className="ui dividing header">{title}</h2>
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
        <div className={`ui primary button right floated`} onClick={this.continue} >Next</div>
    </form>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { shippingAddress: state.shippingAddress};
};


const mapDispatchToProps = (dispatch) => {
  return {
    addShipping: shippingAddress => dispatch(addShipping(shippingAddress))
  };
}


export default connect(mapStateToProps,mapDispatchToProps)(ShippingAddress)
