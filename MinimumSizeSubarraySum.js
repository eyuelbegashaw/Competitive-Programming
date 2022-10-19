/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let  min=Infinity , sum=0 , left_pointer=0;
    
    for (let i=0; i<nums.length; i++) {
        sum += nums[i];
        
        while(sum >= target) {
          min = Math.min(min ,  i+1 - left_pointer);  
          sum -= nums[left_pointer];  
          left_pointer++;     
        }
    }
    
    return min == Infinity ? 0 : min;
};
