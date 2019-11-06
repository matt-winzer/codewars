function tribonacci(signature, n) {
  const sequence = [...signature];

  for (let i = 3; i < n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2] + sequence[i - 3];
  }

  return n < 3 ? sequence.slice(0, n) : sequence;
}