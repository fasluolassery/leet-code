/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let length = arr.length
    for(let i = 0; i < length; i++){
        if(arr[i] === 0){
            // console.log(i)
            for(let j = length - 1; j > i; j--){
                arr[j] = arr[j - 1]
            }
            // console.log('arr', arr)
            arr[i] = 0
            i = i + 1
        }
    }

    console.log(arr)
};