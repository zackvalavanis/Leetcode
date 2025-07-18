var numbers = [1,2,3,4]

const reverseNumbers = (numbers) => { 
  left = 0; 
  right = numbers.length - 1;

  while(left < right){ 
    let temp = numbers[left]
    numbers[left] = numbers[right]
    numbers[right] = temp
    left++ 
    right--
  }
  return numbers
}

console.log(reverseNumbers(numbers))