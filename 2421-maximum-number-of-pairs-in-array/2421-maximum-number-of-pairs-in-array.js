/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let e = 0
    let n = nums.length;
    let left = 0
    nums.sort()
    console.log('sorted:',nums)

    for(let i = 0; i < n; i++){
        if(nums[i] === nums[i + 1]){
            e++
            i++
        }else{
            left++
        }
    }

    return [e, left]
};