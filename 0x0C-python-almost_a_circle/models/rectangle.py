#!/usr/bin/python3
'''Module for a Rectangle class'''
from models.base import Base


class Rectangle(Base):
    '''
    The Rectangle class inherits from the Base class and
    sets up private instance attributes with public getter and
    setter methods. It also provides a constructor
    for initializing instance values.

    Attributes:
        __width (int): The width of the rectangle.
        __height (int): The height of the rectangle.
        __x (int): The x-coordinate of the rectangle's position.
        __y (int): The y-coordinate of the rectangle's position.
        id (int): The ID of an instance of this class.

    Methods:
        width(self): Returns the current width value.
        width(self, value): Sets the value for width.
        height(self): Returns the current height value.
        height(self, value): Sets the value for height.
        x(self): Returns the current x-coordinate value.
        x(self, value): Sets the value for x-coordinate.
        y(self): Returns the current y-coordinate value.
        y(self, value): Sets the value for y-coordinate.
        __init__(self, width, height, x=0, y=0, id=None): Constructor for
                                             initializing instance values.
        area(self): Returns the area value of the rectangle
        display(self): Prints in stdout the Rectangle instance with
                       the character #
        __str__(self): Returns [Rectangle] (<id>) <x>/<y> - <width>/<height>
        update(self, *args, **kwargs): assigns an argument to each attribute
        to_dictionary(self): Returns the dictionary representation of
                             a Rectanlge instance
    '''

    def __init__(self, width, height, x=0, y=0, id=None) -> None:
        '''
        Constructor for initializing instance values.

        Args:
            width (int): The width of the rectangle.
            height (int): The height of the rectangle.
            x (int): The x-coordinate of the rectangle's position (default 0).
            y (int): The y-coordinate of the rectangle's position (default 0).
            id (int): The ID of an instance of this class (default None).

        Raises:
            TypeError: If either of width or height is not an int.
            ValueError: If either of width or height <= 0.
            TypeError: If either of x or y is not an int.
            ValueError: If either of x or y < 0.

        Returns:
            None.
        '''
        self.__width = width
        self.__height = height
        self.__x = x
        self.__y = y
        super().__init__(id)

    @property
    def width(self) -> int:
        '''Returns/Gets the current width value'''
        return self.__width

    @width.setter
    def width(self, value) -> None:
        '''Sets the value for width.'''
        if not isinstance(value, int):
            raise TypeError("width must be an integer")
        if value <= 0:
            raise ValueError("width must be > 0")
        self.__width = value

    @property
    def height(self) -> int:
        '''Returns/Gets the current height value.'''
        return self.__height

    @height.setter
    def height(self, value) -> None:
        '''Sets the value for height.'''
        if not isinstance(value, int):
            raise TypeError("height must be an integer")
        if value <= 0:
            raise ValueError("height must be > 0")
        self.__height = value

    @property
    def x(self) -> int:
        '''Returns/Gets the current x-coordinate value.'''
        return self.__x

    @x.setter
    def x(self, value) -> None:
        '''Sets the value for x-coordinate.'''
        if not isinstance(value, int):
            raise TypeError("x must be an integer")
        if value < 0:
            raise ValueError("x must be >= 0")
        self.__x = value

    @property
    def y(self) -> int:
        '''Returns/Gets the current y-coordinate value.'''
        return self.__y

    @y.setter
    def y(self, value) -> None:
        '''Sets the value for y-coordinate'''
        if not isinstance(value, int):
            raise TypeError("y must be an integer")
        if value < 0:
            raise ValueError("y must be >= 0")
        self.__y = value

    def area(self) -> int:
        '''Return area of a rectangle'''
        return self.width * self.height

    def display(self):
        '''prints in stdout the Rectangle using the `#` character.'''
        if self.width == 0 or self.height == 0:
            print("")
            return

        for _ in range(self.y):
            print()

        for _ in range(self.height):  # print each row of the rectangle
            print(" " * self.x, end="")  # print x-coordinate spaces
            print("#" * self.width)  # print the row of "#" characters

    def __str__(self):
        """Returns the string representation of the rectangle"""
