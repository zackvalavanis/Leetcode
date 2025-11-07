from typing import List

matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]

def update(matches: List[List[int]]) -> List[List[int]]: 
  loser_count = {}
  total_count = set()

  for winners, losers in matches: 
    loser_count[losers] = loser_count.get(losers, 0) + 1
    total_count.add(winners)
    total_count.add(losers)

  one_loss = []
  zero_loss = []
  
  for player, counts in loser_count.items():
    if counts == 1: 
      one_loss.append(player)
  
  for player in total_count: 
    if player not in loser_count: 
      zero_loss.append(player)

  one_loss.sort()
  zero_loss.sort()
  return [zero_loss, one_loss]

print(update(matches))

