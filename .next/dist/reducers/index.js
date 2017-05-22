"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require("redux");

var _domains = require("./domains");

var _domains2 = _interopRequireDefault(_domains);

var _categories = require("./categories");

var _categories2 = _interopRequireDefault(_categories);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({ domains: _domains2.default, categories: _categories2.default });