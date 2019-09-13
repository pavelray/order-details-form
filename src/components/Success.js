import React, { Component } from 'react'
import {connect} from 'react-redux';

export class Success extends Component {
  componentDidMount(){
    localStorage.setItem('formData', JSON.stringify(this.props.value));
  }
  render() {
    return (
        <>
            <h1>Thank You !</h1>
            <h3>For Placing Order</h3>
        </>
    )
  }
}
const mapStateToProps = state => {
  return {step:state.step, value:{...state}};
};


export default connect(mapStateToProps)(Success)
