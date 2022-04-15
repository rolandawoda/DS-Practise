const dataset = [10, 1, 13, 100, 23, 50, 30];

const insertionSort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    const current = arr[i];
    const prev = i - 1;
    if (prev >= 0 && arr[prev] > current) {
      for (let j = prev; j >= 0; j--) {
        if (arr[j] > current) {
          arr[j + 1] = arr[j];
          arr[j] = current;
        } else {
          break;
        }
      }
    }
  }
};

/*
 implementation with while loop makes it easier to understand
*/

const insertionSortWithWhileLoop = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    const current = arr[i];
    let prev = i - 1;
    while (prev >= 0 && arr[prev] > current) {
        arr[prev + 1] = arr[prev];
        prev--;
    }
    arr[prev + 1] = current;
  }
};

insertionSort(dataset);
console.log(dataset);
