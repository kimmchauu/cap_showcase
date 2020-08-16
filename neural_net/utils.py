import numpy as np
from numpy.random import randint


def activation_func(x):
    """
    Apply sigmoid function on input. Can apply to matrices.

    Args:
        x (int/float/list/matrix): list or matrix of numbers.

    Returns:
        [x]: Same 2, size as input, sigmoid applied.
    """
    sigmoid = 1 / (1 + np.exp(-x))
    return sigmoid


# def gradient_desc():
def create_nodes(n_layers, n_nodes_hl, n_features):
    """Generate network of nodes. 

    Args:
        n_layers ([type]): Number of hidden layers
        n_nodes_hl ([type]): Nodes in hidden layers
        n_features ([type]): Number of input features
    """
    network = [[randint(2, size=(n_features, 1))]]
    for i in range(1, n_layers + 1):
        network.append(randint(2, size=(n_nodes_hl, 1)))
    network.append(randint(2, size=(1, 1)))
    return network


def create_theta_dict(n_layers, n_nodes_hl, n_features):
    """
    Create theta matrices inside dictionary. 
    Built on the assumption the final layer has 1 node. 
    Currently sets all matrices = 0's. 
    """
    thetas = dict()
    thetas[0] = randint(2, size=(n_nodes_hl, n_features))
    for i in range(1, n_layers):
        thetas[i] = randint(2, size=(n_nodes_hl, n_nodes_hl))
    thetas[n_layers] = randint(2, size=(1, n_nodes_hl))
    return thetas


def forward_propagation(features, thetas):

    for i in range(0,len(thetas)):
        


print(create_theta_dict(2, 3, 1))
# network = create_nodes(2, 3, 1)
# print(network)
