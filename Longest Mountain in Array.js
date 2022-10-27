/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
    let max=0 , counter=1 , i=1 , n=arr.length ;
    while(i< n) {
        let counter=1 , j=i , decresing=false;

        //Increasing
        while(j<n && arr[j] > arr[j-1]) {
            j++;
            counter++;
        }
        
        //Decreasing
        while( i!==j && j<n && arr[j] < arr[j-1]) {
            j++;
            counter++;
            decresing=true;
        }
        
        //Check Maximum
        if(i!==j && decresing && counter>2) {
            max = Math.max(max , counter);
            j--;
        } 
        
        i=j+1;
    }
    
    return max;
};
