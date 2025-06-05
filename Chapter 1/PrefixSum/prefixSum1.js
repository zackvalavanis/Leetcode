var nums = [1, 6, 3, 2, 7, 2]
var queries = [[0, 3], [2, 5], [2, 4]]
var limit = 13

const prefixSumQueries = (nums, queries, limit) => { 
  let prefix = [nums[0]]
  for(let i = 1; i < nums.length; i++){ 
    prefix.push(nums[i] + prefix[prefix.length -1])
  }
  let ans = []
  for(const [x, y] of queries) { 
    let curr = prefix[y] - prefix[x] + nums[x]
    ans.push(curr < limit)
  }
  return ans
}

console.log(prefixSumQueries(nums, queries, limit))