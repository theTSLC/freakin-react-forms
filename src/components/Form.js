import React from 'react'
// import validator from './validator';
import normalizeModel from './../helpers/normalizeModel';
import decorateInputs from './../helpers/decorateInputs'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.submitHandler = props.submitHandler;
    this.disabled = props.disabled;
    this.children = props.children;

    const eventHandler = {onChangeHandler: this.onChangeHandler, onBlurHandler: this.onBlurHandler};
    const fields = normalizeModel(props.model,{}, eventHandler);
    decorateInputs(this.children, fields);
    console.log('==========this.children=========');
    console.log(this.children);
    console.log('==========END this.children=========');
    this.state = {
      fields,
      formIsValid: true
    };
  }

  handleChange(fieldName, value) {
console.log('=========="here"=========');
console.log("here");
console.log('==========END "here"=========');
    let field = this.state.fields.filter(x => x.name === fieldName)
    if(!field) {
      return;
    }
    field.value = value;
    field.errors = []; //validator(this.state.fields, field);
    field.isValid = field.errors.length == 0;
    this.state.fields = this.state.fields.map(x => x.name === fieldName ? field : x);
    this.state.formIsValid = this.state.fields.some(f => f.errors && f.errors.length > 0);
  }

  generateNameValueModel() {
    return this.state.fields.reduce((x, y) =>{ x[y.name] = y.value; return x; }, {});
  }

  onChangeHandler(fieldName, e) {
    this.handleChange(fieldName, e.value);
  }

  onBlurHandler(fieldName, e) {
    this.handleChange(fieldName, e.value);
  }

  onSubmitHandler() {
    // if(validator(this.state.fields).length <= 0){
    // this.submitHandler(this.generateNameValueModel());
    // }
  }


  render() {

    return (<form onSubmit={this.onSubmitHandler()} disabled={this.disabled || false} >
      {this.children}
    </form>)
  }
}

export default Form;
