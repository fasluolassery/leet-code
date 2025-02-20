/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    let obj = {}

    for(let num of nums){
        obj[num] = (obj[num] || 0) + 1
    }
    
    for(let key in obj){
        if(obj[key] >= 2) return true
    }

    return false
};