function list(names) {
  const length = names.length;

  return names.reduce((string, person, i) => {
    let suffix = '';

    if (length - i === 2) suffix = ' & ';
    if (length - i > 2) suffix = ', ';

    return string += person.name + suffix;
  }, '')
}