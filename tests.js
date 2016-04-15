'use strict';
var test = require('tape');

var isInList = require('./');

test('it can find an item.', function (t) {
  const item = 'bar';
  const list = ['foo', 'bar', 'baz'];

  t.ok(isInList(list, item), 'should find item.');

  t.end();
});
