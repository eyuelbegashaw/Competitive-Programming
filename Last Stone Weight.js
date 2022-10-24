/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    stones.sort((a,b)=> b-a);
    let j=0;
    while(j<stones.length-1) {
        if(stones[j] == stones[j+1]) {
            j+=2;
        } else {
            stones[j+1] = stones[j] - stones[j+1];
            j++;
        }
        stones.sort((a,b)=> b-a);  
    }
    return stones[j] || 0;
 
};
