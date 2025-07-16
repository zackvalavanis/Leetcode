// 1496. Path Crossing
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

// Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.

var path = "NES"

const pathsCrossing = (path) => { 
  var directions = { 
    "N": [0, 1], 
    "S": [0, -1], 
    "E": [1, 0], 
    "W": [-1, 0]
  }

  let map = new Set()
  let x = 0, y = 0
  map.add('0,0')

  for(let i = 0; i < path.length; i++){ 
    const dir = directions[path[i]]
    x += dir[0]
    y += dir[1]
    const pos = `${x}, ${y}`
    if(map.has(pos)){ 
      return true
    }
    map.add(pos)
  }
  return false
}

console.log(pathsCrossing(path))