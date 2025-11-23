# Simple Interest Calculator

p = float(input("Enter Principal Amount: "))
r = float(input("Enter Rate of Interest: "))
t = float(input("Enter Time in Years : "))

simple_interest = (p * r * t) / 100

print("Simple Interest =", simple_interest)
