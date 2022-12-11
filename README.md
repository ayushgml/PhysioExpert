# PhysioExpert

## How to run
Running the project will require 2 terminal. One for backend server and one for frontend react app.

### Open a terminal:
```
cd api
python app.py
```

### Open second terminal:
```
cd frontend/src
npm install
npm start
```

# About the project
High rates of misdiagnosis and inefficiency in the current medical system are a core problem of today’s healthcare 
industry. A solution for this problem comes in the form of substantial amounts of unstructured electronic reports 
that can be generated efficiently and transferred around much faster than hard copies of paper. This project 
utilizes methods of applying Natural Language Processing (NLP) on these various reports, specifically on medical 
transcripts generated after going for a test, to bypass extra appointments and referrals with doctors and provide 
the patient with an accurate report that guides them as to which specialist they should see and what their possible 
diagnosis could be.

This application decreases the misdiagnosis rates and increases clinical productivity in medical clinics, along 
with normalizing the use of a tool by the patient which can reduce the significant time consuming process of getting 
your treatment done. The project currently uses Logistic Regression, Random Forest, SVM, LSTM and CNN-LSTM models. And after comprising 
all these models, I came to the conclusion that deep learning models work better in identifying the gastroenterology 
and gynecology class while machine learning models work better in orthopedic and neurology classes. So I decided to 
use the Ensemble approach to provide the best accuracy in all the cases. Following all these approaches, the model 
performed best with an accuracy of 95.31% but the novel thing about our model is that it takes into account 6 different 
classes rather than 3 or 4 which have been utilized before in any other models increasing the overall efficiency and 
inclusion of a wide range of health conditions.

