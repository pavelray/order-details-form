import React, { Component } from 'react'
import { Input , LabelError} from './FormFields';

export class ProductDetails extends Component {
  state = {
    actualThickness: '',
    actualLength: '',
    actualWidth: '',
    seriesName: '',
    type: '',
    warranty: '',
    errors:{}
  }

  validateForm = (values) =>{
    let error = {};
    
    if(values.type === ''){
      error.type ='Product type is required';
    }
    if(values.warranty === ''){
      error.warranty ='Warranty is required';
    }
    if(values.seriesName === ''){
      error.seriesName ='Series name is required';
    }

    if(Object.values(error).length > 0){
      this.setState({errors:error});
      return false;
    }
    return true;
  }

  componentDidMount(){
    this.setState({...this.props.values, errors: {}});
  }

  continue = e =>{
    e.preventDefault();
    let isValid = this.validateForm(this.state);
    
    if(isValid)
      this.props.nextStep({specifications: this.state});
  }

  previous = e =>{
    e.preventDefault();
    this.props.prevStep();
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
            <div className="three fields">
                <div className="field">
                    <label>Actual Thickness (mm)</label>
                    <Input type="text"  placeholder="Actual Thickness (mm)" name="actualThickness"
                      handleChange={this.handleChange } value={values.actualThickness}/>
                </div>
                <div className="field">
                    <label>Actual Length (ft)</label>
                    <Input type="text"  placeholder="Actual Length (ft)" name="actualLength"
                      handleChange={this.handleChange } value={values.actualLength}/>
                </div>
                <div className="field">
                    <label>Actual Width (ft)</label>
                    <Input type="text"  placeholder="Actual Width (ft)" name="actualWidth"
                      handleChange={this.handleChange } value={values.actualWidth}/>
                </div>
            </div>

            <div className="three fields">
                <div className="field">
                    <label>Series Name</label>
                    <Input type="text"  placeholder="Series Name" name="seriesName"
                      handleChange={this.handleChange } value={values.seriesName}/>
                    <LabelError text={errors.seriesName}/>
                </div>
                <div className="field">
                    <label>Type</label>
                    <Input type="text"  placeholder="Type" name="type"
                      handleChange={this.handleChange } value={values.type}/>
                    <LabelError text={errors.type}/>
                </div>
                <div className="field">
                    <label>Warranty</label>
                    <Input type="text"  placeholder="Warranty" name="warranty"
                      handleChange={this.handleChange } value={values.warranty}/>
                    <LabelError text={errors.warranty}/>
                </div>
            </div>

            <div className="ui button"  onClick={this.previous}>Previous</div>
            <div className="ui primary button right floated" onClick={this.continue}>Next</div>
        </form>
    )
  }
}

export default ProductDetails
