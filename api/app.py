from flask import Flask, render_template, request, jsonify
import pickle
from model import MedicalSpeciality

app = Flask(__name__)

transcript = ""
finalized_model = None

@app.route('/')
def hello():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def getresult():
    global transcript
    global finalized_model
    if request.method == 'POST':
        transcript = request.form['transcript']
        
    finalized_model = pickle.load(open('/Users/ayushgupta/Downloads/Programming/PhysioExpert/api/model.pkl', 'rb'))
    result = finalized_model.final_prediction(transcript)
    return {'data' : result }

if __name__ == '__main__':
    app.run(debug=True)