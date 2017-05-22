"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mas/Documents/projects/memorize/client/components/newCard/topicModal.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  padding: 2rem;\n"], ["\n  padding: 2rem;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  margin: 1rem 0;\n"], ["\n  margin: 1rem 0;\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  margin: 1rem 0 0 0 ;\n"], ["\n  margin: 1rem 0 0 0 ;\n"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n  width: 100%;\n  height: 80px;\n  border-radius: .28571429rem;\n  border: 1px solid rgba(34,36,38,.15);\n  padding: 0.2rem;\n"], ["\n  width: 100%;\n  height: 80px;\n  border-radius: .28571429rem;\n  border: 1px solid rgba(34,36,38,.15);\n  padding: 0.2rem;\n"]);

exports.default = function (props) {
  return _react2.default.createElement(StyledModalContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, console.log(props.domain), _react2.default.createElement(_semanticUiReact.Modal.Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Add ", props.type, " ", props.domain && "to " + props.domain), _react2.default.createElement(StyledModalDescription, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_semanticUiReact.Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Topic:"), _react2.default.createElement(_semanticUiReact.Input, { placeholder: "Add the Topic...", __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement(_semanticUiReact.Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Description:"), _react2.default.createElement(StyledTextarea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  })), _react2.default.createElement(StyledButton, { color: "green", __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "Save"));
};

var StyledModalContent = (0, _styledComponents2.default)(_semanticUiReact.Modal.Content)(_templateObject);

var StyledModalDescription = (0, _styledComponents2.default)(_semanticUiReact.Modal.Description)(_templateObject2);

var StyledButton = (0, _styledComponents2.default)(_semanticUiReact.Button)(_templateObject3);

var StyledTextarea = (0, _styledComponents2.default)(_semanticUiReact.TextArea)(_templateObject4);