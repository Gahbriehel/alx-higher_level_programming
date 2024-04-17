#!/usr/bin/python3
"""Defines function write_file"""


def write_file(filename="", text=""):
    """writes text to filename.
    Args:
        - filename: name of the file.
        - text: string to be written
    Returns: the number of characters written
    """
    with open(filename, mode='w+', encoding='utf-8') as my_file:
        return my_file.write(text)
