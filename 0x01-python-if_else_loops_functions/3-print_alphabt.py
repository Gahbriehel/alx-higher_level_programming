#!/usr/bin/python3
for value in range(97, 123):
    if value == 101 or value == 113:
        continue
    print("{}".format(chr(value)), end='')
