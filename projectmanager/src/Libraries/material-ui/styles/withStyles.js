'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _hoistNonReactStatics = require('hoist-non-react-statics');

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _wrapDisplayName = require('recompose/wrapDisplayName');

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

var _createEagerFactory = require('recompose/createEagerFactory');

var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

var _getDisplayName = require('recompose/getDisplayName');

var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

var _customPropTypes = require('../utils/customPropTypes');

var _customPropTypes2 = _interopRequireDefault(_customPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Link a style sheet with a component.
// It does not modify the component passed to it;
// instead, it returns a new, with a `classes` property.
//  weak

var withStyles = function withStyles(styleSheet) {
  return function (BaseComponent) {
    var factory = (0, _createEagerFactory2.default)(BaseComponent);

    var Style = function (_Component) {
      (0, _inherits3.default)(Style, _Component);

      function Style() {
        (0, _classCallCheck3.default)(this, Style);
        return (0, _possibleConstructorReturn3.default)(this, (Style.__proto__ || (0, _getPrototypeOf2.default)(Style)).apply(this, arguments));
      }

      (0, _createClass3.default)(Style, [{
        key: 'render',
        value: function render() {
          var _props = this.props,
              classesProp = _props.classes,
              innerRef = _props.innerRef,
              other = (0, _objectWithoutProperties3.default)(_props, ['classes', 'innerRef']);


          var classes = void 0;
          var renderedClasses = this.context.styleManager.render(styleSheet);

          if (classesProp) {
            classes = (0, _extends3.default)({}, renderedClasses, (0, _keys2.default)(classesProp).reduce(function (acc, key) {
              process.env.NODE_ENV !== "production" ? (0, _warning2.default)(renderedClasses[key], ['Material-UI: the key `' + key + '` ' + ('provided to the classes property object is not implemented in ' + (0, _getDisplayName2.default)(BaseComponent) + '.'), 'You can only overrides one of the following: ' + (0, _keys2.default)(renderedClasses).join(',')].join('\n')) : void 0;

              if (classesProp[key] !== undefined) {
                acc[key] = renderedClasses[key] + ' ' + classesProp[key];
              }
              return acc;
            }, {}));
          } else {
            classes = renderedClasses;
          }

          return factory((0, _extends3.default)({
            classes: classes,
            ref: innerRef
          }, other));
        }
        // Exposed for test purposes.

      }]);
      return Style;
    }(_react.Component);

    Style.Naked = BaseComponent;


    Style.propTypes = process.env.NODE_ENV !== "production" ? {
      /**
       * Useful to extend the style applied to components.
       */
      classes: _propTypes2.default.object,
      /**
       * Use that property to pass a ref callback to the decorated component.
       */
      innerRef: _propTypes2.default.func
    } : {};

    Style.contextTypes = {
      styleManager: _customPropTypes2.default.muiRequired
    };

    (0, _hoistNonReactStatics2.default)(Style, BaseComponent);

    if (process.env.NODE_ENV !== 'production') {
      Style.displayName = (0, _wrapDisplayName2.default)(BaseComponent, 'withStyles');
    }

    return Style;
  };
};

exports.default = withStyles;