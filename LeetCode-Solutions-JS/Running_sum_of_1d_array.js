// https://leetcode.com/problems/running-sum-of-1d-array/

const { count } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let n = readLine().split(" ");
let output = [];
let sum = 0;
for(let i = 0;i < n.length; i++) {
  let first_num = parseInt(n[i]);
  sum = sum + first_num;
  output[i] = sum;
} console.log(output);