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

# will pass in RGB, but need to turn that into array and normalise ite.g. features = np.array([[100], [30], [60]]) / 255 then pass features into predict
@app.route("/predict", methods=["POST"])
def post_predict():
    data = request.get_json()
    print(data)
    print("red: ", data["redValue"])
    print("green: ", data["greenValue"])
    print("blue: ", data["blueValue"])
    print("num hidden layers: ", data["numHiddenLayers"])
    print("num nodes: ", data["numNodes"])
    return data