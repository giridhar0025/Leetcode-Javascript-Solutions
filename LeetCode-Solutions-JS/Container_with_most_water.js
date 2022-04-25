// 11. Container With Most Water
// Medium

// 16566

// 935

// Add to List

// Share
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

 

// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1
 

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104



var maxArea = function(height) {
    let s = 0;
  let e = height.length-1;
  let max = 0;
    while(s < e) {
        let min = Math.min(height[s], height[e])
        let area = min * (e - s)
        if (max < area)max=area 
        if(height[s] < height[e])
        s++
        else 
        e--
    }
    return max
};


var maxArea = function(height) {
  let l = 0, r = height.length - 1;
  let w = height.length - 1;
  let max = 0
  while(l <= r){
      let temp;
      if(height[l] < height[r]){
          temp = height[l] * w;
          max = Math.max(temp, max);
          l++;
          w--;
      } else {
          temp = height[r] * w;
          max = Math.max(temp, max);
          r--;
          w--;
      }
  }
  return max;
};