/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let lastNoneZeroIdx = 0


for (let i = 0; i < nums.length; i++){
    if (nums[i] !== 0) {
        nums[lastNoneZeroIdx] = nums[i]
        lastNoneZeroIdx++
    }
}

for (let i = lastNoneZeroIdx; i < nums.length; i++){
    nums[i] = 0
}
};