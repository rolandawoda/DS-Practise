const closestNumbers = (numbers) => {
  let min = Number.MAX_VALUE;
  numbers.sort((a, b) => a - b);
  let seenPairs = [];

/* O(n^2) Approach*/

//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       const diff = Math.abs(numbers[i] - numbers[j]);
//       if (diff <= min) {
//         if (diff < min) {
//           seenPairs = [];
//         }
//         min = Math.min(min, diff);
//         seenPairs.push([numbers[i], numbers[j]]);
//       }
//     }
//   }

/* O(n)  Approach*/

  for (let i = 1; i < numbers.length; i++) {
      const diff = Math.abs(numbers[i] - numbers[i-1]);
      if (diff <= min) {
        if (diff < min) {
          seenPairs = [];
        }
        min = Math.min(min, diff);
        seenPairs.push([numbers[i-1], numbers[i]]);
      }
  }
  seenPairs.map((pair) => console.log(pair[0] + " " + pair[1]));
};

closestNumbers([6, 2, 4, 10]);
