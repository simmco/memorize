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

var _reactMarkdown = require("react-markdown");

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

var _semanticUiReact = require("semantic-ui-react");

var _store = require("../utils/store");

var _store2 = _interopRequireDefault(_store);

var _nextReduxWrapper = require("next-redux-wrapper");

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _actions = require("../actions");

var actions = _interopRequireWildcard(_actions);

var _domainSelect = require("../components/newCard/domainSelect");

var _domainSelect2 = _interopRequireDefault(_domainSelect);

var _categorySelect = require("../components/newCard/categorySelect");

var _categorySelect2 = _interopRequireDefault(_categorySelect);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mas/Documents/projects/memorize/client/pages/newcard.js?entry";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n    margin: 2rem auto;\n"], ["\n    margin: 2rem auto;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n"], ["\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  margin: 1rem 0;\n  padding: 0.5rem 1rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n"], ["\n  margin: 1rem 0;\n  padding: 0.5rem 1rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n  display: flex;\n  justify-content: space-between;\n  max-width: 272px;\n  margin: 2rem 0;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  max-width: 272px;\n  margin: 2rem 0;\n"]),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(["\n  max-width: 200px;\n"], ["\n  max-width: 200px;\n"]),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(["\n  font-size: 1.2rem;\n  font-weight: bold;\n"], ["\n  font-size: 1.2rem;\n  font-weight: bold;\n"]),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(["\n    display: flex;\n"], ["\n    display: flex;\n"]),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(["\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    background-color: #fff;\n    height: 500px;\n    width: 450px;\n    max-width: 450px;\n    margin-right: 4rem;\n"], ["\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    background-color: #fff;\n    height: 500px;\n    width: 450px;\n    max-width: 450px;\n    margin-right: 4rem;\n"]),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(["\n    border: 1px solid #ccc;\n"], ["\n    border: 1px solid #ccc;\n"]);

var array = [{ text: "HTML", value: "HTML" }, { text: "CSS", value: "CSS" }, { text: "JavaScript", value: "Javascript" }];

var buildObject = function buildObject(domains) {
  return domains.map(function (domain) {
    return { text: domain.topic, value: domain.topic, key: domain._id };
  });
};

var NewCard = function (_React$Component) {
  (0, _inherits3.default)(NewCard, _React$Component);

  function NewCard() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, NewCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = NewCard.__proto__ || (0, _getPrototypeOf2.default)(NewCard)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      description: " ",
      selectedDomain: ""
    }, _this.componentDidMount = function () {
      _this.props.fetchDomains();
    }, _this.handleInput = function (e) {
      _this.setState({
        description: e.target.value
      });
    }, _this.handleDomainSelect = function (e, obj) {
      _this.setState({ selectedDomain: obj.value });
      _this.props.fetchDomainsCategories(obj.value);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(NewCard, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          domains = _props.domains,
          categories = _props.categories;

      var fetchedCategories = categories.length === 0 ? false : true;
      return _react2.default.createElement(_page2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_pageWidth2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(NewCardTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "Add New Card"), _react2.default.createElement(ContainerTopicSelection, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(_domainSelect2.default, {
        handleDomainSelect: this.handleDomainSelect,
        array: buildObject(domains),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }), _react2.default.createElement(_categorySelect2.default, {
        domain: this.state.selectedDomain,
        fetching: !fetchedCategories,
        array: buildObject(categories),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }), _react2.default.createElement(DefineTopic, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(Text, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, "Topic:"), _react2.default.createElement(_semanticUiReact.Input, { placeholder: "Define...", __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }))), _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, "Explanation:"), _react2.default.createElement(ContainerCardInput, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement(FormContainer, {
        onChange: this.handleInput,
        value: this.state.description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), _react2.default.createElement(_reactMarkdown2.default, { source: this.state.description, __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      })))));
    }
  }]);

  return NewCard;
}(_react2.default.Component);

function mapStateTopProps(state) {
  return {
    domains: state.domains,
    categories: state.categories
  };
}

exports.default = (0, _nextReduxWrapper2.default)(_store2.default, mapStateTopProps, actions)(NewCard);


var Container = _styledComponents2.default.div(_templateObject);

var NewCardTitle = _styledComponents2.default.h2(_templateObject2);

var ContainerTopicSelection = _styledComponents2.default.div(_templateObject3);

var DefineTopic = _styledComponents2.default.div(_templateObject4);

var StyledDropdown = (0, _styledComponents2.default)(_semanticUiReact.Dropdown)(_templateObject5);

var Text = _styledComponents2.default.p(_templateObject6);

var ContainerCardInput = _styledComponents2.default.div(_templateObject7);

var FormContainer = _styledComponents2.default.textarea(_templateObject8);

var StyledMarkdown = (0, _styledComponents2.default)(_reactMarkdown2.default)(_templateObject9);