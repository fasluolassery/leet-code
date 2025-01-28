/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let obj = {}

for (let char of s) {
    obj[char] = (obj[char] || 0) + 1
}

for (let key in obj) {
    if(obj[key] === 1) return s.indexOf(key)
}

return -1
};