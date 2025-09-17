// Code
// Testcase
// Test Result
// Test Result
// 791. Custom Sort String
// Medium
// Topics
// premium lock icon
// Companies
// You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously.

// Permute the characters of s so that they match the order that order was sorted. More specifically, if a character x occurs before a character y in order, then x should occur before y in the permuted string.

// Return any permutation of s that satisfies this property.

// Example 1:

// Input: order = "cba", s = "abcd"

// Output: "cbad"

// Explanation: "a", "b", "c" appear in order, so the order of "a", "b", "c" should be "c", "b", and "a".

// Since "d" does not appear in order, it can be at any position in the returned string. "dcba", "cdba", "cbda" are also valid outputs.

var order = "cba", s = "abcd"

const customSortString = (order, s) => { 

  let orderMap = new Map()
  
  for(let i = 0; i < order.length; i++){
    var char = order[i]
    orderMap.set(char, i)
  }

  var letter = s.split('')

  letter.sort((a,b) => {
    let rankA = orderMap.has(a) ? orderMap.get(a) : Infinity
    let rankB = orderMap.has(b) ? orderMap.get(b) : Infinity

    return rankA - rankB
  })

  return letter.join('')
}

console.log(customSortString(order, s))


// Okay i think i map cba to index