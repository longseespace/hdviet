'use strict';

var _helper = require('./helper');

describe('helper.js', function () {
  it('newModelFromJson() returns correct data', function () {
    var json = {
      'access_token': 'cedb22ee97fd4474941d68d401618ede',
      'user_id': '00000000000000000000000000000000',
      'last_login': 1486013599,
      'anonymous': true
    };
    var model = (0, _helper.newModelFromJson)(json);
    expect(model).toEqual({
      'accessToken': 'cedb22ee97fd4474941d68d401618ede',
      'userId': '00000000000000000000000000000000',
      'lastLogin': 1486013599,
      'anonymous': true
    });
  });
});