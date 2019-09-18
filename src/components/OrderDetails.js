import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Input, LabelError } from './FormFields';
import {addOrder, getDetails} from '../actions'

export class OrderDetails extends Component {
  state = {
    price: '',
    quantity: '',
    errors:{}
  }

  validateForm = (values) =>{
    let error = {};
    
    if(values.price === ''){
      error.price ='Price required';
    }
    if(values.quantity === ''){
      error.quantity ='Quantity should not be emply';
    }

    if(Object.values(error).length > 0){
      this.setState({errors:error});
      return false;
    }
    return true;
  }

  componentDidMount(){
    this.setState({...this.props.orderDetails, errors: {}});
  }

  continue = e =>{
    e.preventDefault();
    let isValid = this.validateForm(this.state);
    
    if(isValid)
      this.props.addOrder(this.state);
      //this.props.nextStep({orderDetails: this.state});
  }

  previous = e =>{
    e.preventDefault();
    this.props.getDetails();
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

  render() {
    const {title} = this.props;
    const {errors,...values} = this.state;

    return (
        <form className="ui form">
            <h2 className="ui dividing header">{title}</h2>
            <div className="two fields">
                <div className="field">
                    <label>Price</label>
                    <Input type="text"  name="price" placeholder="Price" 
                      handleChange={this.handleChange} value={values.price}/>
                    <LabelError text={errors.price}/>
                </div>
                <div className="field">
                    <label>Quantity</label>
                    <Input type="text"  name="quantity" placeholder="Quantity" 
                      handleChange={this.handleChange} value={values.quantity}/>
                    <LabelError text={errors.quantity}/>
                </div>
            </div>
            <div className="ui button"  onClick={this.previous}>Previous</div>
            <div className="ui primary button right floated" onClick={this.continue}>Next</div>
        </form>
    )
  }
}

const mapStateToProps =  ({store}) => {
  return { orderDetails: store.orderDetails};
};


const mapDispatchToProps = (dispatch) => 
  bindActionCreators(
		{
			addOrder,
			getDetails
		},
		dispatch
	);


export default connect(mapStateToProps,mapDispatchToProps)(OrderDetails)
