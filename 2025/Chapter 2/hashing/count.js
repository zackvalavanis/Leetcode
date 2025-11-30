// Example 1: You are given a string s and an integer k. Find the length of the longest substring that contains at most k distinct characters.

// For example, given s = "eceba" and k = 2, return 3. The longest substring with at most 2 distinct characters is "ece".


var s = "eceba"
var k = 2


const longestSub = (s, k) => { 
  let distinct = new Map()
  let ans = 0; 
  let left = 0;

  for(let right = 0; right < s.length; right++){ 
    distinct.set(s[right], (distinct.get(s[right]) || 0) + 1)

    while(distinct.size > k){ 
      distinct.set(s[left], distinct.get(s[left]) - 1);
      if(distinct.get(s[left]) == 0){ 
        distinct.delete(s[left])
      }
      left++
    }
    ans = Math.max(ans, right - left + 1)
  }
  return ans
}

console.log(longestSub(s, k))