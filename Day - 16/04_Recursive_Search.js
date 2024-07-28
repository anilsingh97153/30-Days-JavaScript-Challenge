// Recursive funtion to perform a binary search on a sorted array.
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) return `Target not found.`;

  const mid = Math.floor((start + end) / 2);

  if (target === arr[mid]) return `Target found at ${mid}`;

  if (target < arr[mid]) return binarySearch(arr, target, start, mid - 1);

  return binarySearch(arr, target, mid + 1, end);
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(arr, 4));
console.log(binarySearch(arr, 8));
console.log(binarySearch(arr, 12));

// Recusrive function count the occurrences of a target element in an array.

function countOccurence(arr, target, index = 0, count = 0) {
  if (index > arr.length - 1) return count;

  if (arr[index] === target) count++;

  return countOccurence(arr, target, index + 1, count);
}

console.log(countOccurence([1, 2, 3, 4, 5, 4, 4], 4)); // 3
console.log(countOccurence([1, 2, 3, 4, 1, 2, 4], 2)); // 2
console.log(countOccurence([1, 2, 1, 4, 5, 4, 4], 5)); // 1
console.log(countOccurence([1, 1, 1, 1, 1, 4, 4], 1)); // 5
console.log(countOccurence([1, 1, 1, 1, 1, 4, 4], 12)); // 0
