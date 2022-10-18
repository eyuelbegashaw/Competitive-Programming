/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let max=0, currentSum=0;
    
    for (let i=0; i<arr.length; i++){
         currentSum += (arr[i] / k);
        
        if(i > k-1) {
            currentSum -= (arr[i-k] / k)
        }
        
        if(i >= k-1) {
            if(currentSum >= threshold)
                max++;  
        }
    
    }
    
    return max;
};
