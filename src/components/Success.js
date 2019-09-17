import React, { Component } from 'react'
import {connect} from 'react-redux';
import mockApi from '../api/mockApi';


export class Success extends Component {
  state = {
    isSaved: false
  }
  componentDidMount(){
    //localStorage.setItem('formData', JSON.stringify(this.props.value));

    mockApi.post('/FormData',{
      ...this.props.value
    }).then(res=> 
    {
      this.setState({isSaved:res.data});
      //console.log(res)
    }).catch(error => {
        console.log(error)
    });
  }

  render() {
    if(this.state.isSaved){
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
