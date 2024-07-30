// Linear search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const index = linearSearch([1, 2, 3, 4, 5], 4);
console.log(index);

// Binary search

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Return the index of the found element
    } else if (arr[mid] < target) {
      left = mid + 1; // Eliminate the left half
    } else {
      right = mid - 1; // Eliminate the right half
    }
  }
  return -1; // Return -1 if the element is not found
}

// Example usage:
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target3 = 7;
console.log(binarySearch(arr2, target3)); // Output: 6

const target4 = 11;
console.log(binarySearch(arr2, target4)); // Output: -1
