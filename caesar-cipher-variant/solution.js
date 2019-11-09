function encodeStr(s, shift) {
  let first = s.charAt(0).toLowerCase();
  let prefix = first + String.fromCharCode(first.charCodeAt(0) + shift);
  let encoded = prefix;
  let result = [];
  let length = s.length + 2;
  let split = Math.ceil(length / 5);

  for (char of s) {
    if (char.match(/[a-z]/i)) encoded += String.fromCharCode(char.charCodeAt(0) + shift);
    else encoded += char;
  }

  for (let i = 0; i < encoded.length; i += split) {
    result.push(encoded.slice(i, i + split));
  }

  return result
}

function decode(arr) {
  let encoded = arr.join('').slice(2);
  let shift = arr[0].charCodeAt(1) - arr[0].charCodeAt(0);
  let decoded = '';

  for (let char of encoded) {
    let converted = String.fromCharCode(char.charCodeAt(0) - shift);

    if (converted.match(/[a-z]/i)) decoded += converted
    else decoded += char;
  }

  return decoded;
}