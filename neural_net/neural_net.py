import numpy as np
import math
from utils import *


class NeuralNet:
    """A simple neural network. 
    """

    def __init__(self, n_layers=2, n_nodes_hl=4):
        """
        Args:
            model_name (string): name of model
            n_layers (int): number of hidden layers
            n_features (int): number of features from input
            n_nodes_hl (int): Number of nodes in hidden layers
        """
        self.n_features = 3
        self.n_layers = n_layers
        self.n_nodes_hl = n_nodes_hl
        self.n_classes = 7

    def set_model(self, n_layers, n_features, n_nodes_hl):
        self.n_layers = n_layers
        self.n_features = n_features
        self.n_nodes_hl = n_nodes_hl

    def get_network(self):
        """Return network (nodes)

        Returns:
            [dictionary]: Each np array is a layer of nodes. First array is input features. 
        """
        return self.network

    def train_model(self):
        """Train thetas matrices that dictate network propagation. 
        """
        self.thetas = create_theta_dict(
            self.n_features, self.n_layers, self.n_nodes_hl, self.n_classes
        )

    def predict(self, features):
        """
        
        """
        self.network = forward_propagation(features, self.thetas)
        final_layer = self.network[len(self.network) - 1]
        prediction = np.argmax(final_layer)
        return prediction

