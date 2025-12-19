/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let num = 0
    let str = n.toString();
    for(let i = 0; i < str.length; i++){
        if(i % 2 === 0){
            num += Number(str[i])
        }else{
            num -= Number(str[i])
        }
    }

    return num
};