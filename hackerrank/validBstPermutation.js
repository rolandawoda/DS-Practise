validBstPermutation = (n) => {
  const result = [];
  const cache = {};
  const catalanNumber = (m) => {
    if (cache[m]) return cache[m];
    if (m <= 1) return 1;
    let sum = 0;
    for (let j = 1; j <= m; j++) {
      sum =
        ((sum +
            catalanNumber(j - 1) * catalanNumber(m - j)) %
          (Math.pow(10, 9) + 7)) %
        (Math.pow(10, 9) + 7);
    }
    cache[m] = sum
    return cache[m] ;
  };

  for (let i = 1; i <= n; i++) {
    result.push(catalanNumber(i));
  }
  return result;
};

console.log(validBstPermutation(100));
