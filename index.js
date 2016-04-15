'use strict';
function isInList(list, item) {
  var arity = arguments.length;
  var innerArgs;
  var wrapperArgs;
  var matchingItem;

  wrapperArgs = Array.prototype.slice.call(arguments);

  if (arity < 2) {
    return function () {
      innerArgs = Array.prototype.slice.call(arguments);

      return isInList.apply(null, [].concat(wrapperArgs).concat(innerArgs));
    };
  }

  matchingItem = list.filter(function (li) {
    return li === item;
  })[0];

  return !!matchingItem;
}

module.exports = isInList;
