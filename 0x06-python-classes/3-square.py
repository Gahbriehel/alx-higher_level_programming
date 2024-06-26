#!/usr/bin/python3

"""Define a class Square"""


class Square:
    """Rep a square"""

    def __init__(self, size=0):
        """Init a new Square

        Args:
            size (int): The size of the new square
        """
        if not isinstance(size, int):
            raise TypeError("size must be an integer")
        elif size < 0:
            raise ValueError("size must be >= 0")
        self.__size = size

    def area(self):
        """Rerutn the current area of the square"""
        return (self.__size * self.__size)
