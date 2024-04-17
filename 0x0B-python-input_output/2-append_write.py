#!/usr/bin/python3
"""Defines function append_write"""


def append_write(filename="", text=""):
    """appends text to filename.
    Args:
        - filename: name of the file.
        - text: string to be appended
    Returns: the number of characters added
    """
    with open(filename, mode='a+', encoding='utf-8') as my_file:
        return my_file.write(text)
