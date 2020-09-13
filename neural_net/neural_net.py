import numpy as np 
import math


class NeuralNet:
    """A simple neural network. 
    """
    def __init__(self, model_name): 
        """
        Args:
            model_name (string): name of model
            n_layers (int): number of hidden layers
            n_features (int): number of features from input
            n_nodes_hl (int): Number of nodes in hidden layers
        """
        self.model_name = model_name
        
    def set_model(self,n_layers, n_features, n_nodes_hl):
        self.n_layers = n_layers
        self.n_features = n_features
        self.n_nodes_hl = n_nodes_hl
        
    def get_network(self):
        return self.network 

    def train_model(self):
    
    def predict(self):
    
    
    