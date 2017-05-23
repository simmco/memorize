"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _store = require("../utils/store");

var _store2 = _interopRequireDefault(_store);

var _nextReduxWrapper = require("next-redux-wrapper");

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _home = require("./home");

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _nextReduxWrapper2.default)(_store2.default)(_home2.default);