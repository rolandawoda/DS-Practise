const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;
//Expected Output
// Output: [1,2,2,3,5,6]

//With extra space
//space complexity o(n)
// time complexity o(n)
const mergeSortedArray1 = (nums1, m, nums2, n) => {
  let newArr = [];
  let pos = 0;
  let i = 0;
  let j = 0;

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      newArr[pos++] = nums1[i++];
    } else {
      newArr[pos++] = nums2[j++];
    }
  }

  while (i < m) {
    newArr[pos++] = nums1[i++];
  }

  while (j < n) {
    newArr[pos++] = nums2[j++];
  }
  return newArr;
};
console.log(mergeSortedArray1([...nums1], m, [...nums2], n));

//Without extra space
//space complexity o(1)
// time complexity o(nlog(n+m))
const mergeSortedArray2 = (nums1, m, nums2, n) => {
  let j = 0;
  for (let i = m; i < m + n; i++) {
    nums1[i] = nums2[j++];
  }
  return nums1.sort();
};

console.log(mergeSortedArray2([...nums1], m, [...nums2], n));

//Inplace Operation
//space complexity o(1)
// time complexity o(nlog(n+m))
const mergeSortedArray3 = (nums1, m, nums2, n) => {
  let i = m - 1;
  let j = n - 1;
  for (let k = m + n - 1; k >= 0; k--) {
    if (i >= 0 && j >= 0) {
      nums1[k] = nums1[i] >= nums2[j] ? nums1[i--] : nums2[j--];
    } else if (i >= 0) {
      nums1[k] = nums1[i--];
    } else {
      nums1[k] = nums2[j--];
    }
  }
  return nums1;
};

console.log(mergeSortedArray3([...nums1], m, [...nums2], n));
