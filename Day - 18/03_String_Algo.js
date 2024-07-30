// function to count occurence of each character in a string.

function countCharacterOccurrences(str) {
    const charCount = {};

    for(let char of str) {
        if(charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    return charCount;
}

const exampleString1 = "hello world";
const occurrences = countCharacterOccurrences(exampleString1);
console.log(occurrences);
// Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

// function to find the longest substring without repeating characters in a string. Log the length of the substring.

function longestUniqueSubstrLength(str) {
    let maxLength = 0;
    let start = 0;
    let charIndexMap = new Map();
  
    for (let end = 0; end < str.length; end++) {
      let char = str[end];
  
      if (charIndexMap.has(char)) {
        start = Math.max(charIndexMap.get(char) + 1, start);
      }
  
      charIndexMap.set(char, end);
      maxLength = Math.max(maxLength, end - start + 1);
    }
  
    console.log("Length of the longest substring without repeating characters:", maxLength);
    return maxLength;
  }
  
  // Example usage:
  const exampleString2 = "abcabcbb";
  longestUniqueSubstrLength(exampleString2);
  // Output: Length of the longest substring without repeating characters: 3
  