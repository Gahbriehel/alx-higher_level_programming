#!/usr/bin/python3
def uppercase(str):
    for letter in str:
        temp = letter
        if ord(temp) > 96 and ord(temp) < 123:
            temp = chr(ord(letter) - 32)
        print("{}".format(temp), end='')
    print()
