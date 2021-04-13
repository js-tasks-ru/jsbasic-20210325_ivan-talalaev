function camelize(str) {
  return str.replace(/(?:^\w|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/-/g, '');
}
