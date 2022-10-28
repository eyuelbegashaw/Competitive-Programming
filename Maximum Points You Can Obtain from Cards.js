/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let totalSum = 0 , windowSum=0 , maxScore=0;
    let windowSize = cardPoints.length - k;
    
    for(let i=0; i<cardPoints.length; i++) 
        totalSum+= cardPoints[i];

    if(k == cardPoints.length)
        return totalSum
    
    for(let i=0; i < windowSize; i++ )
        windowSum += cardPoints[i];
    
    maxScore = totalSum - windowSum;
    
    for(let i=windowSize; i<cardPoints.length; i++) {
        windowSum += cardPoints[i];
        windowSum -= cardPoints[i-windowSize];
        maxScore = Math.max(maxScore , totalSum - windowSum);
    }
    
    return maxScore
    
};
