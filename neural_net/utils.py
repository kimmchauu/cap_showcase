import numpy as np


def activation_func(x):
    """
    Apply sigmoid function on input. Can apply to matrices.

    Args:
        x (int/float/list/matrix): list or matrix of numbers.

    Returns:
        [x]: Same shape as input, sigmoid applied.
    """
    sigmoid = 1 / (1 + np.exp(-x))
    return sigmoid


# def gradient_desc():


def theta_func(n_layers, n_nodes_hl, n_features):
    """
    Create theta matrices inside dictionary. 
    Built on the assumption the final layer has 1 node. 
    Currently sets all matrices = 0's. 
    """
    ### PROBLEM HERE WITH MAT DIMENSIONS FIX ###
    thetas = dict()
    thetas[0] = np.zeros(shape=(n_features, n_nodes_hl))
    for i in range(1, n_layers + 1):
        thetas[i] = np.zeros(shape=(n_features, n_features))
    thetas[n_layers + 1] = np.zeros(shape=(1, n_features))
    return thetas


print(theta_func(1, 2, 3))
