// Recursive function to reverse a string
function reverseStr(str) {
  if (str.length <= 1) return str;

  return reverseStr(str.substring(1)) + str.charAt(0);
}

console.log("Reverse of 'Anil Singh':", reverseStr("Anil Singh"));
console.log("Reverse of 'Anil':", reverseStr("Anil"));
console.log("Reverse of 'Hello':", reverseStr("Hello"));

// Recusrive function to check if the string is a palindrome.

function checkPalindrome(str, start = 0, end = str.length - 1) {
  if (start >= end) return true;

  if (str[start] !== str[end]) return false;

  return checkPalindrome(str, start + 1, end - 1);
}

console.log("madam:", checkPalindrome("madam"));
console.log("level:", checkPalindrome("level"));
console.log("hey:", checkPalindrome("hey"));
console.log("radar:", checkPalindrome("radar"));
