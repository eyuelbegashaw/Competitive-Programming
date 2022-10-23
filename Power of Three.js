/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let x = Math.log10(n) /  Math.log10(3);
    return Number.isInteger(x)
};
