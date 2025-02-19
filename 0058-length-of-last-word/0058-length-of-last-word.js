/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let last = s.trim().split(' ')
return last[last.length - 1].length
};