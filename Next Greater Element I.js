/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let result=[] , val , index;
    
    for(let i=0; i<nums1.length; i++) {
        val = nums1[i];
        index = nums2.indexOf(val);  
  
        for (j=index; j<nums2.length; j++) {
            if(nums2[j]>  val) {
                result.push(nums2[j])
                break
            }  
            else if(j == nums2.length-1) {
                result.push(-1);
                break
            }
              
        }  
    }
    
    
    return result;
};
