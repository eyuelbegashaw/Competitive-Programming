/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    let x = Math.log10(n) /  Math.log10(4);
    return Number.isInteger(x)
};
