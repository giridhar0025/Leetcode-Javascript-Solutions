// 34. Find First and Last Position of Element in Sorted Array

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    let output = []
    for (let i = 0 ; i < nums.length; i++) {
        if (nums[i] === target) {
           output.push(i)
        }
    } if (output.length === 0) {
        output.push(-1)
        output.push(-1)
    } else if (output.length === 1) {
        output.push(output[0])
    }

    else if (output.length > 2) {
        output.splice(1, output.length - 2)
    }
    return output
};