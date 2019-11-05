function isPangram(string) {
  const clean = string.replace(/[^a-z]/gi, '').toLowerCase();
  const alpha = {};

  for (char of clean) {
    if (!alpha[char]) alpha[char] = true;
  }

  return Object.keys(alpha).length === 26 ? true : false;
}