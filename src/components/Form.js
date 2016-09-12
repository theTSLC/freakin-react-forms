import React from 'react'
// import validator from './validator';
import normalizeModel from './../helpers/normalizeModel';
import decorateInputs from './../helpers/decorateInputs'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.submitHandler = props.submitHandler;
    this.disabled = props.disabled;

    const eventHandler = {onChangeHandler: this.onChangeHandler.bind(this)};//, onBlurHandler: this.onBlurHandler(this)};
    const fields = normalizeModel(props.model,{}, eventHandler);


    this.state = {
      fields,
      formIsValid: true
    };
  }

  handleChange(fieldName, value) {

    let field = this.state.fields.filter(x => x.name === fieldName)[0]
    if(!field) {
      return;
    }
    field.value = value;
    field.errors = []; //validator(this.state.fields, field);
    field.invalid = field.errors.length > 0;

    let fields = this.state.fields.map(x => x.name === fieldName ? field : x);

    this.setState({fields,
      formIsValid:
        this.state.fields.some(f => f.errors && f.errors.length > 0) })

  }

  generateNameValueModel() {
    return this.state.fields.reduce((x, y) =>{ x[y.name] = y.value; return x; }, {});
  }

  onChangeHandler(e) {
    return e.target ? this.handleChange(e.target.name, e.target.value) : null;
    }

  // onBlurHandler(obj) {
  //   return (fieldName) => (e) => {
  //     console.log('==========e=========');
  //     console.log(e.target.value);
  //     console.log('==========END e=========');
  //
  //     return obj.handleChange(fieldName, e.target.value)
  //   }
  // }

  onSubmitHandler() {
    // if(validator(this.state.fields).length <= 0){
    // this.submitHandler(this.generateNameValueModel());
    alert(JSON.stringify(this.generateNameValueModel()));
    // }
  }


  render() {
   const  newChildren = decorateInputs(this.props.children, this.state.fields);

    return (<form onSubmit={this.onSubmitHandler} disabled={this.disabled || false} >
      {newChildren}
    </form>)
  }
}

export default Form;
