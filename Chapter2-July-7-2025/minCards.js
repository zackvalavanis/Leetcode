// You are given an integer array cards where cards[i] represents the value of the ith card. A pair of cards are matching if the cards have the same value.

// Return the minimum number of consecutive cards you have to pick up to have a pair of matching cards among the picked cards. If it is impossible to have matching cards, return -1.

// Input: cards = [3,4,2,3,4,7]
// Output: 4

var cards = [3,4,2,3,4,7]


const mins = (cards) => { 
  var lastSeen = new Map()
  var minLength = Infinity

  for(let j = 0; j < cards.length; j++){ 
    const card = cards[j]

    if(lastSeen.has(card)){ 
      const prevIndex = lastSeen.get(card)
      minLength = Math.min(minLength, j - prevIndex + 1)
    }
    lastSeen.set(card, j)
  
  }
  return minLength === Infinity ? -1 : minLength
}

console.log(mins(cards))