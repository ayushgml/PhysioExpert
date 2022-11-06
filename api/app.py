from flask import Flask, render_template, request, jsonify
import pickle
from model import MedicalSpeciality

app = Flask(__name__)

@app.route('/')
def hello():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def submit():
    if request.method == 'POST':
        transcript = request.form['transcript']
    
    model = pickle.load(open('/Users/ayushgupta/Downloads/Programming/PhysioExpert/model/model.pkl', 'rb'))
    result = model.final_prediction(transcript)
    
    return render_template('predict.html', s=result)

if __name__ == '__main__':
    app.run(debug=True)