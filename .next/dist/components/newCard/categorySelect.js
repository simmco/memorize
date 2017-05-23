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

var _jsxFileName = "/Users/mas/Documents/projects/memorize/client/components/newCard/categorySelect.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n    display: flex;\n    justify-content: space-between;\n    width: 400px;\n    height: 40px;\n    margin: 2rem 0;\n"], ["\n    display: flex;\n    justify-content: space-between;\n    width: 400px;\n    height: 40px;\n    margin: 2rem 0;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  padding-top: 0.4rem;\n  font-size: 1.2rem;\n  font-weight: bold;\n"], ["\n  padding-top: 0.4rem;\n  font-size: 1.2rem;\n  font-weight: bold;\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  max-width: 150px;\n"], ["\n  max-width: 150px;\n"]);

var CategorySelect = function (_React$Component) {
  (0, _inherits3.default)(CategorySelect, _React$Component);

  function CategorySelect() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CategorySelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CategorySelect.__proto__ || (0, _getPrototypeOf2.default)(CategorySelect)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      modalOpen: false
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CategorySelect, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          domain = _props.domain,
          array = _props.array,
          addNewCategory = _props.addNewCategory,
          handleCategorySelect = _props.handleCategorySelect;

      return _react2.default.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement(Text, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, "Category:"), _react2.default.createElement(StyledDropdown, {
        placeholder: "Select Category",
        fluid: true,
        search: true,
        selection: true,
        disabled: !domain,
        options: array,
        onChange: handleCategorySelect,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), _react2.default.createElement(_semanticUiReact.Modal, {
        size: "small",
        open: this.state.modalOpen,
        trigger: _react2.default.createElement(_semanticUiReact.Button, {
          onClick: function onClick() {
            return _this2.setState({ modalOpen: true });
          },
          disabled: !domain,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }, "Add Category"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement(_topicModal2.default, {
        domain: domain,
        type: "Category",
        addNew: addNewCategory,
        closeModal: function closeModal() {
          return _this2.setState({ modalOpen: false });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      })));
    }
  }]);

  return CategorySelect;
}(_react2.default.Component);

exports.default = CategorySelect;


var Container = _styledComponents2.default.div(_templateObject);

var Text = _styledComponents2.default.p(_templateObject2);

var StyledDropdown = (0, _styledComponents2.default)(_semanticUiReact.Dropdown)(_templateObject3);