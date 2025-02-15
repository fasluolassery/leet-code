/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let c = 0;

  for (let word of words) {
    for (let char of word) {
      if (!allowed.includes(char)) {
        c++;
        break;
      }
    }
  }

  return words.length - c
};