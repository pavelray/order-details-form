import React, { Component } from 'react'
import {connect} from 'react-redux';
import mockApi from '../api/mockApi';


export class Success extends Component {
  isSaved = false;
  componentDidMount(){
    //localStorage.setItem('formData', JSON.stringify(this.props.value));

    mockApi.post('/FormData',{
      ...this.props.value
    }).then(res=> 
    {
      this.isSaved = res.data;  
      //console.log(res)
    }).catch(error => {
        console.log(error)
    });
  }

  render() {
    if(this.isSaved){
      return (
          <>
              <h1>Thank You !</h1>
              <h3>For Placing Order</h3>
          </>
      )
    }
    return(<><p>Error While Saving the data</p></>);
  }
}

const mapStateToProps = state => {
  return {step:state.step, value:{...state}};
};


export default connect(mapStateToProps)(Success)
