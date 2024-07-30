// Bubble sort
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// Selection sort

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
}
// Quick sort

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  const pivot = arr[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
  }

  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]]; // Swap pivot to correct position
  return i + 1;
}

const array1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort(array1));

const array2 = [64, 25, 12, 22, 11];
console.log("Sorted array:", selectionSort(array2));

const array3 = [3, 6, 8, 10, 1, 2, 1];
console.log("Sorted array:", quickSort(array3));
