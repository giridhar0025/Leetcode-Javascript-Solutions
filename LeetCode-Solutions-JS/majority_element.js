// 169. Majority Element
// Easy

// 9398

// 333

// Add to List

// Share
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2


var majorityElement = function(nums) {
    let count = 1;
    let candidate = nums[0];
    for (let i = 0; i < nums.length; i++) {
      if (count === 1) {
          candidate = nums[i]
      } if (nums[i] === candidate) {
          count = count + 1
      } else [
          count = count - 1
      ]
    }
    return candidate
};