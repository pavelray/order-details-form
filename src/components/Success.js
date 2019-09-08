import React, { Component } from 'react'

export class Success extends Component {
  componentDidMount(){
    localStorage.setItem('formData', JSON.stringify(this.props.values));
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

export default Success
