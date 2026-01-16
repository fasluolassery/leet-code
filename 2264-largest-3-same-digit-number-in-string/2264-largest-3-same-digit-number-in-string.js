/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let nums = [
        '999',
        '888',
        '777',
        '666',
        '555',
        '444',
        '333',
        '222',
        '111',
        '000'
    ];

    for(let i = 0; i < nums.length; i++){
        if(num.includes(nums[i])) return nums[i]
    }

    return ""
};