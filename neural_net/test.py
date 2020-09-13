import numpy as np
from neural_net import *
from utils import *

# n_features = 2
# n_layers = 2
# n_nodes_hl = 3
# n_outnodes = 2

# thetas = create_theta_dict(n_features, n_layers, n_nodes_hl, n_outnodes)
# features = randint(2, size=(n_features, 1))
# # print(f"thetas = {thetas} \n")
# print(f"features = {features} \n")
# # print(thetas[0] @ features)
# network = forward_propagation(features, thetas)
# print(f"After forward propagation neural net is : \n {network}")

# z = np.array([1, 2])
# print(sigmoid_grad(z))

neural = NeuralNet()
neural.train_model()
neural.predict()
print(neural.get_network())
