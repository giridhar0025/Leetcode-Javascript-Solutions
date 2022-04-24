// 448. Find All Numbers Disappeared in an Array
// Easy

// 6439

// 379

// Add to List

// Share
// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]


var findDisappearedNumbers = function(nums) {
    let output = [];
    for (let i = 0; i < nums.length; i++) {
      let index = Math.abs(nums[i]) - 1
      if (nums[index] > 0) {
          nums[index] = nums[index] * -1;
      }
    }
    for (let i = 1; i <= nums.length; i++) {
     if (nums[i - 1] > 0) {
        output.push(i)
}
    }
    return output
};
