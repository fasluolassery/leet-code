/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let obj = {};
    let maxF = 0
    let c = 0

    for(let i = 0; i < nums.length; i++){
        if(!obj[nums[i]]) obj[nums[i]] = 1
        else obj[nums[i]] += 1
    }

    for(let ele in obj){
        if(obj[ele] > maxF) maxF = obj[ele]
    }
    
    for(let el in obj){
        if(obj[el] === maxF) c += maxF
    }

    return c
};