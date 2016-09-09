import React from 'react';

const decorateInput = (children, model) => {
  return React.Children.map(children, x => {
    if (x.props.property) {
      var modelProperty = model.filter(f => f.name === x.props.property);
      if (modelProperty.length <= 0) {
        throw new Error(`No property on model with name: ${x.property}!`)
      }
      console.log('==========modelProperty=========');
      console.log(modelProperty);
      console.log('==========END modelProperty=========');
      var newX = React.cloneElement(x, {data: modelProperty})
      console.log('==========newX=========');
      console.log(newX);
      console.log('==========END newX=========');
      return newX;
    } else {
      return decorateInput(x.props.children, model);
    }
  })
};

export default decorateInput;
