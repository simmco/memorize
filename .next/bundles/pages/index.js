
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCH_DOMAIN = exports.FETCH_DOMAIN = "fetch_domain";
var FETCH_CATEGORY = exports.FETCH_CATEGORY = "fetch_category";
var FETCH_CARD = exports.FETCH_CARD = "fetch_card";
var ADD_DOMAIN = exports.ADD_DOMAIN = "add_domain";
var ADD_CATEGORY = exports.ADD_CATEGORY = "add_category";
var ADD_CARD = exports.ADD_CARD = "add_card";

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mas/Documents/projects/memorize/client/actions/types.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mas/Documents/projects/memorize/client/actions/types.js"); } } })();

/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _store = __webpack_require__(609);

var _store2 = _interopRequireDefault(_store);

var _nextReduxWrapper = __webpack_require__(596);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _home = __webpack_require__(597);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _nextReduxWrapper2.default)(_store2.default)(_home2.default);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mas/Documents/projects/memorize/client/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mas/Documents/projects/memorize/client/pages/index.js"); } } })();
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
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(560);

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

var _page = __webpack_require__(602);

var _page2 = _interopRequireDefault(_page);

var _pageWidth = __webpack_require__(603);

var _pageWidth2 = _interopRequireDefault(_pageWidth);

var _styledComponents = __webpack_require__(565);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _topics = __webpack_require__(605);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mas/Documents/projects/memorize/client/pages/home.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mas/Documents/projects/memorize/client/pages/home.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

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
    })(module.exports.default || module.exports, "/home")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchDomains = fetchDomains;
exports.fetchDomainsCategories = fetchDomainsCategories;
exports.addNewDomain = addNewDomain;
exports.addNewCategory = addNewCategory;
exports.addNewCard = addNewCard;

var _stringify = __webpack_require__(566);

var _stringify2 = _interopRequireDefault(_stringify);

__webpack_require__(587);

var _types = __webpack_require__(562);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function fetchDomainsCategories(domainId) {
  return function (dispatch) {
    fetch(URL + "/domains/" + domainId).then(function (res) {
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

function addNewDomain(topic, description) {
  return function (dispatch) {
    fetch(URL + "/domain", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: (0, _stringify2.default)({ topic: topic, description: description })
    }).then(function (res) {
      return res.json();
    }).then(function (json) {
      console.log(json);
      dispatch({
        type: _types.ADD_DOMAIN,
        payload: json.domain
      });
    });
  };
}

function addNewCategory(topic, description, domainId) {
  return function (dispatch) {
    fetch(URL + "/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: (0, _stringify2.default)({ topic: topic, description: description, domainId: domainId })
    }).then(function (res) {
      return res.json();
    }).then(function (json) {
      console.log(json);
      dispatch({
        type: _types.ADD_CATEGORY,
        payload: json.categorie
      });
    });
  };
}

function addNewCard(topic, description, categoryId) {
  return function (dispatch) {
    fetch(URL + "/card", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: (0, _stringify2.default)({ topic: topic, description: description, categoryId: categoryId })
    }).then(function (res) {
      return res.json();
    }).then(function (json) {
      console.log(json);
      dispatch({
        type: _types.ADD_CARD,
        payload: json.newCard
      });
    });
  };
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mas/Documents/projects/memorize/client/actions/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mas/Documents/projects/memorize/client/actions/index.js"); } } })();

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(559);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(568);

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

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(559);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(200);

var _head2 = _interopRequireDefault(_head);

var _nprogress = __webpack_require__(598);

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

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(559);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(600);

var _header2 = _interopRequireDefault(_header);

var _meta = __webpack_require__(601);

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

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(559);

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

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(560);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(565);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _link = __webpack_require__(568);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mas/Documents/projects/memorize/client/components/style/segment.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mas/Documents/projects/memorize/client/components/style/segment.js"); } } })();

/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(560);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _extends2 = __webpack_require__(94);

var _extends3 = _interopRequireDefault(_extends2);

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

var _styledComponents = __webpack_require__(565);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _segment = __webpack_require__(604);

var _segment2 = _interopRequireDefault(_segment);

var _reactRedux = __webpack_require__(571);

var _actions = __webpack_require__(599);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mas/Documents/projects/memorize/client/components/topics.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mas/Documents/projects/memorize/client/components/topics.js"); } } })();

/***/ }),

/***/ 606:
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
    case _types.ADD_CATEGORY:
      return [].concat((0, _toConsumableArray3.default)(state), [action.payload]);
    // case REMOVE_DOMAIN:
    //   return state.filter(i => i !== todo);
    default:
      return state;
  }
};

var _toConsumableArray2 = __webpack_require__(95);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _types = __webpack_require__(562);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mas/Documents/projects/memorize/client/reducers/categories.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mas/Documents/projects/memorize/client/reducers/categories.js"); } } })();

/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _types.FETCH_DOMAIN:
      return action.payload;
    case _types.ADD_DOMAIN:
      return [].concat((0, _toConsumableArray3.default)(state), [action.payload]);
    // case REMOVE_DOMAIN:
    //   return state.filter(i => i !== todo);
    default:
      return state;
  }
};

var _toConsumableArray2 = __webpack_require__(95);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _types = __webpack_require__(562);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mas/Documents/projects/memorize/client/reducers/domains.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mas/Documents/projects/memorize/client/reducers/domains.js"); } } })();

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(564);

var _domains = __webpack_require__(607);

var _domains2 = _interopRequireDefault(_domains);

var _categories = __webpack_require__(606);

var _categories2 = _interopRequireDefault(_categories);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({ domains: _domains2.default, categories: _categories2.default });

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mas/Documents/projects/memorize/client/reducers/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mas/Documents/projects/memorize/client/reducers/index.js"); } } })();

/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(564);

var _reduxThunk = __webpack_require__(619);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(608);

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

/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(577);


/***/ })

},[627]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FjdGlvbnMvdHlwZXMuanM/Yjg3MmU3YiIsIndlYnBhY2s6Ly8vLi9wYWdlcz9iODcyZTdiIiwid2VicGFjazovLy8uL3BhZ2VzL2hvbWUuanM/Yjg3MmU3YiIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2luZGV4LmpzP2I4NzJlN2IiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIuanM/Yjg3MmU3YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21ldGEuanM/Yjg3MmU3YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2UuanM/Yjg3MmU3YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VXaWR0aC5qcz9iODcyZTdiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3R5bGUvc2VnbWVudC5qcz9iODcyZTdiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdG9waWNzLmpzP2I4NzJlN2IiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvY2F0ZWdvcmllcy5qcz9iODcyZTdiIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2RvbWFpbnMuanM/Yjg3MmU3YiIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcz9iODcyZTdiIiwid2VicGFjazovLy8uL3V0aWxzL3N0b3JlLmpzP2I4NzJlN2IiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEZFVENIX0RPTUFJTiA9IFwiZmV0Y2hfZG9tYWluXCI7XG5leHBvcnQgY29uc3QgRkVUQ0hfQ0FURUdPUlkgPSBcImZldGNoX2NhdGVnb3J5XCI7XG5leHBvcnQgY29uc3QgRkVUQ0hfQ0FSRCA9IFwiZmV0Y2hfY2FyZFwiO1xuZXhwb3J0IGNvbnN0IEFERF9ET01BSU4gPSBcImFkZF9kb21haW5cIjtcbmV4cG9ydCBjb25zdCBBRERfQ0FURUdPUlkgPSBcImFkZF9jYXRlZ29yeVwiO1xuZXhwb3J0IGNvbnN0IEFERF9DQVJEID0gXCJhZGRfY2FyZFwiO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYWN0aW9ucy90eXBlcy5qcyIsImltcG9ydCBpbml0U3RvcmUgZnJvbSBcIi4uL3V0aWxzL3N0b3JlXCI7XG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcblxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vaG9tZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoaW5pdFN0b3JlKShIb21lKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvcGFnZVwiO1xuaW1wb3J0IFBhZ2VXaWR0aCBmcm9tIFwiLi4vY29tcG9uZW50cy9wYWdlV2lkdGhcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmltcG9ydCBUb3BpY3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvdG9waWNzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UGFnZT5cbiAgICAgICAgPEZ1bGxCYWNrZ3JvdW5kPlxuICAgICAgICAgIDxIZWFkZXJDb250ZW50PlxuICAgICAgICAgICAgV2VsY29tZSB0byBtZW1vcml6ZS5ub3csIHdoZXJlIHlvdSBsZWFybiBldmVydGhpbmcgYXJvdW5kIHdlYmRldmVsb3BtZW50IVxuICAgICAgICAgIDwvSGVhZGVyQ29udGVudD5cbiAgICAgICAgPC9GdWxsQmFja2dyb3VuZD5cbiAgICAgICAgPFBhZ2VXaWR0aD5cbiAgICAgICAgICA8VG9waWNzIC8+XG4gICAgICAgIDwvUGFnZVdpZHRoPlxuICAgICAgPC9QYWdlPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgRnVsbEJhY2tncm91bmQgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOWFmNmE7XG4gICAgaGVpZ2h0OiAzMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IEhlYWRlckNvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIG1hcmdpbjogLTFyZW0gYXV0byAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuYDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2hvbWUuanMiLCJpbXBvcnQgXCJpc29tb3JwaGljLWZldGNoXCI7XG5pbXBvcnQge1xuICBGRVRDSF9ET01BSU4sXG4gIEZFVENIX0NBVEVHT1JZLFxuICBBRERfRE9NQUlOLFxuICBBRERfQ0FURUdPUlksXG4gIEFERF9DQVJEXG59IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IFVSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDkwL2FwaVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hEb21haW5zKCkge1xuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbiAgICBmZXRjaChgJHtVUkx9L2RvbWFpbnNgKS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGpzb24gPT5cbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogRkVUQ0hfRE9NQUlOLFxuICAgICAgICBwYXlsb2FkOiBqc29uLmRvbWFpbnNcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoRG9tYWluc0NhdGVnb3JpZXMoZG9tYWluSWQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG4gICAgZmV0Y2goYCR7VVJMfS9kb21haW5zLyR7ZG9tYWluSWR9YClcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogRkVUQ0hfQ0FURUdPUlksXG4gICAgICAgICAgcGF5bG9hZDoganNvbi5jYXRlZ29yaWVzXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdEb21haW4odG9waWMsIGRlc2NyaXB0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIGZldGNoKGAke1VSTH0vZG9tYWluYCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRvcGljLCBkZXNjcmlwdGlvbiB9KVxuICAgIH0pXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhqc29uKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IEFERF9ET01BSU4sXG4gICAgICAgICAgcGF5bG9hZDoganNvbi5kb21haW5cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld0NhdGVnb3J5KHRvcGljLCBkZXNjcmlwdGlvbiwgZG9tYWluSWQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG4gICAgZmV0Y2goYCR7VVJMfS9jYXRlZ29yeWAsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0b3BpYywgZGVzY3JpcHRpb24sIGRvbWFpbklkIH0pXG4gICAgfSlcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogQUREX0NBVEVHT1JZLFxuICAgICAgICAgIHBheWxvYWQ6IGpzb24uY2F0ZWdvcmllXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdDYXJkKHRvcGljLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnlJZCkge1xuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbiAgICBmZXRjaChgJHtVUkx9L2NhcmRgLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdG9waWMsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeUlkIH0pXG4gICAgfSlcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogQUREX0NBUkQsXG4gICAgICAgICAgcGF5bG9hZDoganNvbi5uZXdDYXJkXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hY3Rpb25zL2luZGV4LmpzIiwiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxoZWFkZXI+XG4gICAgPGhlYWRlcmNvbnRlbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cbiAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ29cIj5tZW1vcml6ZTwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxuICAgICAgICA8TGluayBocmVmPVwiL25ld2NhcmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgICAgICAgQWRkIG5ldyBDYXJkXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyY29udGVudD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoZWFkZXIge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI5YWY2YTsgIFxuICAgICAgICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsICdzYW5zLXNlcmlmJzsgIFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHdpZHRoOiAxMDAlOyAgICAgXG4gICAgICAgIGhlaWdodDogNHJlbTtcbiAgICAgICAgcGFkZGluZzogMS4ycmVtIDA7XG4gICAgICAgIHotaW5kZXg6IDEwMDAwO1xuICAgICAgfVxuICAgICAgaGVhZGVyY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIH1cbiAgICAgIC5sb2dvIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgfVxuICAgICAgLmxvZ28gaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgfVxuICAgICAgLmxlZnQge1xuICAgICAgICBmbGV4OjE7XG4gICAgICB9XG4gICAgICAucmlnaHQge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHggOHB4IDRweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgY29sb3I6ICMwM0E5RjQ7XG4gICAgICB9XG4gICAgICAubmF2IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICB9XG4gICAgICAgIGEubG9naW4ge1xuICAgICAgICAgIHBhZGRpbmc6IDI0cHggMTBweCAyM3B4O1xuICAgICAgICB9XG4gICAgICAgIC5uYXYge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2hlYWRlcj5cbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2hlYWRlci5qcyIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9ICgpID0+IE5Qcm9ncmVzcy5pbmMoMC43KTtcblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKCk7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgPGxpbmtcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvXCJcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAvPlxuICAgICAgPGxpbmtcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIlxuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgIC8+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgaHJlZj1cIi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NlbWFudGljLXVpLzIuMi4yL3NlbWFudGljLm1pbi5jc3NcIlxuICAgICAgLz5cblxuICAgIDwvSGVhZD5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgYm9keSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLCBzYW5zLXNlcmlmOyAgICAgICAgICBcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIH1cbiAgICAgICoge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG4gICAgICAvKiBsb2FkaW5nIHByb2dyZXNzIGJhciBzdHlsZXMgKi9cbiAgICAgICNucHJvZ3Jlc3Mge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIH1cbiAgICAgICNucHJvZ3Jlc3MgLmJhciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMjg4RDE7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogMTAzMTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICB9XG4gICAgICAjbnByb2dyZXNzIC5wZWcge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2ZmZiwgMCAwIDVweCAjZmZmO1xuICAgICAgICBvcGFjaXR5OiAxLjA7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tZXRhLmpzIiwiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCBNZXRhIGZyb20gXCIuL21ldGFcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICA8TWV0YSAvPlxuICAgIDxIZWFkZXIgLz5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLm1haW4ge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDAgMCAwIDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjg7XG4gICAgICB9XG4gICAgICAucGFnZSB7XG4gICAgICAgIGNvbG9yOiAjMjEyMTIxO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmY4O1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgcGFkZGluZzogM3JlbSAwIDAgMDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgICAgICAubWFpbiB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9wYWdlLmpzIiwiZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utd2lkdGhcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnBhZ2Utd2lkdGgge1xuICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgLm1haW4ge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvcGFnZVdpZHRoLmpzIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgcHJvcHMgPT4gKFxuICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBcInRvcGljc1wiLCBxdWVyeTogeyBkb21haW5zOiBwcm9wcy50b3BpYyB9IH19PlxuICAgIDxTZWdtZW50U3R5bGU+XG4gICAgICB7cHJvcHMudG9waWN9XG4gICAgPC9TZWdtZW50U3R5bGU+XG4gIDwvTGluaz5cbik7XG5cbmNvbnN0IFNlZ21lbnRTdHlsZSA9IHN0eWxlZC5kaXZgXG4gICAgY29sb3I6IGdyZWVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiAxODBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbjtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbjtcbiAgICB9XG5cbmA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3N0eWxlL3NlZ21lbnQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IFNlZ21lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvc3R5bGUvc2VnbWVudFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi4vYWN0aW9uc1wiO1xuXG5jbGFzcyBUb3BpY3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLmZldGNoRG9tYWlucygpO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5kb21haW5zKTtcbiAgICBjb25zdCB7IGRvbWFpbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxIZWFkZXI+VE9QSUNTPC9IZWFkZXI+XG4gICAgICAgIDxDb250YWluZXJTZWdtZW50PlxuICAgICAgICAgIHtkb21haW5zLm1hcCh0b3BpYyA9PiA8U2VnbWVudCB7Li4udG9waWN9IC8+KX1cbiAgICAgICAgPC9Db250YWluZXJTZWdtZW50PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICBkb21haW5zOiBzdGF0ZS5kb21haW5zXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBhY3Rpb25zKShUb3BpY3MpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xuYDtcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmgyYFxuXG5gO1xuXG5jb25zdCBDb250YWluZXJTZWdtZW50ID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbmA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3RvcGljcy5qcyIsImltcG9ydCB7IEZFVENIX0NBVEVHT1JZLCBBRERfQ0FURUdPUlkgfSBmcm9tIFwiLi4vYWN0aW9ucy90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGF0ZSA9IFtdLCBhY3Rpb24pIHtcbiAgY29uc3QgeyB0eXBlLCB0ZXh0LCB0b2RvIH0gPSBhY3Rpb247XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBGRVRDSF9DQVRFR09SWTpcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgICBjYXNlIEFERF9DQVRFR09SWTpcbiAgICAgIHJldHVybiBbLi4uc3RhdGUsIGFjdGlvbi5wYXlsb2FkXTtcbiAgICAvLyBjYXNlIFJFTU9WRV9ET01BSU46XG4gICAgLy8gICByZXR1cm4gc3RhdGUuZmlsdGVyKGkgPT4gaSAhPT0gdG9kbyk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvY2F0ZWdvcmllcy5qcyIsImltcG9ydCB7IEZFVENIX0RPTUFJTiwgQUREX0RPTUFJTiB9IGZyb20gXCIuLi9hY3Rpb25zL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0YXRlID0gW10sIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBGRVRDSF9ET01BSU46XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gICAgY2FzZSBBRERfRE9NQUlOOlxuICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgYWN0aW9uLnBheWxvYWRdO1xuICAgIC8vIGNhc2UgUkVNT1ZFX0RPTUFJTjpcbiAgICAvLyAgIHJldHVybiBzdGF0ZS5maWx0ZXIoaSA9PiBpICE9PSB0b2RvKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9kb21haW5zLmpzIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5cbmltcG9ydCBkb21haW5zIGZyb20gXCIuL2RvbWFpbnNcIjtcbmltcG9ydCBjYXRlZ29yaWVzIGZyb20gXCIuL2NhdGVnb3JpZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHsgZG9tYWlucywgY2F0ZWdvcmllcyB9KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL2luZGV4LmpzIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbXBvc2UsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xuXG5jb25zdCBpc0NsaWVudCA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCI7XG5cbmNvbnN0IGVuaGFuY2VycyA9IGNvbXBvc2UoXG4gIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiXG4gICAgPyB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24gJiYgd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uKClcbiAgICA6IGYgPT4gZlxuKTtcblxuY29uc3QgY3JlYXRlU3RvcmVXaXRoTWlkZGxld2FyZSA9IGFwcGx5TWlkZGxld2FyZSh0aHVuaykoY3JlYXRlU3RvcmUpO1xuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsU3RhdGUgPT5cbiAgY3JlYXRlU3RvcmVXaXRoTWlkZGxld2FyZShyb290UmVkdWNlciwgaW5pdGlhbFN0YXRlLCBlbmhhbmNlcnMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbHMvc3RvcmUuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBSUE7QUFKQTtBQUFBOzs7OztBQVZBO0FBQ0E7Ozs7QUFnQkE7QUFDQTtBQVFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBV0E7QUFpQkE7QUFvQkE7QUFvQkE7QUFDQTs7Ozs7QUFoRkE7QUFDQTtBQUtBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUdBO0FBQUE7QUFEQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUdBO0FBQUE7QUFEQTtBQUxBO0FBVUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBOztBQUdBO0FBRkE7QUFFQTtBQUpBO0FBTUE7QUFQQTtBQVNBOztBQUdBO0FBQUE7QUFEQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7O0FBR0E7QUFGQTtBQUVBO0FBSkE7QUFNQTtBQVBBO0FBU0E7O0FBR0E7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTs7QUFHQTtBQUZBO0FBRUE7QUFKQTtBQU1BO0FBUEE7QUFTQTs7QUFHQTtBQUFBO0FBREE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0ZBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBSUE7O0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVhBO0FBQUE7QUFBQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7O0FBR0E7QUFBQTtBQUZBOztBQUFBO0FBSUE7QUFKQTtBQUNBO0FBS0E7QUFBQTtBQUZBOztBQUFBO0FBSUE7QUFKQTtBQUNBO0FBS0E7QUFBQTtBQUZBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBYkE7QUFBQTtBQUFBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBOzs7QUFFQTtBQUNBOzs7Ozs7O0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBRUE7QUFGQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBSkE7QUFBQTtBQUFBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7Ozs7OztBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUZBO0FBQ0E7QUFPQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7Ozs7OztBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7OztBQWZBO0FBQ0E7QUFpQkE7O0FBRUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFiQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQVhBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7O0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        