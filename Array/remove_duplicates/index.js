const nums = [3, 2, 2, 3],
  val = 3;
// Output: 2, nums = [2,2]

const nums2 = [0, 1, 2, 2, 3, 0, 4, 2],
  val2 = 2;
// Output: 5, nums = [0,1,4,0,3]

const removeDuplicates1 = (arr, val) => {
  const len = arr.length;
  let occurence = 0;
  for (let i = 0; i < len; i++) {
    if (arr[i] === val) {
      occurence++;
    }
  }
  const elementsLeft = len - occurence;
  let i = 0;
  let j = 0;
  while (i < elementsLeft) {
    if (arr[j] == val) {
      j++;
    } else {
      arr[i++] = arr[j++];
    }
  }
  console.log(elementsLeft, arr);
};

removeDuplicates1([...nums2], val2);

const removeDuplicates2 = (arr, val) => {
  let write = 0;
  for (let read = 0; read < arr.length; read++) {
    if (arr[read] !== val) {
      arr[write++] = arr[read];
    }
  }
  console.log(write, arr);
};

removeDuplicates2([...nums2], val2);
