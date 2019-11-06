function uniqueInOrder(it) {
  var result = []
  var last

  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push(last = it[i])
    }
  }

  return result
}

var uniqueInOrder = function (iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1])
}

// Clever
var uniqueInOrder = function (iterable) {
  return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
}