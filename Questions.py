from typing import Dict, List

mountains = {
  "breck": 5, 
  "vail": 12, 
  "copper": 2
}

starting_snow = {
  "breck": 25, 
  "vail": 28, 
  "copper": 40
}

days = int(input("how many days?"))

def snowfall(mountains: Dict[str, int], days: int) -> Dict[str, int]: 
  total_snowfall = {}

  for mountain, daily_snow in mountains.items(): 
    total_snowfall[mountain] = starting_snow[mountain] + (daily_snow * days)
  return total_snowfall


  
print(snowfall(mountains, days))