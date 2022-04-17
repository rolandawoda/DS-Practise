const data = [10, 1, 13, 100, 23, 50, 30];

const quickSort = (dataset, start, end) => {
  if (start >= end) return;
  start = start ?? 0;
  end = end ?? dataset.length - 1;
  const boundary = partition(dataset, start, end);
  quickSort(dataset, start, boundary - 1);
  quickSort(dataset, boundary + 1, end);
};

const partition = (dataset, start, end) => {
  const pivot = dataset[end];
  let boundary = start - 1;
  for (let i = start; i <= end; i++) {
    if (dataset[i] <= pivot) {
      boundary++;
      const temp = dataset[boundary];
      dataset[boundary] = dataset[i];
      dataset[i] = temp;
    }
  }
  return boundary;
};

quickSort(data);
console.log(data);
