#!/usr/bin/python3
def square_matrix_simple(matrix=[]):
    new_matrix = []
    for num in matrix:
        new_matrix.append(list(map(lambda x: x * x, num)))
    return new_matrix
