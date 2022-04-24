// 1108. Defanging an IP Address
// Easy

// 1037

// 1438

// Add to List

// Share
// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

 

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"
 

// Constraints:

// The given address is a valid IPv4 address.








var defangIPaddr = function(address) {
    let result = "";
    for (i = 0; i< address.length; i++) {
      let character = address[i]
      if (character === ".") {
         result = result + "[.]"
      }else result = result + character
    }
    return result
};

console.log(defangIPaddr("1.1.1.1"))