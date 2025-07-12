// you are given an integer array cards where cards[i] represents the value of the ith card. A pair of cards are matching if the cards have the same value.

// Return the minimum number of consecutive cards you have to pick up to have a pair of matching cards among the picked cards. If it is impossible to have matching cards, return -1.


// Example 1:

// Input: cards = [3,4,2,3,4,7]
// Output: 4

var cards = [3,4,2,3,4,7]

const minCards = (cards) => { 
  var lastSeen = new Map()
  var minLength = Infinity

  for(let i = 0; i < cards.length; i++){ 
    let card = cards[i]
    
    if(lastSeen.has(card)){ 
      const prevIndex = lastSeen.get(card)
      minLength = Math.min(minLength, i - prevIndex + 1)
    } 
    lastSeen.set(card, i)
  }
  return minLength === Infinity ? -1 : minLength
}

console.log(minCards(cards))