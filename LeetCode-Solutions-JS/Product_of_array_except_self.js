// 238. Product of Array Except Self
// Medium

// 11943

// 729

// Add to List

// Share
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]



var productExceptSelf = function(nums) {
    let output = []
    let left = [];
    let right = new Array(nums.length).fill(0);
    left[0] = 1;
    right[right.length - 1] = 1 
    for (let i = 1; i < nums.length; i++) {
        left[i] = nums[i - 1] * left[i - 1]
    }
    for(let i = nums.length - 2; i >= 0; i--) {
        right[i] = nums[i + 1] * right[i + 1];
    }
    for (let j = 0 ; j < nums.length; j++) {
        output[j] = left[j] * right[j];
    }
    return output
};

console.log(productExceptSelf([1,2,3,4]))