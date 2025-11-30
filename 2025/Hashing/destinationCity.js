// 1436. Destination City
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.


var paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]


const destination = (paths) => { 
  const startingCities = new Set()

  for(let [from, to] of paths){ 
    startingCities.add(from)
  }

  for(let [from, to] of paths){ 
    if(!startingCities.has(to)){ 
      return to
    }
  }
}

console.log(destination(paths))