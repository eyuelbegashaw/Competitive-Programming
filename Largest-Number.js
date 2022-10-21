/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
     let sorted = nums.sort ((a,b)=> {
         let ab = a.toString()+b.toString();
         let ba = b.toString()+a.toString();

         return ba-ab  
     });
    
    let result = sorted.join("");
    
    if(parseInt(result) == 0)
        return '0'
    return result
};
