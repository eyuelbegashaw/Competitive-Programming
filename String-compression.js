/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let str = "" , counter =0;
    
    for (let i=0; i<chars.length; i++) {
        if(chars[i] == chars[i+1]) {
              counter++;
              continue
        }
        if(counter !== 0) 
            str = str + chars[i] + (counter + 1);
        else
            str = str + chars[i]
        
        counter = 0;         
    }
    
    for (let i=0; i<str.length; i++) 
        chars[i] = str[i] 
    chars = chars.slice(0 , str.length)
    return str.length;
};
