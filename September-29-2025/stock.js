// Input: prices = [10,1,5,6,7,1]

// Output: 6

var prices = [10,1,5,6,7,1]


const stock = (prices) => { 
  let minPrice = prices[0]
  let max = 0; 

  for(let sell of prices){
    max = Math.max(max, sell - minPrice)
    minPrice = Math.min(minPrice, sell)
  }
  return max
}


console.log(stock(prices))