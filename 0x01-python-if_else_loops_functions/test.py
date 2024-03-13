#!/usr/bin/python3
import random

# Generate a random signed number
number = random.randint(-10000, 10000)

# Extract the last digit
last_digit_str = str(number)[-1]
if last_digit_str.isdigit():
    last_digit = int(last_digit_str)
else:
    last_digit = int(last_digit_str + str(number)[-2])

print("Random number:", number)
print(f"Last digit of number is {last_digit}")

if last_digit > 5:
    print(f"Last digit of {number} is {last_digit} and is greater than 5")
elif last_digit == 0:
    print(f"Last digit of {number} is {last_digit} and is 0")
else:
    print(f"Last digit of {number} is {last_digit} and is less than 6 and not 0")

