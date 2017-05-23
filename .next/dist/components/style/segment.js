"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mas/Documents/projects/memorize/client/components/style/segment.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n    color: green;\n    background-color: #fff;\n    height: 60px;\n    width: 180px;\n    text-align: center;\n    margin: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 4px;\n    cursor: pointer;\n    font-size: 1.4rem;\n    font-weight: bold;\n    transition: 0.1s ease-in;\n\n    &:hover {\n      background-color: green;\n      color: #fff;\n      transition: 0.2s ease-in;\n    }\n\n"], ["\n    color: green;\n    background-color: #fff;\n    height: 60px;\n    width: 180px;\n    text-align: center;\n    margin: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 4px;\n    cursor: pointer;\n    font-size: 1.4rem;\n    font-weight: bold;\n    transition: 0.1s ease-in;\n\n    &:hover {\n      background-color: green;\n      color: #fff;\n      transition: 0.2s ease-in;\n    }\n\n"]);

exports.default = function (props) {
  return _react2.default.createElement(_link2.default, { href: { pathname: "topics", query: { domains: props.topic } }, __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(SegmentStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, props.topic));
};

var SegmentStyle = _styledComponents2.default.div(_templateObject);