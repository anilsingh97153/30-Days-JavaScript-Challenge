// Use of 'for' loop

const arr = [1, 2, 3, 4, 5];
console.log("arr:");
for( let i =0; i< arr.length; i++) {
    console.log(arr[i]);
}

// Use of 'forEach' loop
const arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log("arr1:");
arr1.forEach((item, index, array) => {
    console.log(`Element at index ${index}: ${item}`);
})


// Use of 'for...in' loop  ---> keys only
const arr2 = {
    name: "Anil",
    age: 22,
    city: "Delhi",
    country: "India",
    profession: "Developer",
}
for(const key in arr2) {
    console.log(key);
}

// Use of 'for...of' loop   ---> values only
for(const value of Object.values(arr2)) {
    console.log(value);
}
