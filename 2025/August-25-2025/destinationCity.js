
// Code
// Testcase
// Test Result
// Test Result
// 1436. Destination City
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.


// Example 1:

// Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
// Output: "Sao Paulo" 
// Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".

var cities = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]

const destinationCity = (cities) => { 
  let start = new Set()

  for(let [from, to] of cities){ 
    start.add(from)
  }


  for(let [from, to] of cities){
    if(!start.has(to)) { 
      return to
    }
  }
}


console.log(destinationCity(cities))
