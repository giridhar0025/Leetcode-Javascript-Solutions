// 7. Reverse Integer
// Medium

// 7026

// 9641

// Add to List

// Share
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21


var reverse = function(x) {
    let x_negative = false
    if (x < 0) {
      x = x * -1;
      x_negative = true
    }
    let rev = 0;
    while (x > 0) {
      let rem = x % 10;
      rev = rev * 10 + rem;
      x = parseInt(x/10)
    }
    if (rev > 2147483647) {
      return 0
    }
    if (x_negative === true) {
      return rev * -1
    } else
    return rev
  }