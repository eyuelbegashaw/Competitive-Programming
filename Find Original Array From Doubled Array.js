/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    let freq = new Array(100001).fill(0), result=[];
    
    for (let i=0; i<changed.length; i++)
        freq[changed[i]]++;
    
    for (let i=0; i<freq.length; i++) {
        while(freq[i] >0 && 2*i <freq.length && freq[2*i]>0) {
            freq[i]--;
            freq[2*i]--;
       
            if(freq[2*i]<0)         
              return []

             result.push(i)      
         }     
    }
    
    for(let i=0; i<freq.length; i++) {
        if (freq[i] !==0) 
            return []       
    }
       
    
    return result;
    
};
