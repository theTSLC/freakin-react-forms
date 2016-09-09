

const normalizeModel = (model, data, events) => {
  return model && model.map(x => {
    //validate required props
      return {
        type: x.type,
        name: x.name,
        label: x.label,
        validators: x.validators,
        value: data[x.name],
        onChange: events.onChangeHandler,
        onBlur: events.onBlurHandler
      }
  })
};

export default normalizeModel;
