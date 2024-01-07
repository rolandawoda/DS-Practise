/*
Example 1
Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
345 contains 3 digits (odd number of digits). 
2 contains 1 digit (odd number of digits). 
6 contains 1 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.


Example 2
Input: nums = [555,901,482,1771]
Output: 1 
Explanation: 
Only 1771 contains an even number of digits.

*/

const countDigits = (num) => {
  count = 0;
  while (num > 0) {
    const remainder = num % 10;
    num = Math.trunc(num / 10);
    count++;
  }
  return count;
};

function findNumberWithEvenNumberOfDigits(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (countDigits(arr[i]) % 2 === 0) {
      count++;
    }
  }
  return count;
}

console.log(findNumberWithEvenNumberOfDigits([555, 901, 482, 1771]));
