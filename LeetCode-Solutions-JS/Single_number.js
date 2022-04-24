// 136. Single Number
// Easy

// 9632

// 341

// Add to List

// Share
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1



var removeDuplicates = function(nums) {
    let p1= 1;
    for(let p2 =1; p2<nums.length; p2++){
        if(nums[p1]!==nums[p2]){
            p1++;
            nums[p1] = nums[p2]
        }
    }
    return p1;
  };