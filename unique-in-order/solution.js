var uniqueInOrder = function (iterable) {
  iterable = typeof iterable === 'string' ? iterable.split('') : iterable;

  return iterable.reduce((final, el) => {
    if (final[final.length - 1] !== el) {
      final.push(el)
    }
    return final;
  }, []);
}
