(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
		{module.exports = factory(require('react'));}
  else if (typeof define === 'function' && define.amd)
		{define(['react'], factory);}
  else if (typeof exports === 'object')
		{exports['freakin-react-forms'] = factory(require('react'));}
  else
		{root['freakin-react-forms'] = factory(root.react);}
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
  return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
    /******/ 	let installedModules = {};

/******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
      /******/ 		if (installedModules[moduleId])
  /******/ 			{return installedModules[moduleId].exports;}

/******/ 		// Create a new module (and put it into the cache)
      /******/ 		let module = installedModules[moduleId] = {
        /******/ 			exports: {},
        /******/ 			id: moduleId,
        /******/ 			loaded: false
      /******/ 		};

/******/ 		// Execute the module function
      /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
      /******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
      /******/ 		return module.exports;
    /******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = '/';

/******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(0);
  /******/ })([
/* 0 */
    /***/ function(module, exports, __webpack_require__) {

      module.exports = __webpack_require__(1);


    /***/ },
/* 1 */
    /***/ function(module, exports, __webpack_require__) {



      Object.defineProperty(exports, '__esModule', {
	  value: true
      });

      let _Form = __webpack_require__(2);

      Object.defineProperty(exports, 'Form', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Form).default;
	  }
      });

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }



      let _temp = function() {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
      }();



    /***/ },
/* 2 */
    /***/ function(module, exports, __webpack_require__) {



      Object.defineProperty(exports, '__esModule', {
	  value: true
      });

      let _createClass = function() { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { let descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) {descriptor.writable = true;} Object.defineProperty(target, descriptor.key, descriptor); } } return function(Constructor, protoProps, staticProps) { if (protoProps) {defineProperties(Constructor.prototype, protoProps);} if (staticProps) {defineProperties(Constructor, staticProps);} return Constructor; }; }();

      let _react = __webpack_require__(3);

      let _react2 = _interopRequireDefault(_react);

      let _validationRunner = __webpack_require__(4);

      let _validationRunner2 = _interopRequireDefault(_validationRunner);

      let _normalizeModel = __webpack_require__(7);

      let _normalizeModel2 = _interopRequireDefault(_normalizeModel);

      let _decorateInputs = __webpack_require__(10);

      let _decorateInputs2 = _interopRequireDefault(_decorateInputs);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === 'object' || typeof call === 'function') ? call : self; }

      function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) {Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} }

      let Form = function(_React$Component) {
	  _inherits(Form, _React$Component);

	  function Form(props) {
	    _classCallCheck(this, Form);

	    let _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

	    _this.submitHandler = props.submitHandler;
	    _this.eventHandler = { onChangeHandler: _this.onChangeHandler.bind(_this), onBlurHandler: _this.onBlurHandler(_this) };
	    return _this;
	  }

	  _createClass(Form, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      let fields = (0, _normalizeModel2.default)(this.props, this.eventHandler);

	      this.state = {
	        fields,
	        formIsValid: true
	      };
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      let fields = (0, _normalizeModel2.default)(newProps, this.eventHandler);

	      this.state = {
	        fields,
	        formIsValid: true
	      };
	    }
	  }, {
	    key: 'validateField',
	    value: function validateField(field, fields) {
	      return (0, _validationRunner2.default)(field, fields);
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(fieldName, value, change) {
	      let fields = this.state.fields;
	      let field = fields[Object.keys(fields).filter(function(x) {
	        return fields[x].name === fieldName;
	      })[0]];
	      if (!field) {
	        return;
	      }
	      if (change) {
	        field.value = value;
	      }
	      field.errors = this.validateField(field, fields);

	      field.invalid = field.errors.length > 0;
	      this.setState({
	        fields: Object.keys(fields).map(function(x) {
	          return fields[x].name === fieldName ? field : fields[x];
	        }).reduce(function(x, y) {
	          x[y.name] = y; return x;
	        }, {}),
	        formIsValid: Object.keys(fields).some(function(f) {
	          return fields[f].errors && fields[f].errors.length > 0;
	        })
	      });
	    }
	  }, {
	    key: 'generateNameValueModel',
	    value: function generateNameValueModel() {
	      let fields = this.state.fields;
	      return Object.keys(fields).reduce(function(x, y) {
	        x[y] = fields[y].value; return x;
	      }, {});
	    }
	  }, {
	    key: 'onChangeHandler',
	    value: function onChangeHandler(e) {
	      return e.target ? this.handleChange(e.target.name, e.target.value, true) : null;
	    }
	  }, {
	    key: 'onBlurHandler',
	    value: function onBlurHandler(e) {
	      return e.target ? this.handleChange(e.target.name, e.target.value) : null;
	    }
	  }, {
	    key: 'onSubmitHandler',
	    value: function onSubmitHandler(e) {
	      let _this2 = this;

	      e.preventDefault();
	      this.errors = [];
	      let fields = this.state.fields;
	      let newFieldsState = Object.keys(fields).map(function(x) {
	        fields[x].errors = _this2.validateField(fields[x], _this2.state.fields);
	        _this2.errors = _this2.errors.concat(fields[x].errors);
	        return fields[x];
	      });

	      this.setState({ fields: newFieldsState, formIsValid: this.errors.length <= 0, errors: this.errors });
	      if (this.errors.length <= 0) {
	        this.submitHandler(this.generateNameValueModel());
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      // I have moved this down to render, as it is necessary when using "connect"ed inputs from redux
	      // also superficial evidence is that it does not affect the number of time decorate is called
	      this.newChildren = (0, _decorateInputs2.default)(this.props.children, this.state.fields);
	      return _react2.default.createElement(
	        'form',
	        { onSubmit: this.onSubmitHandler.bind(this) },
	        this.newChildren
	      );
	    }
	  }]);

	  return Form;
      }(_react2.default.Component);

      let _default = Form;
      exports.default = _default;


      let _temp = function() {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(Form, 'Form', '/home/rharik/Development/cannibal/freakin-react-forms/src/components/Form.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/rharik/Development/cannibal/freakin-react-forms/src/components/Form.js');
      }();



    /***/ },
/* 3 */
    /***/ function(module, exports) {

      module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

    /***/ },
/* 4 */
    /***/ function(module, exports, __webpack_require__) {



      Object.defineProperty(exports, '__esModule', {
	  value: true
      });

      let _errorMessages = __webpack_require__(5);

      let _errorMessages2 = _interopRequireDefault(_errorMessages);

      let _validationRules = __webpack_require__(6);

      let _validationRules2 = _interopRequireDefault(_validationRules);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      let _default = function _default(field, fields) {
	  let _valid = [];
	  if (!field) {
	    throw new Error('You must provide a field to validate');
	  }
	  if (!field.rules || field.rules.length <= 0) {
	    return _valid;
	  }
	  if (!Array.isArray(field.rules)) {
	    field.rules = [field.rules];
	  }
	  if (!field.value && !field.rules.some(function(item) {
	    return item.rule.toLowerCase() === 'required';
	  })) {
	    return _valid;
	  }
	  return field.rules.filter(function(rule) {
	    return !_validationRules2.default[rule.rule](field, rule, fields);
	  }).map(function(rule) {
	    return {
	      formName: field.formName,
	      fieldName: field.name,
	      message: (0, _errorMessages2.default)(field.label, field.value, rule),
	      rule: rule.rule
	    };
	  });
      };

      exports.default = _default;


      let _temp = function() {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/rharik/Development/cannibal/freakin-react-forms/src/helpers/validation/validationRunner.js');
      }();



    /***/ },
/* 5 */
    /***/ function(module, exports) {



      Object.defineProperty(exports, '__esModule', {
	  value: true
      });

      let _default = function _default(fieldName, value, rule) {
	  let messages = {
	    required: "field '" + fieldName + "' is Required",
	    minlength: "field '" + fieldName + "' should be a minimum of '" + rule.minLength + "'",
	    maxlength: "field '" + fieldName + "' should be a certain maximum of '" + rule.maxLength + "'",
	    rangelength: "field '" + fieldName + "' should be a minimum of '" + rule.minLength + "' and a maximum of '" + rule.maxLength + "'",
	    email: "field '" + fieldName + "' should be valid email",
	    url: "field '" + fieldName + "' should be valid url",
	    date: "field '" + fieldName + "' should be a valid date",
	    number: "field '" + fieldName + "' should be a number",
	    digits: "field '" + fieldName + "' should be didgets",
	    creditcard: "field '" + fieldName + "' should be a valid creditcard",
	    equalTo: "field '" + fieldName + "' should be equal to '" + rule.compareField + "'"
	  };
	  return messages[rule.rule];
      };

      exports.default = _default;


      let _temp = function() {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/rharik/Development/cannibal/freakin-react-forms/src/helpers/validation/errorMessages.js');
      }();



    /***/ },
/* 6 */
    /***/ function(module, exports) {



      Object.defineProperty(exports, '__esModule', {
	  value: true
      });
      let _default = {
	  required: function required(field, rule) {
	    if (field.type == 'select' || field.type == 'multiselect') {
	      // could be an array for select-multiple or a string, both are fine this way
	      return field.value && field.value.length > 0;
	    }
	    return field.value.trim().length > 0;
	  },
	  minlength: function minlength(field, rule) {
	    return field.value.length >= rule.minLength;
	  },


	  // http://docs.jquery.com/Plugins/Validation/Methods/maxlength
	  maxlength: function maxlength(field, rule) {
	    return field.value.length <= rule.maxLength;
	  },


	  // http://docs.jquery.com/Plugins/Validation/Methods/rangelength
	  rangelength: function rangelength(field, rule) {
	    let length = field.value.length;
	    return length >= rule.minLength && length <= rule.maxLength;
	  },


	  // http://docs.jquery.com/Plugins/Validation/Methods/email
	  email: function email(field, rule) {
	    // contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
	    return (/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(field.value)
	    );
	  },


	  // http://docs.jquery.com/Plugins/Validation/Methods/url
	  url: function url(field, rule) {
	    // contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
	    return (/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(field.value)
	    );
	  },


	  // http://docs.jquery.com/Plugins/Validation/Methods/date
	  date: function date(field, rule) {
	    return !/Invalid|NaN/.test(new Date(field.value));
	  },


	  // http://docs.jquery.com/Plugins/Validation/Methods/number
	  number: function number(field, rule) {
	    return (/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(field.value)
	    );
	  },


	  // http://docs.jquery.com/Plugins/Validation/Methods/digits
	  digits: function digits(field, rule) {
	    return (/^\d+$/.test(field.value)
	    );
	  },


	  // http://docs.jquery.com/Plugins/Validation/Methods/creditcard
	  // based on http://en.wikipedia.org/wiki/Luhn
	  creditcard: function creditcard(field, rule) {
	    // accept only spaces, digits and dashes
	    if (/[^0-9 -]+/.test(field.value)) {return false;}
	    var nCheck = 0,
	        nDigit = 0,
	        bEven = false;

	    let _value = field.value.replace(/\D/g, '');

	    for (let n = _value.length - 1; n >= 0; n--) {
	      let cDigit = _value.charAt(n);
	      var nDigit = parseInt(cDigit, 10);
	      if (bEven) {
	        if ((nDigit *= 2) > 9) {nDigit -= 9;}
	      }
	      nCheck += nDigit;
	      bEven = !bEven;
	    }

	    return nCheck % 10 == 0;
	  },


	  // http://docs.jquery.com/Plugins/Validation/Methods/equalTo

	  // this wont work because fields is a hash map rather than array. fix it when you need it
	  equalTo: function equalTo(field, rule, fields) {
	    return field.value === fields[rule.compareField].value;
	  }
      };
      exports.default = _default;


      let _temp = function() {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/rharik/Development/cannibal/freakin-react-forms/src/helpers/validation/validationRules.js');
      }();



    /***/ },
/* 7 */
    /***/ function(module, exports, __webpack_require__) {



      Object.defineProperty(exports, '__esModule', {
	  value: true
      });

      let _uuid = __webpack_require__(8);

      let _uuid2 = _interopRequireDefault(_uuid);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      let normalizeModel = function normalizeModel(props, events) {
	  let formName = props.formName || _uuid2.default.v4();
	  let model = props.model;
	  let modelArray = model && Object.keys(model).map(function(x, i) {
	    //validate required props
	    let item = model[x];
	    let clone = Object.assign({}, item);
	    clone.label = propToLabel(item.label || item.name);
	    clone.placeholder = propToLabel(item.placeholder) || propToLabel(item.label || item.name);
	    clone.rules = item.rules || [];
	    clone.value = item.value || '';
	    clone.onChange = events.onChangeHandler;
	    clone.onBlur = events.onBlurHandler;
	    clone.errors = [];
	    clone.invalid = false;
	    clone.key = formName + '_' + i;
	    return clone;
	  });
	  return modelArray.reduce(function(prev, next) {
	    prev[next.name] = next; return prev;
	  }, {});
      };

      let propToLabel = function propToLabel(val) {
	  return val ? val.replace(/([A-Z])/g, ' $1')
	  // uppercase the first character
	  .replace(/^./, function(str) {
	    return str.toUpperCase();
	  }) : val;
      };

      let _default = normalizeModel;
      exports.default = _default;


      let _temp = function() {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(normalizeModel, 'normalizeModel', '/home/rharik/Development/cannibal/freakin-react-forms/src/helpers/normalizeModel.js');

	  __REACT_HOT_LOADER__.register(propToLabel, 'propToLabel', '/home/rharik/Development/cannibal/freakin-react-forms/src/helpers/normalizeModel.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/rharik/Development/cannibal/freakin-react-forms/src/helpers/normalizeModel.js');
      }();



    /***/ },
/* 8 */
    /***/ function(module, exports, __webpack_require__) {

	//     uuid.js
	//
	//     Copyright (c) 2010-2012 Robert Kieffer
	//     MIT License - http://opensource.org/licenses/mit-license.php

	// Unique ID creation requires a high quality random # generator.  We feature
	// detect to determine the best RNG source, normalizing to a function that
	// returns 128-bits of randomness, since that's what's usually required
      let _rng = __webpack_require__(9);

	// Maps for number <-> hex string conversion
      let _byteToHex = [];
      let _hexToByte = {};
      for (let i = 0; i < 256; i++) {
	  _byteToHex[i] = (i + 0x100).toString(16).substr(1);
	  _hexToByte[_byteToHex[i]] = i;
      }

	// **`parse()` - Parse a UUID into it's component bytes**
      function parse(s, buf, offset) {
	  let i = (buf && offset) || 0, ii = 0;

	  buf = buf || [];
	  s.toLowerCase().replace(/[0-9a-f]{2}/g, function(oct) {
	    if (ii < 16) { // Don't overflow!
	      buf[i + ii++] = _hexToByte[oct];
	    }
	  });

	  // Zero out remaining bytes if string was short
	  while (ii < 16) {
	    buf[i + ii++] = 0;
	  }

	  return buf;
      }

	// **`unparse()` - Convert UUID byte array (ala parse()) into a string**
      function unparse(buf, offset) {
	  let i = offset || 0, bth = _byteToHex;
	  return bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]];
      }

	// **`v1()` - Generate time-based UUID**
	//
	// Inspired by https://github.com/LiosK/UUID.js
	// and http://docs.python.org/library/uuid.html

	// random #'s we need to init node and clockseq
      let _seedBytes = _rng();

	// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      let _nodeId = [
	  _seedBytes[0] | 0x01,
	  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
      ];

	// Per 4.2.2, randomize (14 bit) clockseq
      let _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

	// Previous uuid creation time
      let _lastMSecs = 0, _lastNSecs = 0;

	// See https://github.com/broofa/node-uuid for API details
      function v1(options, buf, offset) {
	  let i = buf && offset || 0;
	  let b = buf || [];

	  options = options || {};

	  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

	  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
	  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
	  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
	  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
	  let msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

	  // Per 4.2.1.2, use count of uuid's generated during the current clock
	  // cycle to simulate higher resolution clock
	  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

	  // Time since last uuid creation (in msecs)
	  let dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs) / 10000;

	  // Per 4.2.1.2, Bump clockseq on clock regression
	  if (dt < 0 && options.clockseq === undefined) {
	    clockseq = clockseq + 1 & 0x3fff;
	  }

	  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
	  // time interval
	  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
	    nsecs = 0;
	  }

	  // Per 4.2.1.2 Throw error if too many uuids are requested
	  if (nsecs >= 10000) {
	    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
	  }

	  _lastMSecs = msecs;
	  _lastNSecs = nsecs;
	  _clockseq = clockseq;

	  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
	  msecs += 12219292800000;

	  // `time_low`
	  let tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
	  b[i++] = tl >>> 24 & 0xff;
	  b[i++] = tl >>> 16 & 0xff;
	  b[i++] = tl >>> 8 & 0xff;
	  b[i++] = tl & 0xff;

	  // `time_mid`
	  let tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
	  b[i++] = tmh >>> 8 & 0xff;
	  b[i++] = tmh & 0xff;

	  // `time_high_and_version`
	  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
	  b[i++] = tmh >>> 16 & 0xff;

	  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
	  b[i++] = clockseq >>> 8 | 0x80;

	  // `clock_seq_low`
	  b[i++] = clockseq & 0xff;

	  // `node`
	  let node = options.node || _nodeId;
	  for (let n = 0; n < 6; n++) {
	    b[i + n] = node[n];
	  }

	  return buf ? buf : unparse(b);
      }

	// **`v4()` - Generate random UUID**

	// See https://github.com/broofa/node-uuid for API details
      function v4(options, buf, offset) {
	  // Deprecated - 'format' argument, as supported in v1.2
	  let i = buf && offset || 0;

	  if (typeof (options) === 'string') {
	    buf = options == 'binary' ? new Array(16) : null;
	    options = null;
	  }
	  options = options || {};

	  let rnds = options.random || (options.rng || _rng)();

	  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
	  rnds[6] = (rnds[6] & 0x0f) | 0x40;
	  rnds[8] = (rnds[8] & 0x3f) | 0x80;

	  // Copy bytes to buffer, if provided
	  if (buf) {
	    for (let ii = 0; ii < 16; ii++) {
	      buf[i + ii] = rnds[ii];
	    }
	  }

	  return buf || unparse(rnds);
      }

	// Export public API
      let uuid = v4;
      uuid.v1 = v1;
      uuid.v4 = v4;
      uuid.parse = parse;
      uuid.unparse = unparse;

      module.exports = uuid;


    /***/ },
/* 9 */
    /***/ function(module, exports) {

      /* WEBPACK VAR INJECTION */(function(global) {
        let rng;

        let crypto = global.crypto || global.msCrypto; // for IE 11
        if (crypto && crypto.getRandomValues) {
	  // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
	  // Moderately fast, high quality
	  let _rnds8 = new Uint8Array(16);
	  rng = function whatwgRNG() {
	    crypto.getRandomValues(_rnds8);
	    return _rnds8;
	  };
        }

        if (!rng) {
	  // Math.random()-based (RNG)
	  //
	  // If all else fails, use Math.random().  It's fast, but is of unspecified
	  // quality.
	  let _rnds = new Array(16);
	  rng = function() {
	    for (let i = 0, r; i < 16; i++) {
	      if ((i & 0x03) === 0) {r = Math.random() * 0x100000000;}
	      _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
	    }

	    return _rnds;
	  };
        }

        module.exports = rng;


      /* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())));

    /***/ },
/* 10 */
    /***/ function(module, exports, __webpack_require__) {



      Object.defineProperty(exports, '__esModule', {
	  value: true
      });

      let _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function(obj) { return typeof obj; } : function(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; };

      let _react = __webpack_require__(3);

      let _react2 = _interopRequireDefault(_react);

      let _selectn = __webpack_require__(11);

      let _selectn2 = _interopRequireDefault(_selectn);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      let decorateInput = function decorateInput(children, model) {
	  return _react2.default.Children.map(children, function(x) {
	    if (!x.props) {
	      return x;
	    }
	    let property = model[(0, _selectn2.default)('frfProperty.name', x.props)];
	    if (property) {
	      if ((typeof property === 'undefined' ? 'undefined' : _typeof(property)) != 'object') {
	        throw new Error('No property on model with name: ' + x.frfProperty + '!');
	      }
	      // so if your Inputs are redux containers, they will not rerender if the top level properties
	      // of "modelProperty" have not changed, since we are changing the deeper values, we need a
	      // couple hacks here (dataVal and rerenderHack) to trigger a rerender if those props have changed
	      return _react2.default.cloneElement(x, {
	        data: property,
	        dataVal: property.value,
	        rerenderHack: property.errors.length > 0 ? property.errors : undefined
	      });
	    }
	    let clonedItems = decorateInput(x.props.children, model);
	    return _react2.default.cloneElement(x, { children: clonedItems });
	  });
      };

      let _default = decorateInput;
      exports.default = _default;


      let _temp = function() {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(decorateInput, 'decorateInput', '/home/rharik/Development/cannibal/freakin-react-forms/src/helpers/decorateInputs.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/rharik/Development/cannibal/freakin-react-forms/src/helpers/decorateInputs.js');
      }();



    /***/ },
/* 11 */
    /***/ function(module, exports, __webpack_require__) {



      let curry2 = __webpack_require__(12);
      let debug = __webpack_require__(14)('selectn');
      let dotted = __webpack_require__(17);
      let splits = __webpack_require__(18);
      let string = Object.prototype.toString;

      module.exports = curry2(selectn);

	/**
	 * Curried property accessor function that resolves deeply-nested object properties via dot/bracket-notation
	 * string path while mitigating `TypeErrors` via friendly and composable API.
	 *
	 * @param {String|Array} path
	 * Dot/bracket-notation string path or array.
	 *
	 * @param {Object} object
	 * Object to access.
	 *
	 * @return {Function|*|undefined}
	 * (1) returns `selectn/1` when partially applied.
	 * (2) returns value at path if path exists.
	 * (3) returns undefined if path does not exist.
	 */
      function selectn(path, object) {
	  debug('arguments:', {
	    path,
	    object
	  });

	  let idx = -1;
	  let seg = string.call(path) === '[object Array]' ? path : splits(dotted(path));
	  let end = seg.length;
	  let ref = end ? object : void 0;

	  while (++idx < end) {
	    if (Object(ref) !== ref) {return void 0;}
	    ref = ref[seg[idx]];
	  }

	  debug('ref:', ref);
	  return typeof ref === 'function' ? ref() : ref;
      }


    /***/ },
/* 12 */
    /***/ function(module, exports, __webpack_require__) {



	/*!
	 * imports.
	 */

      let bind = Function.prototype.bind || __webpack_require__(13);

	/*!
	 * exports.
	 */

      module.exports = curry2;

	/**
	 * Curry a binary function.
	 *
	 * @param {Function} fn
	 * Binary function to curry.
	 *
	 * @param {Object} [self]
	 * Function `this` context.
	 *
	 * @return {Function|*}
	 * If partially applied, return unary function, otherwise, return result of full application.
	 */

      function curry2(fn, self) {
	  let out = function() {
	    if (arguments.length === 0) {return out;}

	    return arguments.length > 1
	      ? fn.apply(self, arguments)
	      : bind.call(fn, self, arguments[0]);
	  };

	  out.uncurry = function uncurry() {
	    return fn;
	  };

	  return out;
      }


    /***/ },
/* 13 */
    /***/ function(module, exports) {


      module.exports = function(boundThis) {
	  let f = this
	    , ret;

	  if (arguments.length < 2)
	    {ret = function() {
	      if (this instanceof ret) {
	        let ret_ = f.apply(this, arguments);
	        return Object(ret_) === ret_
	          ? ret_
	          : this;
	      }
	      else
	        {return f.apply(boundThis, arguments);}
	    };}
	  else {
	    let boundArgs = new Array(arguments.length - 1);
	    for (let i = 1; i < arguments.length; i++)
	      {boundArgs[i - 1] = arguments[i];}

	    ret = function() {
	      let boundLen = boundArgs.length
	        , args = new Array(boundLen + arguments.length)
	        , i;
	      for (i = 0; i < boundLen; i++)
	        {args[i] = boundArgs[i];}
	      for (i = 0; i < arguments.length; i++)
	        {args[boundLen + i] = arguments[i];}

	      if (this instanceof ret) {
	        let ret_ = f.apply(this, args);
	        return Object(ret_) === ret_
	          ? ret_
	          : this;
	      }
	      else
	        {return f.apply(boundThis, args);}
	    };
	  }

	  ret.prototype = f.prototype;
	  return ret;
      };


    /***/ },
/* 14 */
    /***/ function(module, exports, __webpack_require__) {


	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

      exports = module.exports = __webpack_require__(15);
      exports.log = log;
      exports.formatArgs = formatArgs;
      exports.save = save;
      exports.load = load;
      exports.useColors = useColors;
      exports.storage = typeof chrome !== 'undefined'
	               && typeof chrome.storage !== 'undefined'
	                  ? chrome.storage.local
	                  : localstorage();

	/**
	 * Colors.
	 */

      exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
      ];

	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */

      function useColors() {
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  return ('WebkitAppearance' in document.documentElement.style) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (window.console && (console.firebug || (console.exception && console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
      }

	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

      exports.formatters.j = function(v) {
	  return JSON.stringify(v);
      };


	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */

      function formatArgs() {
	  let args = arguments;
	  let useColors = this.useColors;

	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);

	  if (!useColors) {return args;}

	  let c = 'color: ' + this.color;
	  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  let index = 0;
	  let lastC = 0;
	  args[0].replace(/%[a-z%]/g, function(match) {
	    if (match === '%%') {return;}
	    index++;
	    if (match === '%c') {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });

	  args.splice(lastC, 0, c);
	  return args;
      }

	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */

      function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return typeof console === 'object'
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
      }

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

      function save(namespaces) {
	  try {
	    if (namespaces == null) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch (e) {}
      }

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

      function load() {
	  let r;
	  try {
	    r = exports.storage.debug;
	  } catch (e) {}
	  return r;
      }

	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */

      exports.enable(load());

	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */

      function localstorage() {
	  try {
	    return window.localStorage;
	  } catch (e) {}
      }


    /***/ },
/* 15 */
    /***/ function(module, exports, __webpack_require__) {


	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

      exports = module.exports = debug;
      exports.coerce = coerce;
      exports.disable = disable;
      exports.enable = enable;
      exports.enabled = enabled;
      exports.humanize = __webpack_require__(16);

	/**
	 * The currently active debug mode names, and names to skip.
	 */

      exports.names = [];
      exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */

      exports.formatters = {};

	/**
	 * Previously assigned color.
	 */

      let prevColor = 0;

	/**
	 * Previous log timestamp.
	 */

      let prevTime;

	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */

      function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
      }

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

      function debug(namespace) {

	  // define the `disabled` version
	  function disabled() {
	  }
	  disabled.enabled = false;

	  // define the `enabled` version
	  function enabled() {

	    let self = enabled;

	    // set `diff` timestamp
	    let curr = +new Date();
	    let ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // add the `color` if not set
	    if (self.useColors == null) {self.useColors = exports.useColors();}
	    if (self.color == null && self.useColors) {self.color = selectColor();}

	    let args = Array.prototype.slice.call(arguments);

	    args[0] = exports.coerce(args[0]);

	    if (typeof args[0] !== 'string') {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }

	    // apply any `formatters` transformations
	    let index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') {return match;}
	      index++;
	      let formatter = exports.formatters[format];
	      if (typeof formatter === 'function') {
	        let val = args[index];
	        match = formatter.call(self, val);

	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });

	    if (typeof exports.formatArgs === 'function') {
	      args = exports.formatArgs.apply(self, args);
	    }
	    let logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;

	  let fn = exports.enabled(namespace) ? enabled : disabled;

	  fn.namespace = namespace;

	  return fn;
      }

	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */

      function enable(namespaces) {
	  exports.save(namespaces);

	  let split = (namespaces || '').split(/[\s,]+/);
	  let len = split.length;

	  for (let i = 0; i < len; i++) {
	    if (!split[i]) {continue;} // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
      }

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

      function disable() {
	  exports.enable('');
      }

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

      function enabled(name) {
	  let i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
      }

	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */

      function coerce(val) {
	  if (val instanceof Error) {return val.stack || val.message;}
	  return val;
      }


    /***/ },
/* 16 */
    /***/ function(module, exports) {

	/**
	 * Helpers.
	 */

      let s = 1000;
      let m = s * 60;
      let h = m * 60;
      let d = h * 24;
      let y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */

      module.exports = function(val, options) {
	  options = options || {};
	  if (typeof val === 'string') {return parse(val);}
	  return options.long
	    ? long(val)
	    : short(val);
      };

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

      function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) {return;}
	  let match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) {return;}
	  let n = parseFloat(match[1]);
	  let type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
      }

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

      function short(ms) {
	  if (ms >= d) {return Math.round(ms / d) + 'd';}
	  if (ms >= h) {return Math.round(ms / h) + 'h';}
	  if (ms >= m) {return Math.round(ms / m) + 'm';}
	  if (ms >= s) {return Math.round(ms / s) + 's';}
	  return ms + 'ms';
      }

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

      function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
      }

	/**
	 * Pluralization helper.
	 */

      function plural(ms, n, name) {
	  if (ms < n) {return;}
	  if (ms < n * 1.5) {return Math.floor(ms / n) + ' ' + name;}
	  return Math.ceil(ms / n) + ' ' + name + 's';
      }


    /***/ },
/* 17 */
    /***/ function(module, exports) {



	/*!
	 * exports.
	 */

      module.exports = brackets2dots;

	/*!
	 * regexp patterns.
	 */

      let REPLACE_BRACKETS = /\[([^\[\]]+)\]/g;
      let LFT_RT_TRIM_DOTS = /^[.]*|[.]*$/g;

	/**
	 * Convert string with bracket notation to dot property notation.
	 *
	 * ### Examples:
	 *
	 *      brackets2dots('group[0].section.a.seat[3]')
	 *      //=> 'group.0.section.a.seat.3'
	 *
	 *      brackets2dots('[0].section.a.seat[3]')
	 *      //=> '0.section.a.seat.3'
	 *
	 *      brackets2dots('people[*].age')
	 *      //=> 'people.*.age'
	 *
	 * @param  {String} string
	 * original string
	 *
	 * @return {String}
	 * dot/bracket-notation string
	 */

      function brackets2dots(string) {
	  return ({}).toString.call(string) == '[object String]'
	       ? string.replace(REPLACE_BRACKETS, '.$1').replace(LFT_RT_TRIM_DOTS, '')
	       : '';
      }


    /***/ },
/* 18 */
    /***/ function(module, exports, __webpack_require__) {



	/*!
	 * imports.
	 */

      let dotted = __webpack_require__(19)(todots);
      let compact = __webpack_require__(22)(String);
      let toString = Object.prototype.toString;

	/*!
	 * exports.
	 */

      module.exports = dotsplit;

	/**
	 * Transform dot-delimited strings to array of strings.
	 *
	 * @param  {String} string
	 * Dot-delimited string.
	 *
	 * @return {Array}
	 * Array of strings.
	 */

      function dotsplit(string) {
	  return dotted(normalize(string));
      }

	/**
	 * Normalize string by:
	 *
	 * (1) Dropping falsey values (empty, null, etc.)
	 * (2) Replacing escapes with a placeholder.
	 * (3) Splitting string on `.` delimiter.
	 * (4) Dropping empty values from resulting array.
	 *
	 * @param  {String} string
	 * Dot-delimited string.
	 *
	 * @return {Array}
	 * Array of strings.
	 */

      function normalize(string) {
	  return compact(
	    (toString.call(string) === '[object String]' ? string : '')
	    .replace(/\\\./g, '\uffff')
	    .split('.')
	  );
      }

	/**
	 * Change placeholder to dots.
	 *
	 * @param  {String} string
	 * Dot-delimited string with placeholders.
	 *
	 * @return {String}
	 * Dot-delimited string without placeholders.
	 */

      function todots(string) {
	  return string.replace(/\uffff/g, '.');
      }


    /***/ },
/* 19 */
    /***/ function(module, exports, __webpack_require__) {



	/*!
	 * imports.
	 */

      let curry2 = __webpack_require__(20);
      let selectn = __webpack_require__(21);

	/*!
	 * exports.
	 */

      module.exports = curry2(map);

	/**
	 * Curried function deriving new array values by applying provided function to each item/index of provided array.
	 * Optionally, a dot-notation formatted string may be provided for item property access.
	 *
	 * @param {Function|String} fn
	 * Function to apply to each item.
	 *
	 * @param {Array} list
	 * Array to iterate over.
	 *
	 * @return {Array}
	 * Array resulting from applying provided function `fn` to each item of `list`.
	 */

      function map(fn, list) {
	  let end = list.length;
	  let idx = -1;
	  let out = [];

	  while (++idx < end) {
	    out.push((typeof fn === 'string') ? selectn(fn, list[idx]) : fn(list[idx]));
	  }

	  return out;
      }


    /***/ },
/* 20 */
    /***/ function(module, exports) {



	/*!
	 * exports.
	 */

      module.exports = curry2;

	/**
	 * Curry a binary function.
	 *
	 * @param {Function} fn
	 * Binary function to curry.
	 *
	 * @param {Object} [self]
	 * Function `this` context.
	 *
	 * @return {Function|*}
	 * If partially applied, return unary function, otherwise, return result of full application.
	 */

      function curry2(fn, self) {
	  let out = function() {
	    return arguments.length > 1
	    ? fn.call(self, arguments[0], arguments[1])
	    : fn.bind(self, arguments[0]);
	  };

	  out.uncurry = function uncurry() {
	    return fn;
	  };

	  return out;
      }


    /***/ },
/* 21 */
    /***/ function(module, exports) {

	/*!
	 * exports.
	 */

      module.exports = selectn;

	/**
	 * Select n-levels deep into an object given a dot/bracket-notation query.
	 * If partially applied, returns a function accepting the second argument.
	 *
	 * ### Examples:
	 *
	 *      selectn('name.first', contact);
	 *
	 *      selectn('addresses[0].street', contact);
	 *
	 *      contacts.map(selectn('name.first'));
	 *
	 * @param  {String | Array} query
	 * dot/bracket-notation query string or array of properties
	 *
	 * @param  {Object} object
	 * object to access
	 *
	 * @return {Function}
	 * accessor function that accepts an object to be queried
	 */

      function selectn(query) {
	  let parts;

	  if (Array.isArray(query)) {
	    parts = query;
	  }
	  else {
	    // normalize query to `.property` access (i.e. `a.b[0]` becomes `a.b.0`)
	    query = query.replace(/\[(\d+)\]/g, '.$1');
	    parts = query.split('.');
	  }

	  /**
	   * Accessor function that accepts an object to be queried
	   *
	   * @private
	   *
	   * @param  {Object} object
	   * object to access
	   *
	   * @return {Mixed}
	   * value at given reference or undefined if it does not exist
	   */

	  function accessor(object) {
	    let ref = (object != null) ? object : (1, eval)('this');
	    let len = parts.length;
	    let idx = 0;

	    // iteratively save each segment's reference
	    for (; idx < len; idx += 1) {
	      if (ref != null) {ref = ref[parts[idx]];}
	    }

	    return ref;
	  }

	  // curry accessor function allowing partial application
	  return arguments.length > 1
	       ? accessor(arguments[1])
	       : accessor;
      }


    /***/ },
/* 22 */
    /***/ function(module, exports, __webpack_require__) {



	/*!
	 * imports.
	 */

      let curry2 = __webpack_require__(12);
      let selectn = __webpack_require__(11);

	/*!
	 * imports (local).
	 */

      let expressions = __webpack_require__(23);

	/*!
	 * exports.
	 */

      module.exports = curry2(filter);

	/**
	 * Curried function deriving a new array containing items from given array for which predicate returns true.
	 * Supports unary function, RegExp, dot/bracket-notation string path, and compound query object as predicate.
	 *
	 * @param {Function|RegExp|String|Object} predicate
	 * Unary function, RegExp, dot/bracket-notation string path, and compound query object.
	 *
	 * @param {Array} list
	 * Array to evaluate.
	 *
	 * @return {Array}
	 * New array containing items from given array for which predicate returns true.
	 */

      function filter(predicate, list) {
	  let end = list.length;
	  let idx = -1;
	  let out = [];

	  while (++idx < end) {
	    if (matchall(expressions(predicate, list[idx]))) {out.push(list[idx]);}
	  }

	  return out;
      }

	/**
	 * Whether all given expressions evaluate to true.
	 *
	 * @param {Array} expressions
	 * Expressions to evaluate.
	 *
	 * @return {Boolean}
	 * Whether all given expressions evaluate to true.
	 */

      function matchall(expressions) {
	  let end = expressions.length;
	  let idx = -1;
	  let out = false;

	  while (++idx < end) {
	    let expression = expressions[idx];

	    if (({}).toString.call(expression.predicate) === '[object Function]') {
	      out = !!expression.predicate(expression.element);
	    } else if (({}).toString.call(expression.predicate) === '[object RegExp]') {
	      out = !!expression.predicate.exec(expression.element);
	    } else if (expression.compare) {
	      out = expression.predicate === expression.element;
	    } else {
	      out = selectn(expression.predicate, expression.element);
	    }

	    if (out === false) {
	      return out;
	    }
	  }

	  return out;
      }


    /***/ },
/* 23 */
    /***/ function(module, exports, __webpack_require__) {



	/*!
	 * imports.
	 */

      let selectn = __webpack_require__(11);

	/*!
	 * exports.
	 */

      module.exports = expressions;

	/**
	 * Creates and returns an array of expression objects.
	 *
	 * Example:
	 *
	 *  {
	 *    predicate: 'received',
	 *    element: 'received',
	 *    compare: true
	 *  }
	 *
	 *  {
	 *    predicate: isBoolean,
	 *    element: true
	 *  }
	 *
	 *  {
	 *    predicate: 'message.read',
	 *    element: { message: { read: true } }
	 *  }
	 *
	 * @param {Function|String|Object} predicate
	 * Unary function, RegExp, dot/bracket-notation string path, and compound query object.
	 *
	 * @param {Array} list
	 * Array to iterate over.
	 *
	 * @return {Array}
	 * New array containing items from given array for which predicate returns true.
	 */

      function expressions(predicate, element) {
	  let expressions = [];

	  if (isFunction(predicate) || isRegExp(predicate) || isString(predicate)) {
	    expressions.push({predicate, element});
	  } else {
	    for (let key in predicate) {
	      expressions.push({predicate: predicate[key], element: selectn(key, element), compare: true});
	    }
	  }

	  return expressions;
      }

	/**
	 * Whether predicate is a RegExp instance.
	 *
	 * @param {*} predicate
	 * Predicate value to test.
	 *
	 * @return {Boolean}
	 * Whether predicate is a RegExp instance.
	 */

      function isRegExp(predicate) {
	  return ({}).toString.call(predicate) === '[object RegExp]';
      }

	/**
	 * Whether predicate is a function.
	 *
	 * @param {*} predicate
	 * Predicate value to test.
	 *
	 * @return {Boolean}
	 * Whether predicate is a function.
	 */

      function isFunction(predicate) {
	  return ({}).toString.call(predicate) === '[object Function]';
      }

	/**
	 * Whether predicate is a string.
	 *
	 * @param {*} predicate
	 * Predicate value to test.
	 *
	 * @return {Boolean}
	 * Whether predicate is a string.
	 */

      function isString(predicate) {
	  return ({}).toString.call(predicate) === '[object String]';
      }


    /***/ }
  /******/ ]);
});

