var p = '()'

const validParenthesis = () => { 
  
  parenth = {
    '[': ']', 
    '{': '}', 
    '(': ')'
  }

  let stack = []

  for(let char of p){
    if(char in parenth){
      stack.push(parenth[char])
    } else { 
      if(stack.length === 0 || stack.pop() !== char){ 
        return false
      }
    }
  }
  return stack.length === 0
}

console.log(validParenthesis(p))