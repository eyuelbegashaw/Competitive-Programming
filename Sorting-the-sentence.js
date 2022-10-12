/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let array = [] ,  index=0 ;
    
    for (let i=0; i < s.length; i++) {
        if( s[i] == " " ) {
           array[s[i-1]] = s.slice(index , i-1);
           index = i+1
        }     
    }
    array[s[s.length -1]] = s.slice(index , s.length-1);
    return array.join(" ").trim()

};
