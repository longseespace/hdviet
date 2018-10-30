'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.loginAnonymously = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _loginAnonymously = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    var _ref2, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _axios2.default.post(AUTH_API_URL);

          case 2:
            _ref2 = _context.sent;
            data = _ref2.data;

            if (!data.error) {
              _context.next = 6;
              break;
            }

            throw new Error(data.error);

          case 6:
            return _context.abrupt('return', (0, _helper.newModelFromJson)(data.data));

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function _loginAnonymously() {
    return _ref.apply(this, arguments);
  };
}();

var _login = function () {
  var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(email, password, key, captcha) {
    var _ref4, data;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _axios2.default.post(AUTH_API_URL, _querystring2.default.stringify({
              email: email,
              password: password,
              key: key,
              captcha: captcha
            }), {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            });

          case 2:
            _ref4 = _context2.sent;
            data = _ref4.data;

            if (!data.error) {
              _context2.next = 6;
              break;
            }

            throw new Error(data.error);

          case 6:
            return _context2.abrupt('return', (0, _helper.newModelFromJson)(data.data));

          case 7:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function _login(_x, _x2, _x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var _map = require('lodash/fp/map');

var _map2 = _interopRequireDefault(_map);

var _helper = require('./helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var map = _map2.default.convert({ cap: false });


var API_URL = 'http://rest.hdviet.com/api/v3/';
var AUTH_API_URL = 'https://id.hdviet.com/authentication/login';

exports.loginAnonymously = _loginAnonymously;
exports.login = _login;

var HDViet = function () {
  function HDViet() {
    _classCallCheck(this, HDViet);

    this.accessToken = '';
    this.api = _axios2.default.create({
      'baseURL': API_URL,
      'timeout': 30000 });
  }

  _createClass(HDViet, [{
    key: 'loginAnonymously',
    value: function () {
      var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
        var user;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _loginAnonymously();

              case 2:
                user = _context3.sent;

                this.accessToken = user.accessToken;
                this.api.defaults.headers.common.Authorization = this.accessToken;
                return _context3.abrupt('return', user);

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function loginAnonymously() {
        return _ref5.apply(this, arguments);
      }

      return loginAnonymously;
    }()
  }, {
    key: 'login',
    value: function () {
      var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(email, password, key, captcha) {
        var user;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _login(email, password, key, captcha);

              case 2:
                user = _context4.sent;

                this.accessToken = user.accessToken;
                this.api.defaults.headers.common.Authorization = this.accessToken;
                return _context4.abrupt('return', user);

              case 6:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function login(_x5, _x6, _x7, _x8) {
        return _ref6.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: 'getMovies',
    value: function () {
      var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(params) {
        var _ref8, data;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.api.get('movie/filter', { params: params });

              case 2:
                _ref8 = _context5.sent;
                data = _ref8.data;
                return _context5.abrupt('return', {
                  pager: (0, _helper.newModelFromJson)(data.data.metadata),
                  movies: map(_helper.newModelFromJson, data.data.lists)
                });

              case 5:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getMovies(_x9) {
        return _ref7.apply(this, arguments);
      }

      return getMovies;
    }()
  }, {
    key: 'getPlaylist',
    value: function () {
      var _ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(movieId) {
        var _ref10, data;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.api.get('playlist/' + movieId, {
                  params: { w: 1920 }
                });

              case 2:
                _ref10 = _context6.sent;
                data = _ref10.data;
                return _context6.abrupt('return', {
                  url: data.data.playList,
                  subtitles: map(_helper.newModelFromJson, data.data.subtitle)
                });

              case 5:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getPlaylist(_x10) {
        return _ref9.apply(this, arguments);
      }

      return getPlaylist;
    }()
  }]);

  return HDViet;
}();

exports.default = HDViet;