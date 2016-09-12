import React from 'react';
import Form from '../../src/components/Form';
import Input from '../../src/components/Input';

export default () => {

  const model = [
    {
      type: 'text',
      name: 'userName',
      label: 'User Name'
    },
    {
      type: 'password',
      name: 'password',
      label: 'Password'
    }
  ];
  return (<div className="redux__datatable__app" >
    <Form model={model} >
      <div><Input frfProperty="userName" /></div>
      <div><Input frfProperty="password" /></div>
      <button type="submit" value="submit" >submit</button>
      </Form>
  </div>);
};
