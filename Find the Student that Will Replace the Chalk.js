/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    let sum=0, lastChalk=0;
    
    for(let i=0; i< chalk.length; i++) 
        sum+= chalk[i];
    
    if(k >= sum )
    lastChalk = k % sum;
    else 
    lastChalk = k

    sum=0;
    for (let i=0; i<chalk.length; i++) {
        sum += chalk[i];
        if( sum > lastChalk) 
             return i;        
    }
    
};
