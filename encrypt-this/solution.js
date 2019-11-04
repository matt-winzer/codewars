var encryptThis = function (text) {
  const words = text.split(' ');
  return words.map(word => {
    let letters = word.split('');

    letters[0] = letters[0].charCodeAt(0);
    if (letters.length > 2) {
      let temp = letters[1];
      letters[1] = letters[letters.length - 1];
      letters[letters.length - 1] = temp;
    }
    return letters.join('');
  }).join(' ');
}