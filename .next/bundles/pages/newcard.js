
          window.__NEXT_REGISTER_PAGE('/newcard', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 1060:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(783);


/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCH_DOMAIN = exports.FETCH_DOMAIN = "fetch_domain";
var FETCH_CATEGORY = exports.FETCH_CATEGORY = "fetch_category";

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mas/Documents/projects/memorize/client/actions/types.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mas/Documents/projects/memorize/client/actions/types.js"); } } })();

/***/ }),

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(578);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(596);

var _styledComponents = __webpack_require__(599);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mas/Documents/projects/memorize/client/components/newCard/topicModal.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mas/Documents/projects/memorize/client/components/newCard/topicModal.js"); } } })();

/***/ }),

/***/ 783:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(578);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _page = __webpack_require__(956);

var _page2 = _interopRequireDefault(_page);

var _pageWidth = __webpack_require__(957);

var _pageWidth2 = _interopRequireDefault(_pageWidth);

var _styledComponents = __webpack_require__(599);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactMarkdown = __webpack_require__(962);

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

var _semanticUiReact = __webpack_require__(596);

var _store = __webpack_require__(961);

var _store2 = _interopRequireDefault(_store);

var _nextReduxWrapper = __webpack_require__(947);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _actions = __webpack_require__(951);

var actions = _interopRequireWildcard(_actions);

var _domainSelect = __webpack_require__(955);

var _domainSelect2 = _interopRequireDefault(_domainSelect);

var _categorySelect = __webpack_require__(954);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mas/Documents/projects/memorize/client/pages/newcard.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mas/Documents/projects/memorize/client/pages/newcard.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/newcard")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 951:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchDomains = fetchDomains;
exports.fetchDomainsCategories = fetchDomainsCategories;
exports.addNewDomain = addNewDomain;

__webpack_require__(810);

var _types = __webpack_require__(618);

var URL = "http://localhost:3090/api";

function fetchDomains() {
  return function (dispatch) {
    fetch(URL + "/domains").then(function (res) {
      return res.json();
    }).then(function (json) {
      return dispatch({
        type: _types.FETCH_DOMAIN,
        payload: json.domains
      });
    });
  };
}

function fetchDomainsCategories(domain) {
  return function (dispatch) {
    fetch(URL + "/domains/" + domain).then(function (res) {
      return res.json();
    }).then(function (json) {
      console.log(json);
      dispatch({
        type: _types.FETCH_CATEGORY,
        payload: json.categories
      });
    }).catch(function (err) {
      console.log(err);
    });
  };
}

function addNewDomain(domainName, description) {
  return function (dispatch) {
    fetch(URL + "/domain", {
      type: "POST",
      body: {}
    });
  };
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mas/Documents/projects/memorize/client/actions/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mas/Documents/projects/memorize/client/actions/index.js"); } } })();

/***/ }),

/***/ 952:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(600);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(948);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mas/Documents/projects/memorize/client/components/header.js";

exports.default = function () {
  return _react2.default.createElement("header", {
    "data-jsx": 131480042,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement("headercontent", {
    "data-jsx": 131480042,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement("div", { className: "left", "data-jsx": 131480042,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: "/", __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement("a", {
    "data-jsx": 131480042,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement("span", { className: "logo", "data-jsx": 131480042,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "memorize")))), _react2.default.createElement("div", { className: "right", "data-jsx": 131480042,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(_link2.default, { href: "/newcard", __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement("div", { className: "nav", "data-jsx": 131480042,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Add new Card")))), _react2.default.createElement(_style2.default, {
    styleId: 131480042,
    css: "header[data-jsx=\"131480042\"] {color: #fff;background-color: #29af6a;font-family: 'Work Sans', 'sans-serif';position: fixed;width: 100%;height: 4rem;padding: 1.2rem 0;z-index: 10000;}headercontent[data-jsx=\"131480042\"] {display:-webkit-flex; display:flex;max-width: 1200px;margin: 0 auto;}.logo[data-jsx=\"131480042\"] {display: inline-block;color: #fff;font-size: 2rem;font-weight: 700;}.logo[data-jsx=\"131480042\"] img[data-jsx=\"131480042\"] {height: 35px;}.left[data-jsx=\"131480042\"] {-webkit-flex:1;-moz-flex:1;flex:1;}.right[data-jsx=\"131480042\"] {text-align: right;}.title[data-jsx=\"131480042\"] {display: inline-block;font-size: 1.5rem;text-decoration: none;padding: 8px 10px 8px 4px;vertical-align: top;color: #03A9F4;}.nav[data-jsx=\"131480042\"] {display: inline-block;vertical-align: top;cursor: pointer;}@media (max-width: 750px) {.title[data-jsx=\"131480042\"] {font-size: 16px;padding-bottom: 0;display:none;}a.login[data-jsx=\"131480042\"] {padding: 24px 10px 23px;}.nav[data-jsx=\"131480042\"] {display: block;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CZ0IsQUFDRiw4QkFDTSxZQUNjLDBCQUNhLHVDQUN2QixnQkFDSixZQUNDLGFBQ0ssa0JBQ0gsZUFDaEIsQ0FDYyxxQ0FDQyxtQ0FDSSxrQkFDSCxlQUNoQixDQUNNLDZCQUNpQixzQkFDVixZQUNJLGdCQUNDLGlCQUNsQixDQUNVLHVEQUNJLGFBQ2QsQ0FDTSw2QkFDRSxrQ0FDUixDQUNPLDhCQUNZLGtCQUNuQixDQUNPLDhCQUNnQixzQkFDSixrQkFDSSxzQkFDSSwwQkFDTixvQkFDTCxlQUNoQixDQUNLLDRCQUNrQixzQkFDRixvQkFDSixnQkFDakIsQ0FDMEIsMkJBQ2pCLDhCQUNVLGdCQUNFLGtCQUNMLGFBQ2QsQ0FDUSwrQkFDaUIsd0JBQ3pCLENBQ0ssNEJBQ1csZUFDaEIsQ0FDRiIsImZpbGUiOiJjb21wb25lbnRzL2hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFzL0RvY3VtZW50cy9wcm9qZWN0cy9tZW1vcml6ZS9jbGllbnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGhlYWRlcj5cbiAgICA8aGVhZGVyY29udGVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxuICAgICAgICA8TGluayBwcmVmZXRjaCBocmVmPVwiL1wiPlxuICAgICAgICAgIDxhPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9nb1wiPm1lbW9yaXplPC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbmV3Y2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgICAgICBBZGQgbmV3IENhcmRcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXJjb250ZW50PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGhlYWRlciB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjlhZjZhOyAgXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJywgJ3NhbnMtc2VyaWYnOyAgXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgd2lkdGg6IDEwMCU7ICAgICBcbiAgICAgICAgaGVpZ2h0OiA0cmVtO1xuICAgICAgICBwYWRkaW5nOiAxLjJyZW0gMDtcbiAgICAgICAgei1pbmRleDogMTAwMDA7XG4gICAgICB9XG4gICAgICBoZWFkZXJjb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgfVxuICAgICAgLmxvZ28ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICB9XG4gICAgICAubG9nbyBpbWcge1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICB9XG4gICAgICAubGVmdCB7XG4gICAgICAgIGZsZXg6MTtcbiAgICAgIH1cbiAgICAgIC5yaWdodCB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBwYWRkaW5nOiA4cHggMTBweCA4cHggNHB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICBjb2xvcjogIzAzQTlGNDtcbiAgICAgIH1cbiAgICAgIC5uYXYge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYS5sb2dpbiB7XG4gICAgICAgICAgcGFkZGluZzogMjRweCAxMHB4IDIzcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm5hdiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvaGVhZGVyPlxuKTtcbiJdfQ== */\n/*@ sourceURL=components/header.js */"
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mas/Documents/projects/memorize/client/components/header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mas/Documents/projects/memorize/client/components/header.js"); } } })();

/***/ }),

/***/ 953:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(600);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(200);

var _head2 = _interopRequireDefault(_head);

var _nprogress = __webpack_require__(949);

var _nprogress2 = _interopRequireDefault(_nprogress);

var _index = __webpack_require__(81);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mas/Documents/projects/memorize/client/components/meta.js";


_index2.default.onRouteChangeStart = function () {
  return _nprogress2.default.inc(0.7);
};
_index2.default.onRouteChangeComplete = function () {
  return _nprogress2.default.done();
};
_index2.default.onRouteChangeError = function () {
  return _nprogress2.default.done();
};

exports.default = function () {
  return _react2.default.createElement("div", {
    "data-jsx": 3302701892,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1", "data-jsx": 3302701892,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement("meta", { charSet: "utf-8", "data-jsx": 3302701892,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Lato",
    rel: "stylesheet",
    "data-jsx": 3302701892,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement("link", {
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    rel: "stylesheet",
    "data-jsx": 3302701892,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), _react2.default.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css",
    "data-jsx": 3302701892,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  })), _react2.default.createElement(_style2.default, {
    styleId: 3302701892,
    css: "\n      body {\n        font-family: Lato, sans-serif;          \n        background: #fff;\n      }\n      * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n      }\n      /* loading progress bar styles */\n      #nprogress {\n        pointer-events: none;\n      }\n      #nprogress .bar {\n        background: #0288D1;\n        position: fixed;\n        z-index: 1031;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 3px;\n      }\n      #nprogress .peg {\n        display: block;\n        position: absolute;\n        right: 0px;\n        width: 100px;\n        height: 100%;\n        box-shadow: 0 0 10px #fff, 0 0 5px #fff;\n        opacity: 1.0;\n        transform: rotate(3deg) translate(0px, -4px);\n      }\n    "
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mas/Documents/projects/memorize/client/components/meta.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mas/Documents/projects/memorize/client/components/meta.js"); } } })();

/***/ }),

/***/ 954:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(578);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _topicModal = __webpack_require__(688);

var _topicModal2 = _interopRequireDefault(_topicModal);

var _semanticUiReact = __webpack_require__(596);

var _styledComponents = __webpack_require__(599);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mas/Documents/projects/memorize/client/components/newCard/categorySelect.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mas/Documents/projects/memorize/client/components/newCard/categorySelect.js"); } } })();

/***/ }),

/***/ 955:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(578);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _topicModal = __webpack_require__(688);

var _topicModal2 = _interopRequireDefault(_topicModal);

var _semanticUiReact = __webpack_require__(596);

var _styledComponents = __webpack_require__(599);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mas/Documents/projects/memorize/client/components/newCard/domainSelect.js";

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
  }, "Domain:"), _react2.default.createElement(StyledDropdown, {
    placeholder: "Select Domain",
    fluid: true,
    search: true,
    selection: true,
    options: props.array,
    onChange: props.handleDomainSelect,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement(_semanticUiReact.Modal, { size: "small", trigger: _react2.default.createElement(_semanticUiReact.Button, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }, "Add Domain"), __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement(_topicModal2.default, { type: "Domain", __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  })));
};

var Container = _styledComponents2.default.div(_templateObject);

var Text = _styledComponents2.default.p(_templateObject2);

var StyledDropdown = (0, _styledComponents2.default)(_semanticUiReact.Dropdown)(_templateObject3);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mas/Documents/projects/memorize/client/components/newCard/domainSelect.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mas/Documents/projects/memorize/client/components/newCard/domainSelect.js"); } } })();

/***/ }),

/***/ 956:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(600);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(952);

var _header2 = _interopRequireDefault(_header);

var _meta = __webpack_require__(953);

var _meta2 = _interopRequireDefault(_meta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mas/Documents/projects/memorize/client/components/page.js";

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement("div", { className: "main", "data-jsx": 1253181065,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_meta2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), _react2.default.createElement(_header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), _react2.default.createElement("div", { className: "page", "data-jsx": 1253181065,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, children), _react2.default.createElement(_style2.default, {
    styleId: 1253181065,
    css: ".main[data-jsx=\"1253181065\"] {margin: auto;padding: 0 0 0 0;background-color: #f2f2f8;}.page[data-jsx=\"1253181065\"] {color: #212121;background-color: #f2f2f8;min-height: 100vh;padding: 3rem 0 0 0;}@media (max-width: 750px) {.main[data-jsx=\"1253181065\"] {padding: 0;width: auto;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZZ0IsQUFDSCw4QkFDUSxhQUNJLGlCQUNTLDBCQUMzQixDQUNNLDhCQUNVLGVBQ1csMEJBQ1Isa0JBQ0Usb0JBQ3JCLENBQzBCLDJCQUNsQiw4QkFDTSxXQUNDLFlBQ2IsQ0FDRiIsImZpbGUiOiJjb21wb25lbnRzL3BhZ2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcy9Eb2N1bWVudHMvcHJvamVjdHMvbWVtb3JpemUvY2xpZW50Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCBNZXRhIGZyb20gXCIuL21ldGFcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICA8TWV0YSAvPlxuICAgIDxIZWFkZXIgLz5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLm1haW4ge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDAgMCAwIDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjg7XG4gICAgICB9XG4gICAgICAucGFnZSB7XG4gICAgICAgIGNvbG9yOiAjMjEyMTIxO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmY4O1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgcGFkZGluZzogM3JlbSAwIDAgMDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgICAgICAubWFpbiB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuIl19 */\n/*@ sourceURL=components/page.js */"
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mas/Documents/projects/memorize/client/components/page.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mas/Documents/projects/memorize/client/components/page.js"); } } })();

/***/ }),

/***/ 957:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(600);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mas/Documents/projects/memorize/client/components/pageWidth.js";

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement("div", { className: "page-width", "data-jsx": 682200029,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, children, _react2.default.createElement(_style2.default, {
    styleId: 682200029,
    css: ".page-width[data-jsx=\"682200029\"] {max-width: 1200px;margin: 0 auto;}@media (max-width: 750px) {.main[data-jsx=\"682200029\"] {padding: 0;width: auto;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZVdpZHRoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdnQixBQUNHLG1DQUNPLGtCQUNILGVBQ2hCLENBQzBCLDJCQUNsQiw2QkFDTSxXQUNDLFlBQ2IsQ0FDRiIsImZpbGUiOiJjb21wb25lbnRzL3BhZ2VXaWR0aC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFzL0RvY3VtZW50cy9wcm9qZWN0cy9tZW1vcml6ZS9jbGllbnQiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicGFnZS13aWR0aFwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAucGFnZS13aWR0aCB7XG4gICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgICAgICAubWFpbiB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuIl19 */\n/*@ sourceURL=components/pageWidth.js */"
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mas/Documents/projects/memorize/client/components/pageWidth.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mas/Documents/projects/memorize/client/components/pageWidth.js"); } } })();

/***/ }),

/***/ 958:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];
  var type = action.type,
      text = action.text,
      todo = action.todo;

  switch (type) {
    case _types.FETCH_CATEGORY:
      return action.payload;
    // case REMOVE_DOMAIN:
    //   return state.filter(i => i !== todo);
    default:
      return state;
  }
};

var _types = __webpack_require__(618);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mas/Documents/projects/memorize/client/reducers/categories.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mas/Documents/projects/memorize/client/reducers/categories.js"); } } })();

/***/ }),

/***/ 959:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];
  var type = action.type,
      text = action.text,
      todo = action.todo;

  switch (type) {
    case _types.FETCH_DOMAIN:
      return action.payload;
    // case REMOVE_DOMAIN:
    //   return state.filter(i => i !== todo);
    default:
      return state;
  }
};

var _types = __webpack_require__(618);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mas/Documents/projects/memorize/client/reducers/domains.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mas/Documents/projects/memorize/client/reducers/domains.js"); } } })();

/***/ }),

/***/ 960:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(620);

var _domains = __webpack_require__(959);

var _domains2 = _interopRequireDefault(_domains);

var _categories = __webpack_require__(958);

var _categories2 = _interopRequireDefault(_categories);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({ domains: _domains2.default, categories: _categories2.default });

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mas/Documents/projects/memorize/client/reducers/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mas/Documents/projects/memorize/client/reducers/index.js"); } } })();

/***/ }),

/***/ 961:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(620);

var _reduxThunk = __webpack_require__(973);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(960);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isClient = typeof window !== "undefined";

var enhancers = (0, _redux.compose)(typeof window !== "undefined" && "development" !== "production" ? window.devToolsExtension && window.devToolsExtension() : function (f) {
  return f;
});

var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_reduxThunk2.default)(_redux.createStore);

exports.default = function (initialState) {
  return createStoreWithMiddleware(_reducers2.default, initialState, enhancers);
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mas/Documents/projects/memorize/client/utils/store.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mas/Documents/projects/memorize/client/utils/store.js"); } } })();

/***/ })

},[1060]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9uZXdjYXJkLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy90eXBlcy5qcz9kNmYwMGFiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmV3Q2FyZC90b3BpY01vZGFsLmpzP2Q2ZjAwYWIiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbmV3Y2FyZC5qcz9kNmYwMGFiIiwid2VicGFjazovLy8uL2FjdGlvbnMvaW5kZXguanM/ZDZmMDBhYiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci5qcz9jZmJmYThjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWV0YS5qcz9jZmJmYThjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmV3Q2FyZC9jYXRlZ29yeVNlbGVjdC5qcz9jZmJmYThjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmV3Q2FyZC9kb21haW5TZWxlY3QuanM/Y2ZiZmE4YyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2UuanM/Y2ZiZmE4YyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VXaWR0aC5qcz9jZmJmYThjIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2NhdGVnb3JpZXMuanM/Y2ZiZmE4YyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9kb21haW5zLmpzP2NmYmZhOGMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaW5kZXguanM/Y2ZiZmE4YyIsIndlYnBhY2s6Ly8vLi91dGlscy9zdG9yZS5qcz9jZmJmYThjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBGRVRDSF9ET01BSU4gPSBcImZldGNoX2RvbWFpblwiO1xuZXhwb3J0IGNvbnN0IEZFVENIX0NBVEVHT1JZID0gXCJmZXRjaF9jYXRlZ29yeVwiO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYWN0aW9ucy90eXBlcy5qcyIsImltcG9ydCB7IEJ1dHRvbiwgSGVhZGVyLCBJbnB1dCwgVGV4dEFyZWEsIE1vZGFsIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9wcyA9PiAoXG4gIDxTdHlsZWRNb2RhbENvbnRlbnQ+XG4gICAge2NvbnNvbGUubG9nKHByb3BzLmRvbWFpbil9XG4gICAgPE1vZGFsLkhlYWRlcj5cbiAgICAgIEFkZCB7cHJvcHMudHlwZX0ge3Byb3BzLmRvbWFpbiAmJiBcInRvIFwiICsgcHJvcHMuZG9tYWlufVxuICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgIDxTdHlsZWRNb2RhbERlc2NyaXB0aW9uPlxuICAgICAgPEhlYWRlcj5Ub3BpYzo8L0hlYWRlcj5cbiAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIkFkZCB0aGUgVG9waWMuLi5cIiAvPlxuICAgICAgPEhlYWRlcj5EZXNjcmlwdGlvbjo8L0hlYWRlcj5cbiAgICAgIDxTdHlsZWRUZXh0YXJlYSAvPlxuICAgIDwvU3R5bGVkTW9kYWxEZXNjcmlwdGlvbj5cbiAgICA8U3R5bGVkQnV0dG9uIGNvbG9yPVwiZ3JlZW5cIj5TYXZlPC9TdHlsZWRCdXR0b24+XG4gIDwvU3R5bGVkTW9kYWxDb250ZW50PlxuKTtcblxuY29uc3QgU3R5bGVkTW9kYWxDb250ZW50ID0gc3R5bGVkKE1vZGFsLkNvbnRlbnQpYFxuICBwYWRkaW5nOiAycmVtO1xuYDtcblxuY29uc3QgU3R5bGVkTW9kYWxEZXNjcmlwdGlvbiA9IHN0eWxlZChNb2RhbC5EZXNjcmlwdGlvbilgXG4gIG1hcmdpbjogMXJlbSAwO1xuYDtcblxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXG4gIG1hcmdpbjogMXJlbSAwIDAgMCA7XG5gO1xuXG5jb25zdCBTdHlsZWRUZXh0YXJlYSA9IHN0eWxlZChUZXh0QXJlYSlgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IC4yODU3MTQyOXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzNCwzNiwzOCwuMTUpO1xuICBwYWRkaW5nOiAwLjJyZW07XG5gO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9uZXdDYXJkL3RvcGljTW9kYWwuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9wYWdlXCI7XG5pbXBvcnQgUGFnZVdpZHRoIGZyb20gXCIuLi9jb21wb25lbnRzL3BhZ2VXaWR0aFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCB7IEJ1dHRvbiwgSW5wdXQsIERyb3Bkb3duLCBNb2RhbCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IGluaXRTdG9yZSBmcm9tIFwiLi4vdXRpbHMvc3RvcmVcIjtcbmltcG9ydCB3aXRoUmVkdXggZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi4vYWN0aW9uc1wiO1xuXG5pbXBvcnQgRG9tYWluU2VsZWN0IGZyb20gXCIuLi9jb21wb25lbnRzL25ld0NhcmQvZG9tYWluU2VsZWN0XCI7XG5pbXBvcnQgQ2F0ZWdvcnlTZWxlY3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmV3Q2FyZC9jYXRlZ29yeVNlbGVjdFwiO1xuXG5jb25zdCBhcnJheSA9IFtcbiAgeyB0ZXh0OiBcIkhUTUxcIiwgdmFsdWU6IFwiSFRNTFwiIH0sXG4gIHsgdGV4dDogXCJDU1NcIiwgdmFsdWU6IFwiQ1NTXCIgfSxcbiAgeyB0ZXh0OiBcIkphdmFTY3JpcHRcIiwgdmFsdWU6IFwiSmF2YXNjcmlwdFwiIH1cbl07XG5cbmNvbnN0IGJ1aWxkT2JqZWN0ID0gZnVuY3Rpb24oZG9tYWlucykge1xuICByZXR1cm4gZG9tYWlucy5tYXAoZG9tYWluID0+IHtcbiAgICByZXR1cm4geyB0ZXh0OiBkb21haW4udG9waWMsIHZhbHVlOiBkb21haW4udG9waWMsIGtleTogZG9tYWluLl9pZCB9O1xuICB9KTtcbn07XG5cbmNsYXNzIE5ld0NhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBkZXNjcmlwdGlvbjogXCIgXCIsXG4gICAgc2VsZWN0ZWREb21haW46IFwiXCJcbiAgfTtcbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5mZXRjaERvbWFpbnMoKTtcbiAgfTtcbiAgaGFuZGxlSW5wdXQgPSBlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRlc2NyaXB0aW9uOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9O1xuICBoYW5kbGVEb21haW5TZWxlY3QgPSAoZSwgb2JqKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkRG9tYWluOiBvYmoudmFsdWUgfSk7XG4gICAgdGhpcy5wcm9wcy5mZXRjaERvbWFpbnNDYXRlZ29yaWVzKG9iai52YWx1ZSk7XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRvbWFpbnMsIGNhdGVnb3JpZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZmV0Y2hlZENhdGVnb3JpZXMgPSBjYXRlZ29yaWVzLmxlbmd0aCA9PT0gMCA/IGZhbHNlIDogdHJ1ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2U+XG4gICAgICAgIDxQYWdlV2lkdGg+XG4gICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxOZXdDYXJkVGl0bGU+XG4gICAgICAgICAgICAgIEFkZCBOZXcgQ2FyZFxuICAgICAgICAgICAgPC9OZXdDYXJkVGl0bGU+XG4gICAgICAgICAgICA8Q29udGFpbmVyVG9waWNTZWxlY3Rpb24+XG5cbiAgICAgICAgICAgICAgPERvbWFpblNlbGVjdFxuICAgICAgICAgICAgICAgIGhhbmRsZURvbWFpblNlbGVjdD17dGhpcy5oYW5kbGVEb21haW5TZWxlY3R9XG4gICAgICAgICAgICAgICAgYXJyYXk9e2J1aWxkT2JqZWN0KGRvbWFpbnMpfVxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgIDxDYXRlZ29yeVNlbGVjdFxuICAgICAgICAgICAgICAgIGRvbWFpbj17dGhpcy5zdGF0ZS5zZWxlY3RlZERvbWFpbn1cbiAgICAgICAgICAgICAgICBmZXRjaGluZz17IWZldGNoZWRDYXRlZ29yaWVzfVxuICAgICAgICAgICAgICAgIGFycmF5PXtidWlsZE9iamVjdChjYXRlZ29yaWVzKX1cbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICA8RGVmaW5lVG9waWM+XG4gICAgICAgICAgICAgICAgPFRleHQ+VG9waWM6PC9UZXh0PlxuICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIkRlZmluZS4uLlwiIC8+XG4gICAgICAgICAgICAgIDwvRGVmaW5lVG9waWM+XG5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyVG9waWNTZWxlY3Rpb24+XG5cbiAgICAgICAgICAgIDxoMj5FeHBsYW5hdGlvbjo8L2gyPlxuICAgICAgICAgICAgPENvbnRhaW5lckNhcmRJbnB1dD5cbiAgICAgICAgICAgICAgPEZvcm1Db250YWluZXJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPE1hcmtkb3duIHNvdXJjZT17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyQ2FyZElucHV0PlxuXG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvUGFnZVdpZHRoPlxuICAgICAgPC9QYWdlPlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb3BQcm9wcyhzdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIGRvbWFpbnM6IHN0YXRlLmRvbWFpbnMsXG4gICAgY2F0ZWdvcmllczogc3RhdGUuY2F0ZWdvcmllc1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoaW5pdFN0b3JlLCBtYXBTdGF0ZVRvcFByb3BzLCBhY3Rpb25zKShOZXdDYXJkKTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcbmA7XG5cbmNvbnN0IE5ld0NhcmRUaXRsZSA9IHN0eWxlZC5oMmBcbmA7XG5cbmNvbnN0IENvbnRhaW5lclRvcGljU2VsZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG5gO1xuXG5jb25zdCBEZWZpbmVUb3BpYyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWF4LXdpZHRoOiAyNzJweDtcbiAgbWFyZ2luOiAycmVtIDA7XG5gO1xuXG5jb25zdCBTdHlsZWREcm9wZG93biA9IHN0eWxlZChEcm9wZG93bilgXG4gIG1heC13aWR0aDogMjAwcHg7XG5gO1xuXG5jb25zdCBUZXh0ID0gc3R5bGVkLnBgXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbmA7XG5cbmNvbnN0IENvbnRhaW5lckNhcmRJbnB1dCA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IEZvcm1Db250YWluZXIgPSBzdHlsZWQudGV4dGFyZWFgXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHdpZHRoOiA0NTBweDtcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgIG1hcmdpbi1yaWdodDogNHJlbTtcbmA7XG5cbmNvbnN0IFN0eWxlZE1hcmtkb3duID0gc3R5bGVkKE1hcmtkb3duKWBcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuYDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL25ld2NhcmQuanM/ZW50cnkiLCJpbXBvcnQgXCJpc29tb3JwaGljLWZldGNoXCI7XG5pbXBvcnQgeyBGRVRDSF9ET01BSU4sIEZFVENIX0NBVEVHT1JZIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjMwOTAvYXBpXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaERvbWFpbnMoKSB7XG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIGZldGNoKGAke1VSTH0vZG9tYWluc2ApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4oanNvbiA9PlxuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBGRVRDSF9ET01BSU4sXG4gICAgICAgIHBheWxvYWQ6IGpzb24uZG9tYWluc1xuICAgICAgfSlcbiAgICApO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hEb21haW5zQ2F0ZWdvcmllcyhkb21haW4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG4gICAgZmV0Y2goYCR7VVJMfS9kb21haW5zLyR7ZG9tYWlufWApXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhqc29uKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IEZFVENIX0NBVEVHT1JZLFxuICAgICAgICAgIHBheWxvYWQ6IGpzb24uY2F0ZWdvcmllc1xuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3RG9tYWluKGRvbWFpbk5hbWUsIGRlc2NyaXB0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIGZldGNoKGAke1VSTH0vZG9tYWluYCwge1xuICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICBib2R5OiB7fVxuICAgIH0pO1xuICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYWN0aW9ucy9pbmRleC5qcyIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8aGVhZGVyPlxuICAgIDxoZWFkZXJjb250ZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XG4gICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGE+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dvXCI+bWVtb3JpemU8L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9uZXdjYXJkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgICAgICAgIEFkZCBuZXcgQ2FyZFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcmNvbnRlbnQ+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaGVhZGVyIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOWFmNmE7ICBcbiAgICAgICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCAnc2Fucy1zZXJpZic7ICBcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB3aWR0aDogMTAwJTsgICAgIFxuICAgICAgICBoZWlnaHQ6IDRyZW07XG4gICAgICAgIHBhZGRpbmc6IDEuMnJlbSAwO1xuICAgICAgICB6LWluZGV4OiAxMDAwMDtcbiAgICAgIH1cbiAgICAgIGhlYWRlcmNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG4gICAgICAubG9nbyB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIH1cbiAgICAgIC5sb2dvIGltZyB7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgIH1cbiAgICAgIC5sZWZ0IHtcbiAgICAgICAgZmxleDoxO1xuICAgICAgfVxuICAgICAgLnJpZ2h0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB9XG4gICAgICAudGl0bGUge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxMHB4IDhweCA0cHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIGNvbG9yOiAjMDNBOUY0O1xuICAgICAgfVxuICAgICAgLm5hdiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgfVxuICAgICAgICBhLmxvZ2luIHtcbiAgICAgICAgICBwYWRkaW5nOiAyNHB4IDEwcHggMjNweDtcbiAgICAgICAgfVxuICAgICAgICAubmF2IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9oZWFkZXI+XG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9oZWFkZXIuanMiLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTlByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cblJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSAoKSA9PiBOUHJvZ3Jlc3MuaW5jKDAuNyk7XG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKTtcblJvdXRlci5vblJvdXRlQ2hhbmdlRXJyb3IgPSAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgIDxsaW5rXG4gICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0b1wiXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgLz5cbiAgICAgIDxsaW5rXG4gICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCJcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAvPlxuICAgICAgPGxpbmtcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIGhyZWY9XCIvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zZW1hbnRpYy11aS8yLjIuMi9zZW1hbnRpYy5taW4uY3NzXCJcbiAgICAgIC8+XG5cbiAgICA8L0hlYWQ+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIGJvZHkge1xuICAgICAgICBmb250LWZhbWlseTogTGF0bywgc2Fucy1zZXJpZjsgICAgICAgICAgXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICB9XG4gICAgICAqIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuICAgICAgLyogbG9hZGluZyBwcm9ncmVzcyBiYXIgc3R5bGVzICovXG4gICAgICAjbnByb2dyZXNzIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG4gICAgICAjbnByb2dyZXNzIC5iYXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDI4OEQxO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHotaW5kZXg6IDEwMzE7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogM3B4O1xuICAgICAgfVxuICAgICAgI25wcm9ncmVzcyAucGVnIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNmZmYsIDAgMCA1cHggI2ZmZjtcbiAgICAgICAgb3BhY2l0eTogMS4wO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbWV0YS5qcyIsImltcG9ydCBUb3BpY01vZGFsIGZyb20gXCIuL3RvcGljTW9kYWxcIjtcbmltcG9ydCB7IEJ1dHRvbiwgTW9kYWwsIERyb3Bkb3duIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9wcyA9PiAoXG4gIDxDb250YWluZXI+XG4gICAgPFRleHQ+Q2F0ZWdvcnk6PC9UZXh0PlxuICAgIDxTdHlsZWREcm9wZG93blxuICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgQ2F0ZWdvcnlcIlxuICAgICAgZmx1aWRcbiAgICAgIHNlYXJjaFxuICAgICAgc2VsZWN0aW9uXG4gICAgICBkaXNhYmxlZD17cHJvcHMuZmV0Y2hpbmd9XG4gICAgICBvcHRpb25zPXtwcm9wcy5hcnJheX1cbiAgICAvPlxuICAgIDxNb2RhbFxuICAgICAgZGlzYWJsZWQ9eyFwcm9wcy5kb21haW59XG4gICAgICBzaXplPVwic21hbGxcIlxuICAgICAgdHJpZ2dlcj17PEJ1dHRvbj5BZGQgQ2F0ZWdvcnk8L0J1dHRvbj59XG4gICAgPlxuICAgICAgPFRvcGljTW9kYWwgZG9tYWluPXtwcm9wcy5kb21haW59IHR5cGU9XCJDYXRlZ29yeVwiIC8+XG4gICAgPC9Nb2RhbD5cbiAgPC9Db250YWluZXI+XG4pO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiAycmVtIDA7XG5gO1xuXG5jb25zdCBUZXh0ID0gc3R5bGVkLnBgXG4gIHBhZGRpbmctdG9wOiAwLjRyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbmA7XG5cbmNvbnN0IFN0eWxlZERyb3Bkb3duID0gc3R5bGVkKERyb3Bkb3duKWBcbiAgbWF4LXdpZHRoOiAxNTBweDtcbmA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL25ld0NhcmQvY2F0ZWdvcnlTZWxlY3QuanMiLCJpbXBvcnQgVG9waWNNb2RhbCBmcm9tIFwiLi90b3BpY01vZGFsXCI7XG5pbXBvcnQgeyBCdXR0b24sIE1vZGFsLCBEcm9wZG93biB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgcHJvcHMgPT4gKFxuICA8Q29udGFpbmVyPlxuICAgIDxUZXh0PkRvbWFpbjo8L1RleHQ+XG4gICAgPFN0eWxlZERyb3Bkb3duXG4gICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBEb21haW5cIlxuICAgICAgZmx1aWRcbiAgICAgIHNlYXJjaFxuICAgICAgc2VsZWN0aW9uXG4gICAgICBvcHRpb25zPXtwcm9wcy5hcnJheX1cbiAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVEb21haW5TZWxlY3R9XG4gICAgLz5cbiAgICA8TW9kYWwgc2l6ZT1cInNtYWxsXCIgdHJpZ2dlcj17PEJ1dHRvbj5BZGQgRG9tYWluPC9CdXR0b24+fT5cbiAgICAgIDxUb3BpY01vZGFsIHR5cGU9XCJEb21haW5cIiAvPlxuICAgIDwvTW9kYWw+XG4gIDwvQ29udGFpbmVyPlxuKTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbjogMnJlbSAwO1xuYDtcblxuY29uc3QgVGV4dCA9IHN0eWxlZC5wYFxuICBwYWRkaW5nLXRvcDogMC40cmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5gO1xuXG5jb25zdCBTdHlsZWREcm9wZG93biA9IHN0eWxlZChEcm9wZG93bilgXG4gIG1heC13aWR0aDogMTUwcHg7XG5gO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9uZXdDYXJkL2RvbWFpblNlbGVjdC5qcyIsImltcG9ydCBIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgTWV0YSBmcm9tIFwiLi9tZXRhXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgPE1ldGEgLz5cbiAgICA8SGVhZGVyIC8+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5tYWluIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAwIDAgMCAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmY4O1xuICAgICAgfVxuICAgICAgLnBhZ2Uge1xuICAgICAgICBjb2xvcjogIzIxMjEyMTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmODtcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgIHBhZGRpbmc6IDNyZW0gMCAwIDA7XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgLm1haW4ge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvcGFnZS5qcyIsImV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXdpZHRoXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5wYWdlLXdpZHRoIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgICAgIC5tYWluIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3BhZ2VXaWR0aC5qcyIsImltcG9ydCB7IEZFVENIX0NBVEVHT1JZIH0gZnJvbSBcIi4uL2FjdGlvbnMvdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RhdGUgPSBbXSwgYWN0aW9uKSB7XG4gIGNvbnN0IHsgdHlwZSwgdGV4dCwgdG9kbyB9ID0gYWN0aW9uO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgRkVUQ0hfQ0FURUdPUlk6XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gICAgLy8gY2FzZSBSRU1PVkVfRE9NQUlOOlxuICAgIC8vICAgcmV0dXJuIHN0YXRlLmZpbHRlcihpID0+IGkgIT09IHRvZG8pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL2NhdGVnb3JpZXMuanMiLCJpbXBvcnQgeyBGRVRDSF9ET01BSU4gfSBmcm9tIFwiLi4vYWN0aW9ucy90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGF0ZSA9IFtdLCBhY3Rpb24pIHtcbiAgY29uc3QgeyB0eXBlLCB0ZXh0LCB0b2RvIH0gPSBhY3Rpb247XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBGRVRDSF9ET01BSU46XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gICAgLy8gY2FzZSBSRU1PVkVfRE9NQUlOOlxuICAgIC8vICAgcmV0dXJuIHN0YXRlLmZpbHRlcihpID0+IGkgIT09IHRvZG8pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL2RvbWFpbnMuanMiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcblxuaW1wb3J0IGRvbWFpbnMgZnJvbSBcIi4vZG9tYWluc1wiO1xuaW1wb3J0IGNhdGVnb3JpZXMgZnJvbSBcIi4vY2F0ZWdvcmllc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoeyBkb21haW5zLCBjYXRlZ29yaWVzIH0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvaW5kZXguanMiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tcG9zZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4uL3JlZHVjZXJzXCI7XG5cbmNvbnN0IGlzQ2xpZW50ID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIjtcblxuY29uc3QgZW5oYW5jZXJzID0gY29tcG9zZShcbiAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCJcbiAgICA/IHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbiAmJiB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24oKVxuICAgIDogZiA9PiBmXG4pO1xuXG5jb25zdCBjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlID0gYXBwbHlNaWRkbGV3YXJlKHRodW5rKShjcmVhdGVTdG9yZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxTdGF0ZSA9PlxuICBjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlKHJvb3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGVuaGFuY2Vycyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy9zdG9yZS5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUdBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFFQTtBQUZBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQVpBO0FBQ0E7QUFlQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBQ0E7QUFLQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQUE7QUFEQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUdBO0FBRUE7QUFGQTtBQUFBO0FBR0E7QUFDQTs7QUFGQTtBQUtBO0FBTEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTs7QUFIQTtBQU1BO0FBTkE7QUFDQTs7QUFLQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFMQTtBQUtBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTtBQUdBO0FBT0E7QUFQQTs7Ozs7O0FBckRBO0FBQ0E7QUE4REE7O0FBRUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFNQTtBQUNBO0FBR0E7QUFDQTtBQUlBO0FBQ0E7QUFHQTtBQUNBO0FBU0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SUE7QUFXQTtBQWlCQTtBQUNBO0FBbENBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBR0E7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBR0E7QUFBQTtBQURBO0FBTEE7QUFVQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUhBO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTs7Ozs7OztBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFJQTs7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEE7QUFBQTtBQUFBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTs7QUFHQTtBQUFBO0FBRkE7O0FBQUE7QUFJQTtBQUpBO0FBQ0E7QUFLQTtBQUFBO0FBRkE7O0FBQUE7QUFJQTtBQUpBO0FBQ0E7QUFLQTtBQUFBO0FBRkE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFiQTtBQUFBO0FBQUE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7O0FBTkE7QUFRQTtBQVJBO0FBQ0E7QUFRQTtBQUVBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSEE7QUFLQTtBQUxBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7O0FBaEJBO0FBQ0E7QUFvQkE7QUFDQTtBQU9BO0FBQ0E7QUFLQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUNBOzs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQU5BO0FBUUE7QUFSQTtBQUNBOztBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBWkE7QUFDQTtBQWdCQTtBQUNBO0FBT0E7QUFDQTtBQUtBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFFQTtBQUZBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFKQTtBQUFBO0FBQUE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTs7Ozs7OztBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0NBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFYQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBWEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7O0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        