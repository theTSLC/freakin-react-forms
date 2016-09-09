import React from 'react';
import Form from '../../src/components/Form';

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
      <div><input property="userName" /></div>
      <div><input property="password" /></div>
      </Form>
  </div>);
};
