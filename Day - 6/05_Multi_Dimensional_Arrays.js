// Create a 2D array (matrix), and log the entire array
const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];
for(let i =0; i< matrix.length; i++) {

    for(j=0; j< matrix[i].length; j++) {
        console.log(`Element at matrix[${i}][${j}] = ${matrix[i][j]}`);
    }
}

// Acess and log a specific value
const specificItem = matrix[3][1]; // 14
console.log(specificItem);