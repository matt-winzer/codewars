function Xbonacci(signature, n) {
  const sequence = [...signature];
  const length = signature.length;

  for (let i = length; i < n; i++) {
    sequence[i] = sequence.slice(i - length, i).reduce((sum, int) => sum + int);
  }

  return n < length ? sequence.slice(0, n) : sequence;
}