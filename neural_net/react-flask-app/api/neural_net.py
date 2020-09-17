import numpy as np
import math
import random
# from scipy.optimize import fmin_bfgs
# from scipy.optimize import minimize
# from scipy.optimize import fmin
from utils import *


class NeuralNet:
    """A simple neural network. 
    """

    def __init__(self, n_h_layers=2, n_nodes_hl=4):
        """
        Args:
            model_name (string): name of model
            n_layers (int): number of hidden layers
            n_features (int): number of features from input
            n_nodes_hl (int): Number of nodes in hidden layers
        """
        self.n_features = 3
        self.n_h_layers = n_h_layers
        self.n_nodes_hl = n_nodes_hl
        self.n_classes = 7

    def set_model(self, n_h_layers, n_nodes_hl):
        self.n__h_layers = n_h_layers
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
        train = 1
        self.generate_training_data()
        # TODO get optimisation working

        if train == 1:
            self.thetas = create_theta_dict(
                self.n_features, self.n_h_layers, self.n_nodes_hl, self.n_classes
            )
            cur_cost = self.cost_func(self.thetas)
            # changed this to 100 for demo
            for i in range(100):
                new_thet = create_theta_dict(
                    self.n_features, self.n_h_layers, self.n_nodes_hl, self.n_classes
                )
                new_cost = self.cost_func(new_thet)
                if new_cost < cur_cost:
                    print("updated")
                    cur_cost = new_cost
                    print(cur_cost)
                    self.thetas = new_thet
                else:
                    continue

        elif train == 2:
            self.thetas = create_theta_dict(
                self.n_features, self.n_h_layers, self.n_nodes_hl, self.n_classes
            )
            J_history = []
            alpha = 0.3
            unrolled, self.dimensions = unroll_thetas(self.thetas)
            for i in range(100):
                cost, grad = self.cost_with_grad(unrolled)
                unrolled = unrolled - (alpha * grad)
                J_history.append(cost)
            self.thetas = reroll_thetas(unrolled, self.dimensions)

        else:
            init_thetas = create_theta_dict(
                self.n_features, self.n_h_layers, self.n_nodes_hl, self.n_classes
            )
            unrolled_thet, self.dimensions = unroll_thetas(init_thetas)
            fmin_bfgs(self.cost_with_grad, unrolled_thet, maxiter=400)

    def cost_with_grad(self, unrolled_thetas):
        thetas = reroll_thetas(unrolled_thetas, self.dimensions)
        Delta = {i: np.zeros(shape=thetas[i].shape) for i in thetas.keys()}
        delt = {i: 0 for i in range(1, self.n_h_layers + 2)}

        cost = self.cost_func(thetas)

        # LOOP THROUGH EACH COLOUR IN DATASET
        for i, colour in enumerate(self.training_set):
            # FORWARD PROPAGATE COLOUR
            activations = forward_propagation(colour, thetas)
            activations = {
                i: activations[i][np.newaxis] for i in range(len(activations))
            }
            no_layers = len(activations)

            delt[len(delt)] = (
                activations[len(activations) - 1] - self.true_res[i][np.newaxis]
            )
            # print(delt)
            # print(Delta)
            Delta[len(Delta) - 1] = (
                Delta[len(Delta) - 1]
                + delt[len(delt)].T @ activations[len(activations) - 2]
            )
            # GET ERRORS IN EACH LAYER
            for j in range(no_layers - 2, 0, -1):
                delt[j] = (delt[j + 1] @ thetas[j]) * sigmoid_grad(activations[j])

            # GET PARTIAL DERIVATES OF COST
            for k in range(no_layers - 3, -1, -1):
                Delta[k] = Delta[k] + delt[k + 1].T @ activations[k]

        D = {i: Delta[i] / no_layers for i in Delta.keys()}
        D_unrolled, _ = unroll_thetas(D)
        return cost, D_unrolled
        # return cost

    def predict(self, features):
        """Make prediction given a set of features.

        Args:
            features (np.array): RGB values

        Returns:
            [np.array]: array with boolean classification
        """
        self.network = forward_propagation(features, self.thetas)
        final_layer = self.network[len(self.network) - 1]
        prediction = np.argmax(final_layer)
        return prediction

    def generate_training_data(self):
        """Randoml generate a list of training data
            and a list of corresponding 'true values'
        """
        self.training_set = []
        self.true_res = []
        rainbow = np.array(
            [
                [148, 0, 211],
                [75, 0, 130],
                [0, 0, 255],
                [0, 255, 0],
                [255, 255, 0],
                [255, 127, 0],
                [255, 0, 0],
            ],
            dtype=np.float128,
        )
        options = [0, 1, 2, 3, 4, 5, 6]
        for i in range(0, 1000):
            res = [0, 0, 0, 0, 0, 0, 0]
            ind = random.choice(options)
            res[ind] = 1
            self.training_set.append(rainbow[ind])
            self.true_res.append(res)

        self.training_set = np.array(self.training_set)
        self.true_res = np.array(self.true_res)

    def cost_func(self, thetas):
        """Find cost of predictions 

        Returns:
            [float]: distance between predicted and known 
        """
        # thetas = reroll_thetas(thetas, self.dimensions)

        acc = 0
        for i, colour in enumerate(self.training_set):
            result = forward_propagation(colour, thetas)
            acc = acc + np.sum(
                self.true_res[i] * np.log(result[len(result) - 1])
                + (1 - self.true_res[i]) * np.log(1 - result[len(result) - 1])
            )
        cost = -1 / len(self.training_set) * acc
        return cost