"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

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

var _page = require("../components/page");

var _page2 = _interopRequireDefault(_page);

var _pageWidth = require("../components/pageWidth");

var _pageWidth2 = _interopRequireDefault(_pageWidth);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _topics = require("../components/topics");

var _topics2 = _interopRequireDefault(_topics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mas/Documents/projects/memorize/client/pages/home.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n    width: 100%;\n    background-color: #29af6a;\n    height: 30vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"], ["\n    width: 100%;\n    background-color: #29af6a;\n    height: 30vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n    max-width: 1200px;\n    margin: -1rem auto 0;\n    color: #fff;\n    font-size: 1.6rem;\n    text-align: center;\n    line-height: 1.4;\n"], ["\n    max-width: 1200px;\n    margin: -1rem auto 0;\n    color: #fff;\n    font-size: 1.6rem;\n    text-align: center;\n    line-height: 1.4;\n"]);

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_page2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement(FullBackground, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement(HeaderContent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, "Welcome to memorize.now, where you learn everthing around webdevelopment!")), _react2.default.createElement(_pageWidth2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement(_topics2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      })));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;


var FullBackground = _styledComponents2.default.div(_templateObject);

var HeaderContent = _styledComponents2.default.div(_templateObject2);