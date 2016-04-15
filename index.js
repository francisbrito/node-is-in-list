'use strict';
function isInList(list, item) {
  const matchingItem = list.filter(function (li) {
    return li === item;
  })[0];

  return !!matchingItem;
}

module.exports = isInList;
