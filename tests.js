'use strict';
var test = require('tape');

var isInList = require('./');

test('it can find an item.', function (t) {
  var item = 'bar';
  var list = ['foo', 'bar', 'baz'];

  t.ok(isInList(list, item), 'should find item.');

  t.end();
});

test('it is curried.', function (t) {
  var primes = [2, 3, 5, 7, 11];
  var isInPrimeList = isInList(primes);

  t.ok(isInPrimeList.call, 'should return a function.');
  t.ok(isInPrimeList(2), 'should return `true` if item is in list.');
  t.notOk(isInPrimeList(1), 'should return `false` if item is not in list.');

  t.end();
});
