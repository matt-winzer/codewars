function incrementString(strng) {
  let letters = strng.replace(/[0-9]/g, '');
  let numbers = strng.replace(/[^0-9]/g, '');
  let zeroes = '';

  // Build up string of zeroes
  if (numbers.charAt(0) === '0') {
    for (let char of numbers) {
      if (char !== '0') break;
      zeroes += char;
    }
  }

  // Remove a zero under certain circumstances
  if ((numbers.charAt(numbers.length - 1) === '9' || Number(numbers) === 0) && zeroes.length) {
    zeroes = zeroes.slice(0, -1)
  }

  if (numbers.length) {
    numbers = parseInt(numbers) + 1;
  } else {
    numbers = 1;
  }

  return letters + zeroes + numbers;
}