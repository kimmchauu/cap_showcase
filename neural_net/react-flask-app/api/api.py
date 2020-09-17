import time
from flask import Flask, request, jsonify
import numpy as np
import json

from neural_net import *
from utils import *
    

neural = NeuralNet()

# create app instance
app = Flask(__name__)

# example route that returns time to show on react front end
@app.route('/time')
def get_current_time():
    return {'time': time.time()}


@app.route('/train', methods=["POST"])
def post_train():
    data = request.get_json()
    print("num hidden layers: ", data["numHiddenLayers"])
    print("num nodes: ", data["numNodes"])

    neural.set_model(data["numHiddenLayers"], data["numNodes"])
    neural.train_model()

    # keep adding to this to add more to response
    resp_dict = {
        "response_message": "Model Trained",
    }
    return resp_dict



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
    # neural = NeuralNet(data["numHiddenLayers"], data["numNodes"])
    """ Train model (currently just creates randomly filled theta matrices)
    this won't need user interaction asides from clicking button to use method 
    """
    # TODO: move this out of the predict function
    #neural.train_model()
    # Make prediction using the features array above 
    pred = neural.predict(features)

    # for some reason, can't just return network it says it's not a dict when it is..
    network = neural.get_network()
    final_layer = network[len(network) - 1]
    print ("pred", type(pred))
    print("final layer", final_layer)
    # Have to do serialization
    final_layer_list = final_layer.tolist()
    final_layer_string = str(final_layer_list)
    remove_brackets = ["[", "]"]
    for character in remove_brackets:
        final_layer_string = final_layer_string.replace(character, "")
    final_layer_json = json.dumps(final_layer_string)

    # keep adding to this to add more to response
    resp_dict = {
        "final_layer": final_layer_json,
        "predClassNum": str(pred)
    }
    return resp_dict
