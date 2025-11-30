// Input: digits = [1,2,3]
// Output: [1,2,4]

var digits = [9,9, 9]

const plusOne = (digits) => { 
  for(let i = digits.length -1; i>= 0; i--){
    if(digits[i] < 9){
      digits[i]++
      return digits
    }
    digits[i] = 0;
  }

  digits.unshift(1)
  return digits

}

console.log(plusOne(digits))