/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let one = []
    let two = []

    for(let num of nums1){
        if(!nums2.includes(num)){
            if(!one.includes(num)){
               one.push(num)
            }
        }
    }

    for(let num of nums2){
        if(!nums1.includes(num)){
            if(!two.includes(num)){
               two.push(num)
            }
        }
    }
    
    return [one, two]
};