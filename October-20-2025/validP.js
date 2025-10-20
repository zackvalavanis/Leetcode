var s = "[]"


// okay so.. we first need to create a variable that assigns what a valid parenthesis is.. 
// Then we need to create a stack
// then we loop through each character.. if char is in valid
// if the char is in valid you want to push the closing bracket into the stack if not.. 


const validParenthesis = (s) => { 
  const valid = { 
    '{':'}', 
    '[':']', 
    '(':')'
  }

  let stack = []

  for(let char of s){
    console.log(stack)
    if(char in valid){ 
      stack.push(valid[char]) // push the closing bracket
    } else if (stack.length === 0 || stack.pop() !== char){ // if stack.pop isnt null or stack.pop !== char
      return false
    }
  }
  return stack.length === 0
}

console.log(validParenthesis(s))


