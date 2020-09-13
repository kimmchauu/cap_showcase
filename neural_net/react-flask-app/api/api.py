import time
from flask import Flask

# create app instance
app = Flask(__name__)

# example route that returns time to show on react front end
@app.route('/time')
def get_current_time():
    return {'time': time.time()}