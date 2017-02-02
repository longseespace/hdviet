'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newModelFromJson = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _camelCase = require('lodash/camelCase');

var _camelCase2 = _interopRequireDefault(_camelCase);

var _flow = require('lodash/fp/flow');

var _flow2 = _interopRequireDefault(_flow);

var _reduce = require('lodash/fp/reduce');

var _reduce2 = _interopRequireDefault(_reduce);

var _map = require('lodash/fp/map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var map = _map2.default.convert({ cap: false });

var newModelFromJson = exports.newModelFromJson = (0, _flow2.default)(map(function (value, key) {
  return { key: (0, _camelCase2.default)(key), value: value };
}), (0, _reduce2.default)(function (accumulator, _ref) {
  var key = _ref.key,
      value = _ref.value;
  return _extends({}, accumulator, _defineProperty({}, key, value));
}, {}));