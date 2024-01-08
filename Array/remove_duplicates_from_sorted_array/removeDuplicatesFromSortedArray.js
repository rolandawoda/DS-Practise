// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

const removeDuplicatesFromSortedArray = (arr) => {
  let insertIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      insertIndex++;
      continue;
    }
    if (arr[i - 1] !== arr[i]) {
      arr[insertIndex++] = arr[i];
    }
  }
  console.log(insertIndex, arr);
};

removeDuplicatesFromSortedArray([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
