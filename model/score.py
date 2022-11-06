import json
import joblib

from azureml.core import Model

def init():
    global model
    model_name = 'specialist-model'
    path = Model.get_model_path(model_name)
    model = joblib.load(path)

def run(data):
    try:
        data = json.loads(data)
        result = model.predict(data['data'])
        return {'data' : result , 'message' : "Successfully classified medical specialty"}

    except Exception as e:
        error = str(e)
        return {'data' : error , 'message' : 'Failed to classify medical specialty'}