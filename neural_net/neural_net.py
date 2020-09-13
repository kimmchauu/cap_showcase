import numpy as np
import math
from utils import *


class NeuralNet:
    """A simple neural network. 
    """

    def __init__(self, n_layers=2, n_nodes_hl=3, n_features=3, n_outnodes=3):
        """
        Args:
            model_name (string): name of model
            n_layers (int): number of hidden layers
            n_features (int): number of features from input
            n_nodes_hl (int): Number of nodes in hidden layers
        """
        self.n_features = n_features
        self.n_layers = n_layers
        self.n_nodes_hl = n_nodes_hl
        self.n_outnodes = n_outnodes

    def set_model(self, n_layers, n_features, n_nodes_hl):
        self.n_layers = n_layers
        self.n_features = n_features
        self.n_nodes_hl = n_nodes_hl

    def get_network(self):
        """Return network (nodes)

        Returns:
            [list of np arrays]: Each np array is a layer of nodes. First array is input features. 
        """
        return self.network

    def train_model(self):
        """Train thetas matrices that dictate network propagation. 
        """
        self.thetas = create_theta_dict(
            self.n_features, self.n_layers, self.n_nodes_hl, self.n_outnodes
        )

    def predict(self):

        """
        Code will happen here
        """
        self.network = forward_propagation([12, 8, 20], self.thetas)
        return 0.8

