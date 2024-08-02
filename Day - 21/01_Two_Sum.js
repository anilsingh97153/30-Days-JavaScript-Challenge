// Two sum problem in JS

// brute force
function twoSum1(arr, target) {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i + 1; j< arr.length; j++) {
            if(arr[i] + arr[j] === target) return [i, j];
        }
    }
    return [-1, -1];
}

// optimized - two pointer
function twoSum2(nums, target) {
    const numIndices = nums.map((num, index) => [num, index]);
    numIndices.sort((a,b) => a[0] - b[0]); // O(N*logN)
    let left = 0;
    let right = numIndices.length - 1;
    let sum;

    while(left < right) {
        sum = numIndices[left][0] + numIndices[right][0];
        if(sum === target) {
            return [numIndices[left][1], numIndices[right][1]];
        } else if(sum < target) {
            left ++;
        } else {
            right--;
        }
    }
    return [-1, -1]
}

const arr = [1, 2, 3, 4, 5];
const target = 7;
const output = twoSum1(arr, target)
console.log(output);

const output1 = twoSum2(arr, 51)
console.log(output1);
