/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

*/

var searchRange = function(nums, target) {
    let ret = [-1, -1]
    let low = 0, high = nums.length - 1

    while(low < high) {
        const mid = Math.floor((low + high) * 0.5)
        if(nums[mid] < target){
            low = mid + 1
        }else {
            high = mid
        }
    }
    if(nums[low] != target) return ret
    ret[0] = low;

    high = nums.length - 1

    while(low < high){
        const mid = Math.floor((low + high) * 0.5) + 1
        if(nums[mid] > target){
            high = mid - 1
        }else {
            low = mid
        }
    }

    ret[1] = high;

    return ret
};

/*

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]

*/

const input = [5,7,7,8,8,10], target = 8

const result = searchRange(input, target);
// Output: [3,4]

console.log(result)

