/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let c = 0

for (let ele of hours) {
    if (ele >= target) c++
}
return c
};