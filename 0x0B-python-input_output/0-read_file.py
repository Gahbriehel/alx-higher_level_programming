#!/usr/bin/python3
"""Module 0-read_file.
Defines a read_file function.
"""


def read_file(filename=""):
    """Reads from filename and prints
    its contents to stdout.
    Args:
        - filename: name of the file
    """

    with open(filename) as f:
        text = f.read()
        print(text, end="")
