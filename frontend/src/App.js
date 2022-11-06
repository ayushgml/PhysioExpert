
import Landing from './pages/Landing';
import PatientDashboard from './pages/patient/PatientDashboard';
import DoctorDashboard from './pages/doctor/DoctorDashboard';
import SignIn from './components/SignIn';
import DoctorSignin from './components/DoctorSignin';
import DoctorSignup from './components/DoctorSignup';
import PatientResults from './pages/patient/PatientResults';
import ScheduleAppointment from './pages/patient/ScheduleAppointment';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';


import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route path="/patient" element={<PatientDashboard/>} />
        <Route path="/patientresults" element={<PatientResults/>} />
        <Route path="/scheduleappointment" element={<ScheduleAppointment/>} />
        <Route path="/doctor" element={<DoctorDashboard/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/doctorsignin" element={<DoctorSignin/>} />
        <Route path="/doctorsignup" element={<DoctorSignup/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
