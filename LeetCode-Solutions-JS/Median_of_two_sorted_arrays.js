// 4. Median of Two Sorted Arrays
// Hard

// 16043

// 1967

// Add to List

// Share
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106



var findMedianSortedArrays = function(nums1, nums2) {
    let result = nums1.concat(nums2);
    result.sort((a,b) => a - b)
    if (result . length % 2 === 1) {
        return result[Math.floor(result.length / 2)]
    } else {
        let mid1 = result.length / 2 - 1;
        let mid2 = result.length / 2
        return (Math.floor(result[mid1] + result[mid2]) / 2)
    }
}

console.log(findMedianSortedArrays([1,2],[3,4]))





