/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    for (let i=0; i< tokens.length;  i++) {
       if (  !isNaN(tokens[i]) ){
            stack.push(tokens[i])
       }
       else {
          let operator = tokens [i];
          let num1 = parseInt(stack.pop());
          let num2 = parseInt(stack.pop());
           
          if (operator == "+" )
              stack.push(num2+num1)
          else if (operator == "*" )
               stack.push(num2*num1)
          else if (operator == "-" )
              stack.push(num2-num1)
          else if (operator == "/" )
              stack.push(num2/num1)
       }
    }
    

    return Math.floor(stack[0]);
    
    
};
