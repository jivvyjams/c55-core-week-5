function countAboveThreshold(numbers, threshold) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > threshold) count++;
  }
  return count;
}

console.log(countAboveThreshold([1, 2, 3, 20, 100], 9));
