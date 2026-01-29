annual_rate = float(input("How many percentage points does the investment lose per year?"))
loss_per_day = (annual_rate / 100) / 365
initial_investment = int(input("whats the initial investment?"))
month = 1
withdrawal = int(input("how much will you withdraw monthly?"))



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

  return f"{months} months and {days} " + ("days" if days != 1 else "day")
  

print(crypto_investment(loss_per_day, initial_investment, month, withdrawal))
  

