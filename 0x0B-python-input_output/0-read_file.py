#!/usr/bin/python3

"""Defines a filename read_file function"""

def read_file(filename=""):

    """reads and prints filename to stdout"""

    with open(filename, encoding="utf-8") as my_file:
        print(my_file.read())
