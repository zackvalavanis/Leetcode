
var height = [1,7,2,5,4,7,3,6]



// Brute Force Method: 

const area = (height) => {
  let res = 0;

  for(let left = 0; left < height.length; left++){
    for(let right = left + 1; right < height.length; right++){
      let area = (right-left) * Math.min(height[left], height[right])
      res = Math.max(res, area)
    }
  }
  return res
}

// console.log(area(height))

// Linear method

const areaII = (height) => { 
  let left = 0; 
  let right = height.length - 1
  let maxArea = 0; 

  while(left < right){
    let area = (right - left) * Math.min(height[left], height[right])
    maxArea = Math.max(maxArea, area)
    
    if(height[left] < height[right]){ 
      left++
    } else { 
      right--
    }
  }
  return maxArea
}


console.log(areaII(height))