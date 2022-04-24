// 485. Max Consecutive Ones
// Easy

// 2417

// 394

// Add to List

// Share
// Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2
 

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.








var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let max_num = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
          count = count + 1
          max_num = Math.max(count, max_num);
        }else {
          count = 0;
        }
    }
    return max_num
  };
  console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))