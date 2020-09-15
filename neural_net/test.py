import numpy as np
from neural_net import *
from utils import *

# n_features = 3
# n_layers = 2
# n_nodes_hl = 4
# n_outnodes = 3

# thetas = create_theta_dict(n_features, n_layers, n_nodes_hl, n_outnodes)
# features = randint(2, size=(n_features, 1))
features = np.array([[100], [30], [60]]) / 255
# # print(f"thetas = {thetas} \n")
# print(f"features = {features} \n")
# # print(thetas[0] @ features)
# network = forward_propagation(features, thetas)
# print(f"After forward propagation neural net is : \n {network}")

# s1 = activation_func(features, True)
# s2 = 1 - activation_func(features, True)
# siggrad = s1 * s2
# print(siggrad)
# z = np.array([1, 2])
# print(sigmoid_grad(z))

""" Features (ie, RGB values, normalised to between 0 and 1) """
features = np.array([[100], [30], [60]]) / 255
""" Initialise class """
neural = NeuralNet()
""" Train model (currently just creates randomly filled theta matrices)
    this won't need user interaction asides from clicking button to use method 
"""
neural.train_model()
""" Make prediction using the features array above """
pred = neural.predict(features)
print(f"\nPrediction is class number: \n {pred} \n")

for i, layer in enumerate(neural.get_network().values()):
    print(f"Layer {i} is : \n {layer}")
""" Just looped through the dictionary that contains the network to demonstrate 
    what it looks like. Dictionary layers are labelled with integers 0 -> final layer """
