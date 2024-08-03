function threeSum(nums) {
  const triplet = [];

  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    // two sum approch
    if (i > 0 && nums[i] == nums[i - 1]) continue; // Skip duplicates

    let left = i + 1;
    let right = nums.length - 1;
    let sum;

    while (left < right) {
      sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        triplet.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        // Move the pointers to the next distinct elements
        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else left++;
    }
  }

  return triplet;
}

const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
