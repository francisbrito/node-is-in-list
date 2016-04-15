'use strict';
var test = require('tape');

var isInList = require('./');

test('it can find an item.', function (t) {
  var item = 'bar';
  var list = ['foo', 'bar', 'baz'];

  t.ok(isInList(list, item), 'should find item.');

  t.end();
});
