/*

Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.
*/
var fourSum = function(nums, target) {
    let result = []
    nums.sort((a,b) => a - b)
    for(let a = 0; a < nums.length; a++){
        if(nums.length < 4) return result;
        for(let b = a + 1; b < nums.length; b++){
             let c = b + 1, d = nums.length - 1
             while(c < d){  
                let quadruplets = [nums[a], nums[b], nums[c], nums[d]]
                let sum = nums[a] + nums[b] + nums[c] + nums[d]
                if(sum == target){
                    result.push(quadruplets)
                    while(nums[c] == nums[c + 1]) c++
                    while(nums[d] == nums[d - 1]) d--
                    c++
                    d--
                }else if (sum < target){
                    c++
                }else {
                    d-- 
                }    
            }  
            while(nums[b] == nums[b + 1]) b++
        }
        while(nums[a] == nums[a + 1]) a++
    }
    return result
};

/*
Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
Example 2:

Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]

*/


const input = [1,0,-1,0,-2,2], target =0

const result = fourSum(input, target)
console.log(result);