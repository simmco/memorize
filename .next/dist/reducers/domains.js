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

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _types = require("../actions/types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }