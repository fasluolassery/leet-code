/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(arr) {
    let max = -1
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(i != j && arr[i] < arr[j]){
            //    console.log(arr[i], arr[j])
               let diff = arr[j] - arr[i]
               
               if(diff > max) max = diff
            }
        }
    }
    return max
};