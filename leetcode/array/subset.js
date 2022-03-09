/*

Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]

*/

var subsets = function(nums, len = 0 , results = [], subset = []) {
    if( len ==  nums.length ){
        results.push(subset)
        return 
    }
    subsets(nums, len + 1, results, subset)
    subsets(nums, len + 1, results, [...subset, nums[len]])
    return results
};

/*
Output: 
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
*/

const result = subsets([1,2,3]);

console.log(result)