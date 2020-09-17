import numpy as np
from neural_net import *
from utils import *

n_features = 3
n_layers = 2
n_nodes_hl = 4
n_classes = 7

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
feature1 = np.array([[255], [255], [255]], dtype=np.float128) / 255
feature2 = np.array([[0], [0], [0]], dtype=np.float128) / 255
""" Initialise class """
neural = NeuralNet()
""" Train model (currently just creates randomly filled theta matrices)
    this won't need user interaction asides from clicking button to use method
"""
# neural.generate_training_data()

neural.train_model()
# print(neural.thetas)
# print(neural.get_network())
print(neural.predict(feature1))
print(neural.get_network())

print(neural.predict(feature2))
print(neural.get_network())
# print(neural.cost_func())
""" Make prediction using the features array above """
# pred = neural.predict(features)
# print(f"\nPrediction is class number: \n {pred} \n")

# for i, layer in enumerate(neural.get_network().values()):
#     print(f"Layer {i} is : \n {layer}")
""" Just looped through the dictionary that contains the network to demonstrate
    what it looks like. Dictionary layers are labelled with integers 0 -> final layer """


# print(create_theta_dict(n_features, n_layers, n_nodes_hl, n_classes))


# thetas = {
#     0: np.array(
#         [
#             [1.67518364, 1.33664842, 0.82150495],
#             [1.73722026, 1.29546899, 0.83927795],
#             [2.39114577, 1.82388514, 1.52275804],
#             [0.77570546, 0.61528615, 0.63163221],
#         ]
#     ),
#     1: np.array(
#         [
#             [5.93550478, 5.68483037, 5.78114132, 5.07231937],
#             [18.52599931, 17.63146524, 18.58495269, 15.33009096],
#             [9.60434088, 9.25933017, 9.93600228, 7.8902654],
#             [5.11981647, 4.99873702, 5.04216709, 4.38524074],
#         ]
#     ),
# }

# unrolled, dimensions = unroll_thetas(thetas)
# print(f"UNROLLED: {unrolled}\n")
# print(f"DIMENSIONS: {dimensions}\n")
# rolled = reroll_thetas(unrolled, dimensions)
# print(f"ROLLED: {rolled}")
