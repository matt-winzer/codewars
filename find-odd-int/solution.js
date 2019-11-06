function findOdd(A) {
  const occurances = {};

  for (let int of A) {
    occurances[int] = occurances[int] + 1 || 1;
  }

  for (let int in occurances) {
    if (occurances[int] % 2 !== 0) return parseInt(int);
  }
}