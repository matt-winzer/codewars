var sum_pairs = function (ints, s) {
  let tried = {};
  let possible = [];

  ints.forEach((int, i) => {
    let search = s - int;

    if (!tried[int]) {
      tried[int] = true;

      for (let j = i + 1; j < ints.length; j++) {
        if (ints[j] === search) {
          possible.push({ values: [int, ints[j]], maxIdx: j })
        }
      }
    }
  });

  if (!possible.length) return undefined;

  let maxIdx = possible[0].maxIdx;
  let result = possible[0].values;

  for (let chance of possible) {
    if (chance.maxIdx < maxIdx) {
      maxIdx = chance.maxIdx;
      result = chance.values;
    }
  }

  return result;
}

