"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

var _nprogress = require("nprogress");

var _nprogress2 = _interopRequireDefault(_nprogress);

var _index = require("next/dist/lib/router/index.js");

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