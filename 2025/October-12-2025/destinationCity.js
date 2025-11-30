var paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]

const destinationCity = (paths) => { 
  let start = new Set()

  for(let [from, to] of paths){
    start.add(from)
  }

  for(let [from, to] of paths){ 
    if(!start.has(to)){ 
      return to
    }
  }
}

console.log(destinationCity(paths))