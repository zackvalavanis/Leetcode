// Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

// Please implement encode and decode

// Example 1:

// Input: ["neet","code","love","you"]

// Output:["neet","code","love","you"]

var strs = ["neet","code","love","you"]

function encode(strs) {
  let res = '';
  for (let s of strs) {
      res += s.length + '#' + s;
  }
  return res;
}

function decode(str) {
  let res = [];
  let i = 0;
  while (i < str.length) {
      let j = i;
      while (str[j] !== '#') {
          j++;
      }
      let length = parseInt(str.substring(i, j));
      i = j + 1;
      j = i + length;
      res.push(str.substring(i, j));
      i = j;
  }
  return res;
}

console.log('encoded\n', encode(strs))
const res = encode(strs)
console.log('decoded\n', decode(res))

