/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj = {}

for (let num of nums) {
    obj[num] = (obj[num] || 0) + 1
}

for (let char in obj) {
    if(obj[char] === 1) return parseInt(char)
}
};