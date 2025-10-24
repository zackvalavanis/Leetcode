// Valid Parentheses
// Solved 
// You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

// The input string s is valid if and only if:

// Every open bracket is closed by the same type of close bracket.
// Open brackets are closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// Return true if s is a valid string, and false otherwise.

var p = "[]"

const stacking = (p) => {
  const parenth = {
    '[':']', 
    '{':'}', 
    '(':')'
  }

  let stack = []

  for(let char of p){
    if(char in parenth){
      stack.push(parenth[char])
    } else {
        const top = stack.pop()
        if(stack.pop() && top !== char){ 
          return false
        }
    }
  }
  return stack.length === 0
  
}

console.log(stacking(p))