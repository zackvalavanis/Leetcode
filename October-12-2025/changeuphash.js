// You are given a hash in format #A, and you are to return the same data as a hash using format #B, as specified below:

// Input:

// {
// 1 => ["A", "E", "I", "O", "U"]
// }

var hash = {
  1 : ["A", "E", "I", "O", "U"]
}

const update = (hash) => { 
  var newHash = {}

  for(let key in hash){ 
    for(let val of hash[key])
      newHash[val] = parseInt(key)
  }
  return newHash
}

console.log(update(hash))
