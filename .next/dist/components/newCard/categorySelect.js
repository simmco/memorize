"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _topicModal = require("./topicModal");

var _topicModal2 = _interopRequireDefault(_topicModal);

var _semanticUiReact = require("semantic-ui-react");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mas/Documents/projects/memorize/client/components/newCard/categorySelect.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n    display: flex;\n    justify-content: space-between;\n    width: 400px;\n    height: 40px;\n    margin: 2rem 0;\n"], ["\n    display: flex;\n    justify-content: space-between;\n    width: 400px;\n    height: 40px;\n    margin: 2rem 0;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  padding-top: 0.4rem;\n  font-size: 1.2rem;\n  font-weight: bold;\n"], ["\n  padding-top: 0.4rem;\n  font-size: 1.2rem;\n  font-weight: bold;\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  max-width: 150px;\n"], ["\n  max-width: 150px;\n"]);

exports.default = function (props) {
  return _react2.default.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Category:"), _react2.default.createElement(StyledDropdown, {
    placeholder: "Select Category",
    fluid: true,
    search: true,
    selection: true,
    disabled: props.fetching,
    options: props.array,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement(_semanticUiReact.Modal, {
    disabled: !props.domain,
    size: "small",
    trigger: _react2.default.createElement(_semanticUiReact.Button, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }, "Add Category"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement(_topicModal2.default, { domain: props.domain, type: "Category", __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  })));
};

var Container = _styledComponents2.default.div(_templateObject);

var Text = _styledComponents2.default.p(_templateObject2);

var StyledDropdown = (0, _styledComponents2.default)(_semanticUiReact.Dropdown)(_templateObject3);