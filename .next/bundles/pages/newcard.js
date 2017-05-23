
          window.__NEXT_REGISTER_PAGE('/newcard', function() {
            var comp = module.exports =
webpackJsonp([7],{

/***/ 1067:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(839);


/***/ }),

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

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var _semanticUiReact = __webpack_require__(666);

var _styledComponents = __webpack_require__(565);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mas/Documents/projects/memorize/client/components/newCard/topicModal.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mas/Documents/projects/memorize/client/components/newCard/topicModal.js"); } } })();

/***/ }),

/***/ 839:
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

var _reactMarkdown = __webpack_require__(987);

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

var _semanticUiReact = __webpack_require__(666);

var _store = __webpack_require__(609);

var _store2 = _interopRequireDefault(_store);

var _nextReduxWrapper = __webpack_require__(596);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _actions = __webpack_require__(599);

var actions = _interopRequireWildcard(_actions);

var _domainSelect = __webpack_require__(986);

var _domainSelect2 = _interopRequireDefault(_domainSelect);

var _categorySelect = __webpack_require__(985);

var _categorySelect2 = _interopRequireDefault(_categorySelect);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/mas/Documents/projects/memorize/client/pages/newcard.js?entry";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n    margin: 2rem auto;\n"], ["\n    margin: 2rem auto;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n"], ["\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  margin: 1rem 0;\n  padding: 0.5rem 1rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n"], ["\n  margin: 1rem 0;\n  padding: 0.5rem 1rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n  display: flex;\n  justify-content: space-between;\n  max-width: 400px;\n  margin: 2rem 0;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  max-width: 400px;\n  margin: 2rem 0;\n"]),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(["\n  width: 305px;\n"], ["\n  width: 305px;\n"]),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(["\n  max-width: 200px;\n"], ["\n  max-width: 200px;\n"]),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(["\n  font-size: 1.2rem;\n  font-weight: bold;\n"], ["\n  font-size: 1.2rem;\n  font-weight: bold;\n"]),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(["\n    display: flex;\n"], ["\n    display: flex;\n"]),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(["\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    background-color: #fff;\n    height: 500px;\n    width: 450px;\n    max-width: 450px;\n    margin-right: 4rem;\n"], ["\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    background-color: #fff;\n    height: 500px;\n    width: 450px;\n    max-width: 450px;\n    margin-right: 4rem;\n"]),
    _templateObject10 = (0, _taggedTemplateLiteral3.default)(["\n    border: 1px solid #ccc;\n"], ["\n    border: 1px solid #ccc;\n"]);

var buildDropdownObject = function buildDropdownObject(domains) {
  return domains.map(function (domain) {
    return { text: domain.topic, value: domain._id, key: domain._id };
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
      selectedDomain: "",
      selectedCategory: "",
      cardTopic: "",
      cardDescription: " "
    }, _this.componentDidMount = function () {
      _this.props.fetchDomains();
    }, _this.handleDomainSelect = function (e, obj) {
      console.log(obj);
      _this.setState({ selectedDomain: obj.value });
      _this.props.fetchDomainsCategories(obj.value);
    }, _this.handleCategorySelect = function (e, obj) {
      console.log(obj.value);
      _this.setState({ selectedCategory: obj.value });
    }, _this.addNewDomain = function (topic, description) {
      _this.props.addNewDomain(topic, description);
    }, _this.addNewCategory = function (topic, description, domainId) {
      _this.props.addNewCategory(topic, description, domainId);
    }, _this.addNewCard = function () {
      var _this$state = _this.state,
          selectedCategory = _this$state.selectedCategory,
          cardTopic = _this$state.cardTopic,
          cardDescription = _this$state.cardDescription;

      _this.props.addNewCard(cardTopic, cardDescription, selectedCategory);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(NewCard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          domains = _props.domains,
          categories = _props.categories;

      return _react2.default.createElement(_page2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_pageWidth2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(NewCardTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, "Add New Card"), _react2.default.createElement(ContainerTopicSelection, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement(_domainSelect2.default, {
        handleDomainSelect: this.handleDomainSelect,
        array: buildDropdownObject(domains),
        addNewDomain: this.addNewDomain,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }), _react2.default.createElement(_categorySelect2.default, {
        domain: this.state.selectedDomain,
        handleCategorySelect: this.handleCategorySelect,
        array: buildDropdownObject(categories),
        addNewCategory: this.addNewCategory,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), _react2.default.createElement(DefineTopic, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(Text, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "Topic:"), _react2.default.createElement(TopicInput, {
        onChange: function onChange(e) {
          return _this2.setState({ cardTopic: e.target.value });
        },
        value: this.state.cardTopic,
        placeholder: "Define...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }))), _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, "Explanation:"), _react2.default.createElement(ContainerCardInput, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement(FormContainer, {
        onChange: function onChange(e) {
          return _this2.setState({ cardDescription: e.target.value });
        },
        value: this.state.cardDescription,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), _react2.default.createElement(_reactMarkdown2.default, { source: this.state.cardDescription, __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      })), _react2.default.createElement(_semanticUiReact.Button, { onClick: this.addNewCard, color: "green", __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, "Save"))));
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

var TopicInput = (0, _styledComponents2.default)(_semanticUiReact.Input)(_templateObject5);

var StyledDropdown = (0, _styledComponents2.default)(_semanticUiReact.Dropdown)(_templateObject6);

var Text = _styledComponents2.default.p(_templateObject7);

var ContainerCardInput = _styledComponents2.default.div(_templateObject8);

var FormContainer = _styledComponents2.default.textarea(_templateObject9);

var StyledMarkdown = (0, _styledComponents2.default)(_reactMarkdown2.default)(_templateObject10);

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

/***/ 985:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var _topicModal = __webpack_require__(751);

var _topicModal2 = _interopRequireDefault(_topicModal);

var _semanticUiReact = __webpack_require__(666);

var _styledComponents = __webpack_require__(565);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mas/Documents/projects/memorize/client/components/newCard/categorySelect.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mas/Documents/projects/memorize/client/components/newCard/categorySelect.js"); } } })();

/***/ }),

/***/ 986:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var _topicModal = __webpack_require__(751);

var _topicModal2 = _interopRequireDefault(_topicModal);

var _semanticUiReact = __webpack_require__(666);

var _styledComponents = __webpack_require__(565);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/mas/Documents/projects/memorize/client/components/newCard/domainSelect.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/mas/Documents/projects/memorize/client/components/newCard/domainSelect.js"); } } })();

/***/ })

},[1067]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9uZXdjYXJkLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy90eXBlcy5qcz8yYTY4NDMyIiwid2VicGFjazovLy8uL2FjdGlvbnMvaW5kZXguanM/MmE2ODQzMiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci5qcz8yYTY4NDMyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWV0YS5qcz8yYTY4NDMyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZS5qcz8yYTY4NDMyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZVdpZHRoLmpzPzJhNjg0MzIiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvY2F0ZWdvcmllcy5qcz8yYTY4NDMyIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2RvbWFpbnMuanM/MmE2ODQzMiIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcz8yYTY4NDMyIiwid2VicGFjazovLy8uL3V0aWxzL3N0b3JlLmpzPzJhNjg0MzIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uZXdDYXJkL3RvcGljTW9kYWwuanM/MmE2ODQzMiIsIndlYnBhY2s6Ly8vLi9wYWdlcy9uZXdjYXJkLmpzPzJhNjg0MzIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uZXdDYXJkL2NhdGVnb3J5U2VsZWN0LmpzPzJhNjg0MzIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uZXdDYXJkL2RvbWFpblNlbGVjdC5qcz8yYTY4NDMyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBGRVRDSF9ET01BSU4gPSBcImZldGNoX2RvbWFpblwiO1xuZXhwb3J0IGNvbnN0IEZFVENIX0NBVEVHT1JZID0gXCJmZXRjaF9jYXRlZ29yeVwiO1xuZXhwb3J0IGNvbnN0IEZFVENIX0NBUkQgPSBcImZldGNoX2NhcmRcIjtcbmV4cG9ydCBjb25zdCBBRERfRE9NQUlOID0gXCJhZGRfZG9tYWluXCI7XG5leHBvcnQgY29uc3QgQUREX0NBVEVHT1JZID0gXCJhZGRfY2F0ZWdvcnlcIjtcbmV4cG9ydCBjb25zdCBBRERfQ0FSRCA9IFwiYWRkX2NhcmRcIjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FjdGlvbnMvdHlwZXMuanMiLCJpbXBvcnQgXCJpc29tb3JwaGljLWZldGNoXCI7XG5pbXBvcnQge1xuICBGRVRDSF9ET01BSU4sXG4gIEZFVENIX0NBVEVHT1JZLFxuICBBRERfRE9NQUlOLFxuICBBRERfQ0FURUdPUlksXG4gIEFERF9DQVJEXG59IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IFVSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDkwL2FwaVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hEb21haW5zKCkge1xuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbiAgICBmZXRjaChgJHtVUkx9L2RvbWFpbnNgKS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGpzb24gPT5cbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogRkVUQ0hfRE9NQUlOLFxuICAgICAgICBwYXlsb2FkOiBqc29uLmRvbWFpbnNcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoRG9tYWluc0NhdGVnb3JpZXMoZG9tYWluSWQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG4gICAgZmV0Y2goYCR7VVJMfS9kb21haW5zLyR7ZG9tYWluSWR9YClcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogRkVUQ0hfQ0FURUdPUlksXG4gICAgICAgICAgcGF5bG9hZDoganNvbi5jYXRlZ29yaWVzXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdEb21haW4odG9waWMsIGRlc2NyaXB0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIGZldGNoKGAke1VSTH0vZG9tYWluYCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRvcGljLCBkZXNjcmlwdGlvbiB9KVxuICAgIH0pXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhqc29uKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IEFERF9ET01BSU4sXG4gICAgICAgICAgcGF5bG9hZDoganNvbi5kb21haW5cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld0NhdGVnb3J5KHRvcGljLCBkZXNjcmlwdGlvbiwgZG9tYWluSWQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG4gICAgZmV0Y2goYCR7VVJMfS9jYXRlZ29yeWAsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0b3BpYywgZGVzY3JpcHRpb24sIGRvbWFpbklkIH0pXG4gICAgfSlcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogQUREX0NBVEVHT1JZLFxuICAgICAgICAgIHBheWxvYWQ6IGpzb24uY2F0ZWdvcmllXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdDYXJkKHRvcGljLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnlJZCkge1xuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbiAgICBmZXRjaChgJHtVUkx9L2NhcmRgLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdG9waWMsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeUlkIH0pXG4gICAgfSlcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogQUREX0NBUkQsXG4gICAgICAgICAgcGF5bG9hZDoganNvbi5uZXdDYXJkXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hY3Rpb25zL2luZGV4LmpzIiwiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxoZWFkZXI+XG4gICAgPGhlYWRlcmNvbnRlbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cbiAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ29cIj5tZW1vcml6ZTwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxuICAgICAgICA8TGluayBocmVmPVwiL25ld2NhcmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgICAgICAgQWRkIG5ldyBDYXJkXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyY29udGVudD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoZWFkZXIge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI5YWY2YTsgIFxuICAgICAgICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsICdzYW5zLXNlcmlmJzsgIFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHdpZHRoOiAxMDAlOyAgICAgXG4gICAgICAgIGhlaWdodDogNHJlbTtcbiAgICAgICAgcGFkZGluZzogMS4ycmVtIDA7XG4gICAgICAgIHotaW5kZXg6IDEwMDAwO1xuICAgICAgfVxuICAgICAgaGVhZGVyY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIH1cbiAgICAgIC5sb2dvIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgfVxuICAgICAgLmxvZ28gaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgfVxuICAgICAgLmxlZnQge1xuICAgICAgICBmbGV4OjE7XG4gICAgICB9XG4gICAgICAucmlnaHQge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHggOHB4IDRweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgY29sb3I6ICMwM0E5RjQ7XG4gICAgICB9XG4gICAgICAubmF2IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICB9XG4gICAgICAgIGEubG9naW4ge1xuICAgICAgICAgIHBhZGRpbmc6IDI0cHggMTBweCAyM3B4O1xuICAgICAgICB9XG4gICAgICAgIC5uYXYge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2hlYWRlcj5cbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2hlYWRlci5qcyIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9ICgpID0+IE5Qcm9ncmVzcy5pbmMoMC43KTtcblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKCk7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgPGxpbmtcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvXCJcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAvPlxuICAgICAgPGxpbmtcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIlxuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgIC8+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgaHJlZj1cIi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NlbWFudGljLXVpLzIuMi4yL3NlbWFudGljLm1pbi5jc3NcIlxuICAgICAgLz5cblxuICAgIDwvSGVhZD5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgYm9keSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLCBzYW5zLXNlcmlmOyAgICAgICAgICBcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIH1cbiAgICAgICoge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG4gICAgICAvKiBsb2FkaW5nIHByb2dyZXNzIGJhciBzdHlsZXMgKi9cbiAgICAgICNucHJvZ3Jlc3Mge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIH1cbiAgICAgICNucHJvZ3Jlc3MgLmJhciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMjg4RDE7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogMTAzMTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICB9XG4gICAgICAjbnByb2dyZXNzIC5wZWcge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2ZmZiwgMCAwIDVweCAjZmZmO1xuICAgICAgICBvcGFjaXR5OiAxLjA7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tZXRhLmpzIiwiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCBNZXRhIGZyb20gXCIuL21ldGFcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICA8TWV0YSAvPlxuICAgIDxIZWFkZXIgLz5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLm1haW4ge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDAgMCAwIDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjg7XG4gICAgICB9XG4gICAgICAucGFnZSB7XG4gICAgICAgIGNvbG9yOiAjMjEyMTIxO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmY4O1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgcGFkZGluZzogM3JlbSAwIDAgMDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgICAgICAubWFpbiB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9wYWdlLmpzIiwiZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utd2lkdGhcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnBhZ2Utd2lkdGgge1xuICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgLm1haW4ge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvcGFnZVdpZHRoLmpzIiwiaW1wb3J0IHsgRkVUQ0hfQ0FURUdPUlksIEFERF9DQVRFR09SWSB9IGZyb20gXCIuLi9hY3Rpb25zL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0YXRlID0gW10sIGFjdGlvbikge1xuICBjb25zdCB7IHR5cGUsIHRleHQsIHRvZG8gfSA9IGFjdGlvbjtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEZFVENIX0NBVEVHT1JZOlxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuICAgIGNhc2UgQUREX0NBVEVHT1JZOlxuICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgYWN0aW9uLnBheWxvYWRdO1xuICAgIC8vIGNhc2UgUkVNT1ZFX0RPTUFJTjpcbiAgICAvLyAgIHJldHVybiBzdGF0ZS5maWx0ZXIoaSA9PiBpICE9PSB0b2RvKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9jYXRlZ29yaWVzLmpzIiwiaW1wb3J0IHsgRkVUQ0hfRE9NQUlOLCBBRERfRE9NQUlOIH0gZnJvbSBcIi4uL2FjdGlvbnMvdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RhdGUgPSBbXSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEZFVENIX0RPTUFJTjpcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgICBjYXNlIEFERF9ET01BSU46XG4gICAgICByZXR1cm4gWy4uLnN0YXRlLCBhY3Rpb24ucGF5bG9hZF07XG4gICAgLy8gY2FzZSBSRU1PVkVfRE9NQUlOOlxuICAgIC8vICAgcmV0dXJuIHN0YXRlLmZpbHRlcihpID0+IGkgIT09IHRvZG8pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL2RvbWFpbnMuanMiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcblxuaW1wb3J0IGRvbWFpbnMgZnJvbSBcIi4vZG9tYWluc1wiO1xuaW1wb3J0IGNhdGVnb3JpZXMgZnJvbSBcIi4vY2F0ZWdvcmllc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoeyBkb21haW5zLCBjYXRlZ29yaWVzIH0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvaW5kZXguanMiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tcG9zZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4uL3JlZHVjZXJzXCI7XG5cbmNvbnN0IGlzQ2xpZW50ID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIjtcblxuY29uc3QgZW5oYW5jZXJzID0gY29tcG9zZShcbiAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCJcbiAgICA/IHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbiAmJiB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24oKVxuICAgIDogZiA9PiBmXG4pO1xuXG5jb25zdCBjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlID0gYXBwbHlNaWRkbGV3YXJlKHRodW5rKShjcmVhdGVTdG9yZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxTdGF0ZSA9PlxuICBjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlKHJvb3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGVuaGFuY2Vycyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy9zdG9yZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgSGVhZGVyLCBJbnB1dCwgVGV4dEFyZWEsIE1vZGFsIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jbGFzcyBUb3BpY01vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgdG9waWM6IFwiXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCJcbiAgfTtcbiAgaGFuZGxlU2F2ZSA9ICh0b3BpYywgZGVzY3JpcHRpb24sIGRvbWFpbikgPT4ge1xuICAgIHRoaXMucHJvcHMuYWRkTmV3KHRvcGljLCBkZXNjcmlwdGlvbiwgZG9tYWluKTtcbiAgICB0aGlzLnByb3BzLmNsb3NlTW9kYWwoKTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdG9waWMsIGRlc2NyaXB0aW9uIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZG9tYWluLCBhZGROZXcsIHR5cGUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRNb2RhbENvbnRlbnQ+XG4gICAgICAgIDxNb2RhbC5IZWFkZXI+XG4gICAgICAgICAgQWRkIHt0eXBlfVxuICAgICAgICA8L01vZGFsLkhlYWRlcj5cbiAgICAgICAgPFN0eWxlZE1vZGFsRGVzY3JpcHRpb24+XG4gICAgICAgICAgPEhlYWRlcj5Ub3BpYzo8L0hlYWRlcj5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyB0b3BpYzogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICB2YWx1ZT17dG9waWN9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCB0aGUgVG9waWMuLi5cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEhlYWRlcj5EZXNjcmlwdGlvbjo8L0hlYWRlcj5cbiAgICAgICAgICA8U3R5bGVkVGV4dGFyZWFcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBkZXNjcmlwdGlvbjogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TdHlsZWRNb2RhbERlc2NyaXB0aW9uPlxuICAgICAgICA8U3R5bGVkQnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVTYXZlKHRvcGljLCBkZXNjcmlwdGlvbiwgZG9tYWluKX1cbiAgICAgICAgICBjb2xvcj1cImdyZWVuXCJcbiAgICAgICAgPlxuICAgICAgICAgIFNhdmVcbiAgICAgICAgPC9TdHlsZWRCdXR0b24+XG4gICAgICA8L1N0eWxlZE1vZGFsQ29udGVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvcGljTW9kYWw7XG5cbmNvbnN0IFN0eWxlZE1vZGFsQ29udGVudCA9IHN0eWxlZChNb2RhbC5Db250ZW50KWBcbiAgcGFkZGluZzogMnJlbTtcbmA7XG5cbmNvbnN0IFN0eWxlZE1vZGFsRGVzY3JpcHRpb24gPSBzdHlsZWQoTW9kYWwuRGVzY3JpcHRpb24pYFxuICBtYXJnaW46IDFyZW0gMDtcbmA7XG5cbmNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxuICBtYXJnaW46IDFyZW0gMCAwIDAgO1xuYDtcblxuY29uc3QgU3R5bGVkVGV4dGFyZWEgPSBzdHlsZWQoVGV4dEFyZWEpYFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiAuMjg1NzE0MjlyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMzQsMzYsMzgsLjE1KTtcbiAgcGFkZGluZzogMC4ycmVtO1xuYDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbmV3Q2FyZC90b3BpY01vZGFsLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvcGFnZVwiO1xuaW1wb3J0IFBhZ2VXaWR0aCBmcm9tIFwiLi4vY29tcG9uZW50cy9wYWdlV2lkdGhcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgTWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgeyBCdXR0b24sIElucHV0LCBEcm9wZG93biwgTW9kYWwgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBpbml0U3RvcmUgZnJvbSBcIi4uL3V0aWxzL3N0b3JlXCI7XG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uL2FjdGlvbnNcIjtcblxuaW1wb3J0IERvbWFpblNlbGVjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9uZXdDYXJkL2RvbWFpblNlbGVjdFwiO1xuaW1wb3J0IENhdGVnb3J5U2VsZWN0IGZyb20gXCIuLi9jb21wb25lbnRzL25ld0NhcmQvY2F0ZWdvcnlTZWxlY3RcIjtcblxuY29uc3QgYnVpbGREcm9wZG93bk9iamVjdCA9IGZ1bmN0aW9uKGRvbWFpbnMpIHtcbiAgcmV0dXJuIGRvbWFpbnMubWFwKGRvbWFpbiA9PiB7XG4gICAgcmV0dXJuIHsgdGV4dDogZG9tYWluLnRvcGljLCB2YWx1ZTogZG9tYWluLl9pZCwga2V5OiBkb21haW4uX2lkIH07XG4gIH0pO1xufTtcblxuY2xhc3MgTmV3Q2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHNlbGVjdGVkRG9tYWluOiBcIlwiLFxuICAgIHNlbGVjdGVkQ2F0ZWdvcnk6IFwiXCIsXG4gICAgY2FyZFRvcGljOiBcIlwiLFxuICAgIGNhcmREZXNjcmlwdGlvbjogXCIgXCJcbiAgfTtcbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5mZXRjaERvbWFpbnMoKTtcbiAgfTtcbiAgaGFuZGxlRG9tYWluU2VsZWN0ID0gKGUsIG9iaikgPT4ge1xuICAgIGNvbnNvbGUubG9nKG9iaik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkRG9tYWluOiBvYmoudmFsdWUgfSk7XG4gICAgdGhpcy5wcm9wcy5mZXRjaERvbWFpbnNDYXRlZ29yaWVzKG9iai52YWx1ZSk7XG4gIH07XG4gIGhhbmRsZUNhdGVnb3J5U2VsZWN0ID0gKGUsIG9iaikgPT4ge1xuICAgIGNvbnNvbGUubG9nKG9iai52YWx1ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkQ2F0ZWdvcnk6IG9iai52YWx1ZSB9KTtcbiAgfTtcbiAgYWRkTmV3RG9tYWluID0gKHRvcGljLCBkZXNjcmlwdGlvbikgPT4ge1xuICAgIHRoaXMucHJvcHMuYWRkTmV3RG9tYWluKHRvcGljLCBkZXNjcmlwdGlvbik7XG4gIH07XG4gIGFkZE5ld0NhdGVnb3J5ID0gKHRvcGljLCBkZXNjcmlwdGlvbiwgZG9tYWluSWQpID0+IHtcbiAgICB0aGlzLnByb3BzLmFkZE5ld0NhdGVnb3J5KHRvcGljLCBkZXNjcmlwdGlvbiwgZG9tYWluSWQpO1xuICB9O1xuICBhZGROZXdDYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRDYXRlZ29yeSwgY2FyZFRvcGljLCBjYXJkRGVzY3JpcHRpb24gfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5wcm9wcy5hZGROZXdDYXJkKGNhcmRUb3BpYywgY2FyZERlc2NyaXB0aW9uLCBzZWxlY3RlZENhdGVnb3J5KTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZG9tYWlucywgY2F0ZWdvcmllcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2U+XG4gICAgICAgIDxQYWdlV2lkdGg+XG4gICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxOZXdDYXJkVGl0bGU+XG4gICAgICAgICAgICAgIEFkZCBOZXcgQ2FyZFxuICAgICAgICAgICAgPC9OZXdDYXJkVGl0bGU+XG4gICAgICAgICAgICA8Q29udGFpbmVyVG9waWNTZWxlY3Rpb24+XG5cbiAgICAgICAgICAgICAgPERvbWFpblNlbGVjdFxuICAgICAgICAgICAgICAgIGhhbmRsZURvbWFpblNlbGVjdD17dGhpcy5oYW5kbGVEb21haW5TZWxlY3R9XG4gICAgICAgICAgICAgICAgYXJyYXk9e2J1aWxkRHJvcGRvd25PYmplY3QoZG9tYWlucyl9XG4gICAgICAgICAgICAgICAgYWRkTmV3RG9tYWluPXt0aGlzLmFkZE5ld0RvbWFpbn1cbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICA8Q2F0ZWdvcnlTZWxlY3RcbiAgICAgICAgICAgICAgICBkb21haW49e3RoaXMuc3RhdGUuc2VsZWN0ZWREb21haW59XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2F0ZWdvcnlTZWxlY3Q9e3RoaXMuaGFuZGxlQ2F0ZWdvcnlTZWxlY3R9XG4gICAgICAgICAgICAgICAgYXJyYXk9e2J1aWxkRHJvcGRvd25PYmplY3QoY2F0ZWdvcmllcyl9XG4gICAgICAgICAgICAgICAgYWRkTmV3Q2F0ZWdvcnk9e3RoaXMuYWRkTmV3Q2F0ZWdvcnl9XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgPERlZmluZVRvcGljPlxuICAgICAgICAgICAgICAgIDxUZXh0PlRvcGljOjwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VG9waWNJbnB1dFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGNhcmRUb3BpYzogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jYXJkVG9waWN9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlZmluZS4uLlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9EZWZpbmVUb3BpYz5cblxuICAgICAgICAgICAgPC9Db250YWluZXJUb3BpY1NlbGVjdGlvbj5cblxuICAgICAgICAgICAgPGgyPkV4cGxhbmF0aW9uOjwvaDI+XG4gICAgICAgICAgICA8Q29udGFpbmVyQ2FyZElucHV0PlxuXG4gICAgICAgICAgICAgIDxGb3JtQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT5cbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXJkRGVzY3JpcHRpb246IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNhcmREZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPE1hcmtkb3duIHNvdXJjZT17dGhpcy5zdGF0ZS5jYXJkRGVzY3JpcHRpb259IC8+XG5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyQ2FyZElucHV0PlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZE5ld0NhcmR9IGNvbG9yPVwiZ3JlZW5cIj5TYXZlPC9CdXR0b24+XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvUGFnZVdpZHRoPlxuICAgICAgPC9QYWdlPlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb3BQcm9wcyhzdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIGRvbWFpbnM6IHN0YXRlLmRvbWFpbnMsXG4gICAgY2F0ZWdvcmllczogc3RhdGUuY2F0ZWdvcmllc1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoaW5pdFN0b3JlLCBtYXBTdGF0ZVRvcFByb3BzLCBhY3Rpb25zKShOZXdDYXJkKTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcbmA7XG5cbmNvbnN0IE5ld0NhcmRUaXRsZSA9IHN0eWxlZC5oMmBcbmA7XG5cbmNvbnN0IENvbnRhaW5lclRvcGljU2VsZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG5gO1xuXG5jb25zdCBEZWZpbmVUb3BpYyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAycmVtIDA7XG5gO1xuXG5jb25zdCBUb3BpY0lucHV0ID0gc3R5bGVkKElucHV0KWBcbiAgd2lkdGg6IDMwNXB4O1xuYDtcblxuY29uc3QgU3R5bGVkRHJvcGRvd24gPSBzdHlsZWQoRHJvcGRvd24pYFxuICBtYXgtd2lkdGg6IDIwMHB4O1xuYDtcblxuY29uc3QgVGV4dCA9IHN0eWxlZC5wYFxuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5gO1xuXG5jb25zdCBDb250YWluZXJDYXJkSW5wdXQgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBGb3JtQ29udGFpbmVyID0gc3R5bGVkLnRleHRhcmVhYFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICB3aWR0aDogNDUwcHg7XG4gICAgbWF4LXdpZHRoOiA0NTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDRyZW07XG5gO1xuXG5jb25zdCBTdHlsZWRNYXJrZG93biA9IHN0eWxlZChNYXJrZG93bilgXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbmA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9uZXdjYXJkLmpzP2VudHJ5IiwiaW1wb3J0IFRvcGljTW9kYWwgZnJvbSBcIi4vdG9waWNNb2RhbFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBNb2RhbCwgRHJvcGRvd24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3J5U2VsZWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgbW9kYWxPcGVuOiBmYWxzZVxuICB9O1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkb21haW4sIGFycmF5LCBhZGROZXdDYXRlZ29yeSwgaGFuZGxlQ2F0ZWdvcnlTZWxlY3QgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxUZXh0PkNhdGVnb3J5OjwvVGV4dD5cbiAgICAgICAgPFN0eWxlZERyb3Bkb3duXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgQ2F0ZWdvcnlcIlxuICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgc2VhcmNoXG4gICAgICAgICAgc2VsZWN0aW9uXG4gICAgICAgICAgZGlzYWJsZWQ9eyFkb21haW59XG4gICAgICAgICAgb3B0aW9ucz17YXJyYXl9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNhdGVnb3J5U2VsZWN0fVxuICAgICAgICAvPlxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUubW9kYWxPcGVufVxuICAgICAgICAgIHRyaWdnZXI9e1xuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgbW9kYWxPcGVuOiB0cnVlIH0pfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWRvbWFpbn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQWRkIENhdGVnb3J5XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICA8VG9waWNNb2RhbFxuICAgICAgICAgICAgZG9tYWluPXtkb21haW59XG4gICAgICAgICAgICB0eXBlPVwiQ2F0ZWdvcnlcIlxuICAgICAgICAgICAgYWRkTmV3PXthZGROZXdDYXRlZ29yeX1cbiAgICAgICAgICAgIGNsb3NlTW9kYWw9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBtb2RhbE9wZW46IGZhbHNlIH0pfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDJyZW0gMDtcbmA7XG5cbmNvbnN0IFRleHQgPSBzdHlsZWQucGBcbiAgcGFkZGluZy10b3A6IDAuNHJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuYDtcblxuY29uc3QgU3R5bGVkRHJvcGRvd24gPSBzdHlsZWQoRHJvcGRvd24pYFxuICBtYXgtd2lkdGg6IDE1MHB4O1xuYDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbmV3Q2FyZC9jYXRlZ29yeVNlbGVjdC5qcyIsImltcG9ydCBUb3BpY01vZGFsIGZyb20gXCIuL3RvcGljTW9kYWxcIjtcbmltcG9ydCB7IEJ1dHRvbiwgTW9kYWwsIERyb3Bkb3duIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb21haW5TZWxlY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBtb2RhbE9wZW46IGZhbHNlXG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFRleHQ+RG9tYWluOjwvVGV4dD5cbiAgICAgICAgPFN0eWxlZERyb3Bkb3duXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgRG9tYWluXCJcbiAgICAgICAgICBmbHVpZFxuICAgICAgICAgIHNlYXJjaFxuICAgICAgICAgIHNlbGVjdGlvblxuICAgICAgICAgIG9wdGlvbnM9e3RoaXMucHJvcHMuYXJyYXl9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlRG9tYWluU2VsZWN0fVxuICAgICAgICAvPlxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUubW9kYWxPcGVufVxuICAgICAgICAgIHRyaWdnZXI9e1xuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgbW9kYWxPcGVuOiB0cnVlIH0pfT5cbiAgICAgICAgICAgICAgQWRkIERvbWFpblxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAgPFRvcGljTW9kYWxcbiAgICAgICAgICAgIGFkZE5ldz17dGhpcy5wcm9wcy5hZGROZXdEb21haW59XG4gICAgICAgICAgICB0eXBlPVwiRG9tYWluXCJcbiAgICAgICAgICAgIGNsb3NlTW9kYWw9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBtb2RhbE9wZW46IGZhbHNlIH0pfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDJyZW0gMDtcbmA7XG5cbmNvbnN0IFRleHQgPSBzdHlsZWQucGBcbiAgcGFkZGluZy10b3A6IDAuNHJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuYDtcblxuY29uc3QgU3R5bGVkRHJvcGRvd24gPSBzdHlsZWQoRHJvcGRvd24pYFxuICBtYXgtd2lkdGg6IDE1MHB4O1xuYDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbmV3Q2FyZC9kb21haW5TZWxlY3QuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0tBO0FBV0E7QUFpQkE7QUFvQkE7QUFvQkE7QUFDQTs7Ozs7QUFoRkE7QUFDQTtBQUtBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUdBO0FBQUE7QUFEQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUdBO0FBQUE7QUFEQTtBQUxBO0FBVUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBOztBQUdBO0FBRkE7QUFFQTtBQUpBO0FBTUE7QUFQQTtBQVNBOztBQUdBO0FBQUE7QUFEQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7O0FBR0E7QUFGQTtBQUVBO0FBSkE7QUFNQTtBQVBBO0FBU0E7O0FBR0E7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTs7QUFHQTtBQUZBO0FBRUE7QUFKQTtBQU1BO0FBUEE7QUFTQTs7QUFHQTtBQUFBO0FBREE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0ZBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBSUE7O0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVhBO0FBQUE7QUFBQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7O0FBR0E7QUFBQTtBQUZBOztBQUFBO0FBSUE7QUFKQTtBQUNBO0FBS0E7QUFBQTtBQUZBOztBQUFBO0FBSUE7QUFKQTtBQUNBO0FBS0E7QUFBQTtBQUZBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBYkE7QUFBQTtBQUFBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBOzs7QUFFQTtBQUNBOzs7Ozs7O0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBRUE7QUFGQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBSkE7QUFBQTtBQUFBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFiQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQVhBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7O0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUFBO0FBREE7QUFJQTtBQUNBOzs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUFBOztBQUhBO0FBS0E7QUFMQTtBQUNBOztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7O0FBRkE7QUFLQTtBQUxBO0FBQ0E7QUFLQTtBQUFBO0FBQ0E7QUFBQTs7QUFGQTtBQUFBO0FBQUE7QUFDQTs7Ozs7QUEvQkE7QUFDQTtBQXdDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1REE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBQ0E7QUFLQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUVBO0FBRkE7QUFBQTtBQUdBO0FBQ0E7QUFDQTs7QUFIQTtBQU1BO0FBTkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBOztBQUpBO0FBT0E7QUFQQTtBQUNBOztBQU1BO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTs7QUFIQTtBQVNBO0FBVEE7QUFDQTs7QUFRQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUVBO0FBRkE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBOztBQUhBO0FBS0E7QUFMQTtBQUNBO0FBSUE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFLQTs7Ozs7QUFoRkE7QUFDQTtBQWtGQTs7QUFFQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFDQTtBQU1BO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUlBO0FBQ0E7QUFHQTtBQUNBO0FBU0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hLQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTs7QUFQQTtBQVNBO0FBVEE7QUFDQTtBQVVBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUZBO0FBQUE7QUFBQTtBQUNBOztBQUxBO0FBWUE7QUFaQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBOztBQUFBO0FBU0E7QUFUQTtBQUNBOzs7OztBQS9CQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBd0NBO0FBQ0E7QUFPQTtBQUNBO0FBS0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7O0FBTkE7QUFRQTtBQVJBO0FBQ0E7QUFTQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSkE7QUFTQTtBQVRBO0FBQ0E7QUFTQTtBQUVBO0FBQUE7QUFBQTtBQUhBOztBQUFBO0FBUUE7QUFSQTtBQUNBOzs7OztBQTFCQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBa0NBO0FBQ0E7QUFPQTtBQUNBO0FBS0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        