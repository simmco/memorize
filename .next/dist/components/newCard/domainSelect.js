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

var _topicModal = require("./topicModal");

var _topicModal2 = _interopRequireDefault(_topicModal);

var _semanticUiReact = require("semantic-ui-react");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mas/Documents/projects/memorize/client/components/newCard/domainSelect.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n    display: flex;\n    justify-content: space-between;\n    width: 400px;\n    height: 40px;\n    margin: 2rem 0;\n"], ["\n    display: flex;\n    justify-content: space-between;\n    width: 400px;\n    height: 40px;\n    margin: 2rem 0;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  padding-top: 0.4rem;\n  font-size: 1.2rem;\n  font-weight: bold;\n"], ["\n  padding-top: 0.4rem;\n  font-size: 1.2rem;\n  font-weight: bold;\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  max-width: 150px;\n"], ["\n  max-width: 150px;\n"]);

var DomainSelect = function (_React$Component) {
  (0, _inherits3.default)(DomainSelect, _React$Component);

  function DomainSelect() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DomainSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DomainSelect.__proto__ || (0, _getPrototypeOf2.default)(DomainSelect)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      modalOpen: false
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DomainSelect, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement(Text, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, "Domain:"), _react2.default.createElement(StyledDropdown, {
        placeholder: "Select Domain",
        fluid: true,
        search: true,
        selection: true,
        options: this.props.array,
        onChange: this.props.handleDomainSelect,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }), _react2.default.createElement(_semanticUiReact.Modal, {
        size: "small",
        open: this.state.modalOpen,
        trigger: _react2.default.createElement(_semanticUiReact.Button, { onClick: function onClick() {
            return _this2.setState({ modalOpen: true });
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        }, "Add Domain"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement(_topicModal2.default, {
        addNew: this.props.addNewDomain,
        type: "Domain",
        closeModal: function closeModal() {
          return _this2.setState({ modalOpen: false });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      })));
    }
  }]);

  return DomainSelect;
}(_react2.default.Component);

exports.default = DomainSelect;


var Container = _styledComponents2.default.div(_templateObject);

var Text = _styledComponents2.default.p(_templateObject2);

var StyledDropdown = (0, _styledComponents2.default)(_semanticUiReact.Dropdown)(_templateObject3);