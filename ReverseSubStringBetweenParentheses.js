/**
 * @param {string} s
 * @return {string}
 */


var reverseParentheses = function(s) {
        let stack = [] , str = "";
        for (let i = 0; i < s.length; i++) {            
            if (s[i] == '(') {
                stack.push(str);
                str = "";
            } else if (s[i] == ')') {
                str = str.split("").reverse().join("");
                let s = stack[stack.length-1];
                stack.pop();
                str = s + str;
            } else {
                str += s[i];
            }
        }
        return str;
    
}
