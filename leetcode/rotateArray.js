const data = [1, 2, 3, 4, 5, 6, 7];
/* 
input [1,2,3,4,5,6,7] , 3 
output [5,6,7,1,2,3,4]
*/

/*
 @Params  arr: array to be rotated, d: number of rotations
*/

/*
 Extra Space Implementation
 Time Complexity O(n)
 Space Complexity O(n) => Addition array of size qual to the size if the input array is created
*/

const rotate = (arr, d) => {
  d = d % arr.length;
  const copy = [];
  for (let i = 0; i < arr.length; i++) {
    const newPosition = (i + d) % arr.length;
    copy[newPosition] = arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = copy[i];
  }
};

/*
 RECURSIVE  Implementation (In Place)
 Time Complexity O(n)
 Space Complexity O(n) => it is O(n)  because of the recursive call in the call stack, no addition memory space is created but the the call stack.
*/

const rotateRecursively = (arr, d, dept = 0) => {
  d = d % arr.length;
  if (dept >= arr.length) return;
  const currentItem = arr[dept];
  const newPosition = Math.abs(dept + d) % arr.length;
  rotateRecursively(arr, d, dept + 1);
  arr[newPosition] = currentItem;
};

/*
 IN-PLACE Implementation
 Time Complexity O(n)
 SPace Complexity O(1)
*/

const rotateInPlace = (arr, d) => {
  d = d % arr.length;
  let i = 0;
  let j = arr.length - 1;

  //Reverse Entire Array In Place;
  while (i < j) {
    const temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
    i++;
    j--;
  }
  i = 0;
  j = d - 1;

  //Reverse from the start n = 0 of the array to the rotation distance n = (number of rotations);
  while (i < j) {
    const temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
    i++;
    j--;
  }
  i = d;
  j = arr.length - 1;

  //Reverse from the point n = (number of rotations) of the array to the end of the array;

  while (i < j) {
    const temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
    i++;
    j--;
  }
};
