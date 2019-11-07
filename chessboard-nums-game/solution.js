function game(n) {
  let total = n * n / 2;

  return !!(total % 2) ? [n * n, 2] : [total]
}