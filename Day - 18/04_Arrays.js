function rotateArray(arr, k) {
    // Helper function to reverse a portion of the array
    function reverse(arr, start, end) {
      while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
      }
    }
  
    const n = arr.length;
    k = k % n; // In case k is greater than the length of the array
  
    // Step 1: Reverse the entire array
    reverse(arr, 0, n - 1);
    // Step 2: Reverse the first k elements
    reverse(arr, 0, k - 1);
    // Step 3: Reverse the remaining elements
    reverse(arr, k, n - 1);
  
    console.log("Rotated Array:", arr);
  }
  
  // Example usage:
  const exampleArray = [1, 2, 3, 4, 5, 6, 7];
  rotateArray(exampleArray, 3);
  // Output: Rotated Array: [5, 6, 7, 1, 2, 3, 4]


  function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let i = 0, j = 0;
  
    // Traverse both arrays and add the smaller element to mergedArray
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
  
    // Add remaining elements from arr1
    while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }
  
    // Add remaining elements from arr2
    while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }
  
    console.log("Merged Array:", mergedArray);
    return mergedArray;
  }
  
  // Example usage:
  const sortedArray1 = [1, 3, 5, 7];
  const sortedArray2 = [2, 4, 6, 8];
  mergeSortedArrays(sortedArray1, sortedArray2);
  // Output: Merged Array: [1, 2, 3, 4, 5, 6, 7, 8]
  
  