/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let arr = []

    for (let i = 0; i < nums.length - 1; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] === nums[j]) {
                // console.log('j: ', j)
                arr.push(nums[i])
            }
        }
    }

    return arr
};