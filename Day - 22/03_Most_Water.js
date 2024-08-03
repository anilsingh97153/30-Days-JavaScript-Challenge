// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

function maxArea1(height) {
    let maxArea = 0;
    let area = 0;
    let width = 0;
    let h;
    for(let i = 0; i < height.length; i++) {
        for(let j = i + 1; j < height.length; j++) {
            width = j - i;
            h = Math.min(height[i], height[j]);
            area = width * h;
            maxArea = Math.max(area, maxArea);
        }
    }
    return maxArea;
}

function maxArea2(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length-1;
    let h =0;
    let width = 0;
    let area = 0;

    while(left < right) {
        h = Math.min(height[left], height[right]);
        width = right - left;
        area = h * width;
        maxArea = Math.max(area, maxArea);

        if(height[left] > height[right]) right--;
        else left++;
    }

    return maxArea;
}


const arr = [1,8,6,2,5,4,8,3,7];
console.log(maxArea1(arr));
console.log(maxArea2(arr));