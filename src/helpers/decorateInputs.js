import React from 'react';

const decorateInput = (children, model) => {
  return React.Children.map(children, x => {
console.log('==========x=========');
console.log(x);
console.log('==========END x=========');

    if (x.props && x.props.frfProperty) {
      var modelProperty = model.filter(f => f.name === x.props.frfProperty)[0];
      if (!modelProperty) {
        throw new Error(`No property on model with name: ${x.frfProperty}!`)
      }
      // modelProperty.onBlur = modelProperty.onBlur(modelProperty.name);
      return React.cloneElement(x, {data: modelProperty});
    }
    if(!x.props){
      return x;
    }
    var clonedItems = decorateInput(x.props.children, model);
    return React.cloneElement(x, {children: clonedItems});

  })
};

export default decorateInput;
