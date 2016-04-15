# Is in list? [![Build Status](https://travis-ci.org/francisbrito/node-is-in-list.svg?branch=master)](https://travis-ci.org/francisbrito/node-is-in-list) [![npm version](https://badge.fury.io/js/is-in-list.svg)](https://badge.fury.io/js/is-in-list)
> Returns whether a certain item is in the provided list.

## Install
```sh
$ npm i is-in-list
```

## Usage
```js
'use strict';
var isInList = require('is-in-list');

var listOfAwesomePeople = [
  { name: 'Sabrina' },
  { name: 'Gustav' },
  { name: 'Mattias' },
];

console.log('is Sabrina awesome?', isInList(listOfAwesomePeople, { name: 'Sabrina' }));
```

With `curry`-ing:
```js
'use strict';
var not = require('not');
var isInList = require('is-in-list');

var paramsBlackList = [
  'skip',
  'link',
  'page',
  'sort',
  'embed',
  'limit',
  'fields',
  'pagination',
];

var query = {
  foo: 'bar',
  baz: 'qnx',
  sort: '-foo',
};

var acceptedParams = Object
.keys(query)
.filter(not(isInList(paramsBlackList)));

console.log('accepted param keys are:', acceptedParams);
```
