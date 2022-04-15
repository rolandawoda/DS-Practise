const dataset = [10, 1, 13, 100, 23, 50, 30];

const mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = [];
  for (let i = 0; i < mid; i++) {
    left.push(arr[i]);
  }
  const right = [];
  for (let i = mid; i < arr.length; i++) {
    right.push(arr[i]);
  }
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  return mergeSortedArray(sortedLeft, sortedRight);
};

const mergeSortedArray = (arr1, arr2, result = []) => {
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result[k++] = arr1[i++];
    } else {
      result[k++] = arr2[j++];
    }
  }
  while (i < arr1.length) {
    result[k++] = arr1[i++];
  }
  while (j < arr2.length) {
    result[k++] = arr2[j++];
  }
  return result;
};

console.log(mergeSort(dataset));
