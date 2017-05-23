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

var _semanticUiReact = require("semantic-ui-react");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mas/Documents/projects/memorize/client/components/newCard/topicModal.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  padding: 2rem;\n"], ["\n  padding: 2rem;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  margin: 1rem 0;\n"], ["\n  margin: 1rem 0;\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  margin: 1rem 0 0 0 ;\n"], ["\n  margin: 1rem 0 0 0 ;\n"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n  width: 100%;\n  height: 80px;\n  border-radius: .28571429rem;\n  border: 1px solid rgba(34,36,38,.15);\n  padding: 0.2rem;\n"], ["\n  width: 100%;\n  height: 80px;\n  border-radius: .28571429rem;\n  border: 1px solid rgba(34,36,38,.15);\n  padding: 0.2rem;\n"]);

var TopicModal = function (_React$Component) {
  (0, _inherits3.default)(TopicModal, _React$Component);

  function TopicModal() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TopicModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TopicModal.__proto__ || (0, _getPrototypeOf2.default)(TopicModal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      topic: "",
      description: ""
    }, _this.handleSave = function (topic, description, domain) {
      _this.props.addNew(topic, description, domain);
      _this.props.closeModal();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TopicModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          topic = _state.topic,
          description = _state.description;
      var _props = this.props,
          domain = _props.domain,
          addNew = _props.addNew,
          type = _props.type;

      return _react2.default.createElement(StyledModalContent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_semanticUiReact.Modal.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, "Add ", type), _react2.default.createElement(StyledModalDescription, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement(_semanticUiReact.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, "Topic:"), _react2.default.createElement(_semanticUiReact.Input, {
        onChange: function onChange(e) {
          return _this2.setState({ topic: e.target.value });
        },
        value: topic,
        placeholder: "Add the Topic...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement(_semanticUiReact.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, "Description:"), _react2.default.createElement(StyledTextarea, {
        onChange: function onChange(e) {
          return _this2.setState({ description: e.target.value });
        },
        value: description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      })), _react2.default.createElement(StyledButton, {
        onClick: function onClick() {
          return _this2.handleSave(topic, description, domain);
        },
        color: "green",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "Save"));
    }
  }]);

  return TopicModal;
}(_react2.default.Component);

exports.default = TopicModal;


var StyledModalContent = (0, _styledComponents2.default)(_semanticUiReact.Modal.Content)(_templateObject);

var StyledModalDescription = (0, _styledComponents2.default)(_semanticUiReact.Modal.Description)(_templateObject2);

var StyledButton = (0, _styledComponents2.default)(_semanticUiReact.Button)(_templateObject3);

var StyledTextarea = (0, _styledComponents2.default)(_semanticUiReact.TextArea)(_templateObject4);