import React, { Component } from 'react'
import {Input, Select} from './FormFields';

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
    contactNo: ''
  }

  componentDidMount(){
    this.setState({...this.props.values});
  }

  continue = e =>{
    e.preventDefault();
    this.props.nextStep({billingAddress: this.state});
  }

  previous = e =>{
    e.preventDefault();
    this.props.prevStep();
  }

  handleChange =(e)=>{
    this.setState({[e.target.name]:e.target.value});
  }

  render() {
    const {title} = this.props;
    const values = this.state;

    return (
      <form className="ui form">
        <h2 className="ui dividing header">{title}</h2>
        <div className="ui checkbox">
            <input type="checkbox" name="sameAsShipping" />
            <label><b>Same as Shipping Address</b></label>
            <br/>
        </div>
        <div className="field">
            <label>Full Name</label>
            <div className="field">
                <Input name='fullName' type='text' placeholder='First Name' 
                    handleChange={this.handleChange}
                    value={values.fullName} />
            </div>
            
        </div>
        <div className="field">
            <label>Address Line 1</label>
            <div className="field">
                <Input type="text" name='addressLine1' placeholder="Address Line 1"
                    handleChange={this.handleChange} 
                    value={values.addressLine1}/>
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
            </div>
            
            <div className="field">
                <label>State</label>
                <Input type="text" name='state' placeholder="State" 
                  handleChange={this.handleChange}
                  value={values.state}/>
            </div>
        </div>
        <div className="two fields">
            <div className="field">
                <label>Country</label>
                <Select value={values.country} name='country'
                  handleChange={this.handleChange} 
                  options={this.country}/>
            </div>
            <div className="field">
                <label>Zip</label>
                <Input type="text" placeholder="Zip" name='pincode'
                  handleChange={this.handleChange}
                  value={values.pincode}/>
            </div>
        </div>
        <div className="field">
            <label>Contact No</label>
            <div className="field">
                <Input type="text" placeholder="Contact No" name='contactNo'
                  handleChange={this.handleChange}
                  value={values.contactNo} />
            </div>
        </div>
        <div className="ui button"  onClick={this.previous}>Previous</div>
        <div className={`ui primary button right floated`} onClick={this.continue} >Next</div>
    </form>
    )
  }

}

export default BillingAddress
