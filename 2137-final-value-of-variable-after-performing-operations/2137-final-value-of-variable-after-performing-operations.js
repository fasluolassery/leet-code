/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x = 0;

    for(let ele of operations){
        if(ele === "++X" || ele === "X++") x++
        else x--
    }

    console.log(x)
    return x
};