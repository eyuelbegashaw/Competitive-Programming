/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let i=0 , total_sum=0 , left_sum=0;
    
    for (let i=0; i<nums.length; i++) {
        total_sum += nums[i];
    }
    
    for (let i=0; i<nums.length; i++) {
       if( i!==0 ) 
         left_sum += nums[i-1];
        
       if(total_sum - left_sum - nums[i] == left_sum)
           return i   
    }
    
    return -1;
};
