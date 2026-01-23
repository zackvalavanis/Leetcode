# 1.	Apartment A – 600 square feet, pets allowed, $1400/month
# 2.	Apartment B – 800 square feet, no pets, $1600/month
# 3.	Apartment C – 1000 square feet, pets allowed, $1800/month

from typing import Dict, List

apartments = {
    "a": {"sq_ft": 600, "pets": "Y", "cost": 1400},
    "b": {"sq_ft": 800, "pets": "N", "cost": 1600},
    "c": {"sq_ft": 600, "pets": "Y", "cost": 1800}
}

min_sq_feet = int(input("whats the minimum square footage you'd take?"))
pets = input("Pets allowed? (Y or N)").upper()
max_monthly_payment = int(input("whats the max monthly payment?"))

def matches(apartments: Dict[str, Dict[str, any]], min_sq_feet: int, pets: str, max_monthly_payment: int) -> Dict[str, Dict[str, any]]:
  result = {}

  for apt, info in apartments.items(): 
    if info["sq_ft"] >= min_sq_feet and info["pets"] == pets and info["cost"] <= max_monthly_payment:
      result[apt] = info
  return result

print(matches(apartments, min_sq_feet, pets, max_monthly_payment))
