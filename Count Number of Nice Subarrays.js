/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
   let max=0 , sum=0;
   let map = new Map([[0,1]]);
    
    for (let i=0; i<nums.length; i++) {
       if( nums[i] %2 !== 0) nums[i] =1
       else nums[i]=0
    }
    
    for (let i=0; i<nums.length; i++) {
         sum += nums[i];
        
         if(map.has(sum - k)){
             max += map.get(sum-k)
         }
        
        map.set(sum , (map.get(sum) || 0) + 1 )
    }

    return max;
};

   
