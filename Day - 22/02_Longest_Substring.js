// Sliding window algo
//  Longest substring without repeating characters
// input --> string
// output --> length of the longest substring without repeating characters

// sample i/p --> "abcabcbb"
// sample o/p --> 3
// Explanation: The answer is "abc", with the length of 3.

function lengthOfLongestSubstring(s) {
    let count = 1;
    let charSet = new Set();
    let left = 0;
    let res = 0;
    for(right = 0; right < s.length; right++) {
        while(charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        res = Math.max(res, right - left + 1);
    }
    return res;
}


console.log(lengthOfLongestSubstring("abcabcbb"));
