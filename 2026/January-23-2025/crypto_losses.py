annual_rate = 0.65
loss_per_day = annual_rate / 365
initial_investment = 15000
month = 1
withdrawal = 100



def crypto_investment(loss_per_day: float, initial_investment: int, month: int, withdrawal: int) -> str: 
  day_total = 0
  starting_amount = initial_investment

  while initial_investment > starting_amount / 2: 
    if month == 1: 
      initial_investment -= withdrawal
    initial_investment = initial_investment - (initial_investment * loss_per_day)

    month+= 1
    day_total += 1
    if month > 30: 
      month = 1

  months = day_total // 30
  days = day_total % 30

  return(f"{months} months and {days} days")
  

print(crypto_investment(loss_per_day, initial_investment, month, withdrawal))
  

