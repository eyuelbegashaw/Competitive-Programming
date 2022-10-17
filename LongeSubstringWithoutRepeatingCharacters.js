/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let j=0  , max=0 , str = "";
    while (j< s.length) {
        if( !str.includes(s[j]) ) {
            str += s[j];
            max  = Math.max(str.length , max)
            j++;
        } else {
            str = str.slice(1);
        } 
    }
    return max;
 
};
