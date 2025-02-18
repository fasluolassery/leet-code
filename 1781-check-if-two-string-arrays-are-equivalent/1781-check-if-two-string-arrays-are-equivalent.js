/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let wordOne = word1.reduce((acc, val) => acc + val, '')
let wordTwo = word2.reduce((acc, val) => acc + val, '')

return wordOne === wordTwo
};