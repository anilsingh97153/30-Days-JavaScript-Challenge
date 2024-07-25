import { chunk, random } from "lodash-es";

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunks = chunk(array, 2);
console.log(chunks); // [[1, 2], [3, 4], [5, 6], [7, 8]]

const rand = random(1, 200);
console.log(rand); // A random number between 1 and 100
