/*
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).

The replacement must be in place and use only constant extra memory.
*/

const getFirstDecreasingIndex = (arr) => {
    for (let i = arr.length - 1; i > 0; i < i--) {
        if (arr[i] > arr[i - 1]) {
            return i - 1
        }
    }
    return -1
}

const getFirstPeakValue = (arr, limit) => {
    for (let i = arr.length - 1; i > limit; i--) {
        if (arr[i] > arr[limit]) return i
    }
}

const swapPositions = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const reverseArray = (arr, start) => {
    let end = arr.length - 1
    while(start < end){
        swapPositions(arr, start, end)
        start++
        end--
    }
}

var nextPermutation = function (nums) {
    const firstDecreasingIndex = getFirstDecreasingIndex(nums)
    if (firstDecreasingIndex != -1) {
        const firstPeakValue = getFirstPeakValue(nums, firstDecreasingIndex)
        swapPositions(nums, firstDecreasingIndex, firstPeakValue)
    }
    reverseArray(nums, firstDecreasingIndex + 1);
};

/*
Example 1:

Input: nums = [1,2,3]
Output: [1,3,2]
Example 2:

Input: nums = [3,2,1]
Output: [1,2,3]
Example 3:

Input: nums = [1,1,5]
Output: [1,5,1]
Example 4:

Input: nums = [1]
Output: [1]

*/

const input = [2,3,1,3,3]

//Expected [2,3,3,1,3]

nextPermutation(input);
console.log(input)