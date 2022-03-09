/*

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.


*/

var searchInsert = function (nums, target) {
    let low = 0, high = nums.length - 1;
    let mid = Math.floor((low + high) * 0.5)

    while (low <= high) {
        if (nums[mid] === target) {
            return mid
        } else if (target > nums[mid]) {
            low = mid + 1
            mid = Math.floor((low + high) * 0.5)

        } else {
            high = mid - 1
            mid = Math.floor((low + high) * 0.5)
        }
    }
    return mid + 1
};

/*

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
Example 4:

Input: nums = [1,3,5,6], target = 0
Output: 0
Example 5:

Input: nums = [1], target = 0
Output: 0

*/

const input = [1,3,5,6], target = 4

result = searchInsert(input, target);

console.log(result);