function isPalindrome(x) {
    if(x < 0) return false;

    let reversed = 0;
    let original = Math.abs(x);

    while (original > 0) {
        let lastDigit = original % 10;
        reversed = reversed * 10 + lastDigit;
        original = Math.floor(original / 10);
    }

    if(x === reversed) return true;
    return false;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
