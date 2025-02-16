/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies)

let arr = []
for (let can of candies) {
    let total = can + extraCandies
    if (total >= max) {
        arr.push(true)
    } else {
        arr.push(false)
    }
}
return arr
};