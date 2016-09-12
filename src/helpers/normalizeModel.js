import uuid from 'uuid'

const normalizeModel = (model, data, events) => {
  return model && model.map((x, i) => {
    //validate required props
      return {
        type: x.type,
        name: x.name,
        label: propToLabel(x.label || x.name),
        placeholder: propToLabel(x.placeholder) || propToLabel(x.label || x.name),
        rules: x.rules || [],
        value: data[x.name] || '',
        onChange: events.onChangeHandler,
        onBlur: events.onBlurHandler,
        errors: [],
        invalid: false,
        key: x.name + i
      }
  })
};

const propToLabel = function(val) {
  return val ? val.replace(/([A-Z])/g, ' $1')
  // uppercase the first character
    .replace(/^./, function(str) {
      return str.toUpperCase();
    }) : val;
};

export default normalizeModel;
