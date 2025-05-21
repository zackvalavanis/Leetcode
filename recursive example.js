function count(i) { 
  if(i > 10)
    return 
  console.log(i)
  count(i + 1)
  return
}

console.log(count(10))