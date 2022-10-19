/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let copyNums = nums.slice() , result=[];
    copyNums.sort((a,b) => a-b);
    for (let i=0; i<nums.length; i++) {
        result[i] = copyNums.indexOf(nums[i])
    }
    return result;
};
