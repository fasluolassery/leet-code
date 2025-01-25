/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []

for (let par of s) {
    if (par === '(' || par === '[' || par === '{') {
        stack.push(par)
    } else {
        if (par === ')' && stack[stack.length - 1] === '(') stack.pop()
        else if (par === ']' && stack[stack.length - 1] === '[') stack.pop()
        else if (par === '}' && stack[stack.length - 1] === '{') stack.pop()
        else return false
    }
}

return stack.length === 0
};