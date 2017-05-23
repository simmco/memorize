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

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _types = require("../actions/types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }