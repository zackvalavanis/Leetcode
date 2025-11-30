
// Code
// Testcase
// Test Result
// Test Result
// 1496. Path Crossing
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

// Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.

var path = "NESWN"

const crossingPaths = (path) => { 
  let directions = { 
    'N': [0,1],
    'S': [0, -1], 
    'W': [-1, 0], 
    'E': [1, 0],
  }

  let visited = new Set()
  visited.add('0,0')
  let x = 0; 
  let y = 0;

  for(let dir of path){ 
    const [dx,dy] = directions[dir]
    x += dx
    y += dy

    const pos = `${x}, ${y}`;

    if(visited.has(pos)){ 
      return true
    }
    visited.add(pos)
  }
  return false
  
}

console.log(crossingPaths(path))