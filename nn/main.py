
import numpy as np

inputs = np.array([1, 2, 3, 2.5])  # Ensure inputs is a NumPy array

weights = np.array([
    [0.2, 0.8, -0.5, 1],  
    [0.5, -0.91, 0.26, -0.5], 
    [-0.26, -0.27, 0.17, 0.87]
])  # Ensure weights is a NumPy array

bias = np.array([2.0, 3.0, 0.5])  # Bias should match the number of neurons (3)

output = np.dot(weights, inputs) + bias
print(output)

""" weights = [[0.2, 0.8, -0.5, 1,0],
           [0.5, -0.91, 0.26, -0.5],
           [-0.26, -0.27, 0.17, 0.87]]

biases = [2, 3, 0.5]

some_value = 0.5
weight = 0.7
bias = 0.7

print(some_value*weight)
print(some_value*bias) """


        