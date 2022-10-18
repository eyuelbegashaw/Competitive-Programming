/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let max=0 , str="" , count=0 , isLastVowel=false;
    
    for (let i=0; i<s.length; i++) {
        str += s[i];
        
        if(i== k-1) {
           count = countVowels(str);
           max = Math.max(count , max)
        }
        
        if(i> k-1) {
            isLastVowel = isVowel(str[0]); 
            str = str.slice(1)
        }
         
        if(i> k-1) {
           if( isVowel(s[i])  && !isLastVowel ) {
               count++
           }
           if( ! isVowel(s[i])  && isLastVowel ) {
               count--
           }
            
            max = Math.max(count , max)
        }
    }
    return max;
};

function isVowel(s) {
  if ( s == "a" || s == "e" || 
       s == "i" || s == "o" || 
       s == "u" ) 
         return true
  else return false
}
  
function countVowels(s) {
  let c = s.match(/[aeiou]/gi);
  return c === null ? 0 : c.length;
}
