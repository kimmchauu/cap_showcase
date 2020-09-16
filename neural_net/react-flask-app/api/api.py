import time
from flask import Flask, request, jsonify
import numpy as np

from neural_net import *
from utils import *

# create app instance
app = Flask(__name__)

# example route that returns time to show on react front end
@app.route('/time')
def get_current_time():
    return {'time': time.time()}

# predict route method, needs rgb values, num of hidden layers, and num of nodes
@app.route("/predict", methods=["POST"])
def post_predict():
    data = request.get_json()
    print(data)
    print("red: ", data["redValue"])
    print("green: ", data["greenValue"])
    print("blue: ", data["blueValue"])
    print("num hidden layers: ", data["numHiddenLayers"])
    print("num nodes: ", data["numNodes"])

    # features - rbg values (normalised between 0 and 1)
    features = np.array([[data["redValue"]], [data["greenValue"]], [data["blueValue"]]]) / 255
    # Initialise neural net class which takes in num hidden layers, and num nodes
    neural = NeuralNet(data["numHiddenLayers"], data["numNodes"])
    """ Train model (currently just creates randomly filled theta matrices)
    this won't need user interaction asides from clicking button to use method 
    """
    # TODO: move this out of the predict function
    neural.train_model()
    # Make prediction using the features array above 
    pred = neural.predict(features)

    # return class it thinks it is for now, will expanded this to return the weights as well
    print(f"\nPrediction is class number: \n {pred} \n")
    # The return type must be a string, dict, tuple, Response instance, or WSGI callable
    return str(pred)