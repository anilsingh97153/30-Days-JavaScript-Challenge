// Recusrive function to find the sum of all elements in an array.
function sum(arr, index = 0) {
  // base case
  if (index >= arr.length) return 0;
  return arr[index] + sum(arr, index + 1);
}

const arr = [1, 2, 3, 4, 5, 6];
console.log("sum:", sum(arr));

// Recusrive function to find the maximum element in array.
function findLargest(arr, index = 0, largest = arr[0]) {
  if (index >= arr.length) return largest;

  if (arr[index] > largest) {
    largest = arr[index];
  }

  return findLargest(arr, index + 1, largest);
}

console.log("Largest number:", findLargest(arr));
