// Input: [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]

var input = [1, 2, 3, 4, 5]

const rev = (input) => { 
  let left = 0; 
  let right = input.length - 1; 

  while(left < right){ 
    let num = input[left]
    input[left] = input[right]
    input[right] = num
    left++
    right--
  }
  return input

}

console.log(rev(input))