import numpy as np
from numpy.random import randint
from numpy.random import random_sample
from numpy.random import rand


def activation_func(x, func):
    """
    Apply sigmoid function on input. Can apply to matrices.

    Args:
        x (int/float/list/matrix): list or matrix of numbers.

    Returns:
        [x]: Same 2, size as input, sigmoid applied.
    """
    if func:
        sigmoid = 1 / (1 + np.exp(-x))
    else:
        sigmoid = np.maximum(0, x)
    return sigmoid


# TODO: Consider ReLU activation

# def gradient_desc():
# def create_nodes(n_layers, n_nodes_hl, n_features):
#     """Generate network of nodes.

#     Args:
#         n_layers ([type]): Number of hidden layers
#         n_nodes_hl ([type]): Nodes in hidden layers
#         n_features ([type]): Number of input features
#     """
#     network = [[randint(2, size=(n_features, 1))]]
#     for i in range(1, n_layers + 1):
#         network.append(randint(2, size=(n_nodes_hl, 1)))
#     network.append(randint(2, size=(1, 1)))
#     return network


def create_theta_dict(n_features, n_layers, n_nodes_hl, n_outnodes):
    """
    Create theta matrices inside dictionary. 
    Built on the assumption the final layer has 1 node. 
    Currently sets all matrices = 0's. 
    """
    thetas = dict()
    thetas[0] = rand(n_nodes_hl, n_features).astype(dtype=np.float128)
    for i in range(1, n_layers):
        thetas[i] = rand(n_nodes_hl, n_nodes_hl).astype(dtype=np.float128)
    thetas[n_layers] = rand(n_outnodes, n_nodes_hl).astype(dtype=np.float128)
    return thetas


def forward_propagation(features, thetas):
    network = {}
    network = {0: features / 255}
    # print(network)
    # print(thetas[0])
    for i in range(0, len(thetas)):
        Z = thetas[i] @ network[i]
        A = activation_func(Z, True)
        network[i + 1] = A

    return network


def sigmoid_grad(z):
    """Gradient of sigmoid function

    Args:
        z (np array or float): [description]

    Returns:
        [np array]: gradient of sigmoid function of z where z == theta*layer.
    """
    ones = np.ones(z.shape)
    s1 = activation_func(z, True)
    s2 = ones - (activation_func(z, True))
    sig_grad = s1 * s2
    return sig_grad


def unroll_thetas(thetas):
    unrolled = np.array([])
    dimensions = []

    for i in thetas.keys():
        dimensions.append(thetas[i].shape)
        unrolled = np.append(unrolled, thetas[i].flatten())
    return unrolled, dimensions


def reroll_thetas(unrolled, dimensions):
    rolled = {}
    start = 0
    for i, mat in enumerate(dimensions):
        elements = [unrolled[start : start + mat[0] * mat[1]]]
        rolled[i] = np.reshape(elements, mat)
        start = start + mat[0] * mat[1]
    return rolled
