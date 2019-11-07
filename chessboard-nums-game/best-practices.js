function game(n) {
  var result = n * n;
  if (result % 2 == 0) {
    return [result / 2];
  }
  return [result, 2];
}

game = n => n % 2 ? [n * n, 2] : [n * n / 2];