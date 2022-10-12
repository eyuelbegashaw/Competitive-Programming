/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   let stack = [];
    
    if(s.length % 2 !== 0) {
         return false;
     }
      
    for (let i=0; i<s.length; i++) {
      if ( s[i] == '['  ||  s[i] == '('  ||s[i] == '{' ) {
           stack.push(s[i]);
       }
       else {
           let pop = stack.pop();
           if ( s[i] == ']' && pop !== '[' ) {
              return false
           }
           else if ( s[i] == '}' && pop !== '{') {
              return false
           }
            else if ( s[i] == ')' && pop !== '(') {
               return false
            }
         }       
     }
    
    return stack.length == 0;

};
