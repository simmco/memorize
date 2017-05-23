"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _segment = require("../components/style/segment");

var _segment2 = _interopRequireDefault(_segment);

var _reactRedux = require("react-redux");

var _actions = require("../actions");

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mas/Documents/projects/memorize/client/components/topics.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n    margin: 2rem auto;\n"], ["\n    margin: 2rem auto;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n\n"], ["\n\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n    display: flex;\n    flex-wrap: wrap;\n"], ["\n    display: flex;\n    flex-wrap: wrap;\n"]);

var Topics = function (_React$Component) {
  (0, _inherits3.default)(Topics, _React$Component);

  function Topics() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Topics);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Topics.__proto__ || (0, _getPrototypeOf2.default)(Topics)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
      _this.props.fetchDomains();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Topics, [{
    key: "render",
    value: function render() {
      console.log(this.props.domains);
      var domains = this.props.domains;

      return _react2.default.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, "TOPICS"), _react2.default.createElement(ContainerSegment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, domains.map(function (topic) {
        return _react2.default.createElement(_segment2.default, (0, _extends3.default)({}, topic, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        }));
      })));
    }
  }]);

  return Topics;
}(_react2.default.Component);

function mapStateToProps(state) {
  return {
    domains: state.domains
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(Topics);


var Container = _styledComponents2.default.div(_templateObject);

var Header = _styledComponents2.default.h2(_templateObject2);

var ContainerSegment = _styledComponents2.default.div(_templateObject3);