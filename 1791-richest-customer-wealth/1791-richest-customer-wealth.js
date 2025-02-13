/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let a = accounts.map(val => val.reduce((a,b) => a + b))
    return Math.max(...a)
};