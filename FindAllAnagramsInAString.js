/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {    
    let s_array = new Array(26).fill(0);
    let p_array = new Array(26).fill(0);
    let result = [];

    for (let i=0; i<p.length; i++) {
        let index = p.charCodeAt(i) % 26;
        p_array[index]++;
    }
    
    for (let i=0; i<s.length; i++) {
        let index = s.charCodeAt(i) % 26;
        s_array[index]++;
        if(i>p.length-1) {
           let index = s.charCodeAt(i - p.length) %26;
           s_array[index]--;
        }
        
        if ( i >= p.length-1) {
            if (arrayEqual(s_array , p_array) ) 
                result.push(i - (p.length-1));
        } 
    }
    return result;
};
    
let arrayEqual = function (s_array , p_array) {
    for (let i=0; i< s_array.length; i++) {     
        if ( s_array[i]  !== p_array[i] ) 
            return false
    }
    return true
}
