/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
   let obj= {} , result=[] ;
   
   for (let i=0; i<nums.length; i++) {
       if(obj[nums[i]] )
            obj[nums[i]] += 1
       else
            obj[nums[i]]=1
   }

    let arr = Object.entries(obj)
    arr = arr.map((x)=> x.reverse())
    arr.sort((a,b)=> b[0] - a[0])

    for (let i=0; i<k; i++) {
      result.push(arr[i][1])
    }
    
    return result
};
