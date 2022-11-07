import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './Signin.css';

export default function ResultsCard() {
    // const [doctor, setDoctor] = useState({})
    

    // const getData =  () => {
    //     const url = "https://iwp-backend.vercel.app/doctor/get_specialization"
    //     const body = {
    //         "specialization": "Cardiologist"
    //     }
    //     try {
    //         const response =  axios.post(url, body)
    //         setTimeout(100000)
    //         setDoctor(response.data)
    //         console.log(response.data)
    //     }
    //     catch (err) {
    //         console.log(err)
    //     }
    // }
    const result = localStorage.getItem('prediction')
    const transcription = localStorage.getItem('transcription')
    const [formData, setFormData] = useState(localStorage.getItem('formData') ? JSON.parse(localStorage.getItem('formData')) : []);
    console.log(formData);


    

    const handleClick = (e) => {
        e.preventDefault()
        // getData()
        // console.log(doctor)
        // localStorage.setItem("doctor", JSON.stringify(doctor))
        window.location.href = "/scheduleappointment"
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <div className='card' style={{ backgroundColor: '#F5F5F5F0', width: '70%', height: 'auto', borderRadius: '16px', display: 'flex', justifyContent: 'start' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginLeft: '5%', marginRight:'5%' }}>

                    <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'baseline', flexDirection: 'column' }}>
                        {/* Patient info */}
                        <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'baseline', flexDirection: 'column' }}>
                        <p style={{ color: '#01282D', fontSize: '16px', fontWeight: 'bold', marginTop: '10%' }}>Patient Name: <span style={{ fontWeight: '400' }}>{formData.Name}</span></p>
                            <p style={{ color: '#01282D', fontSize: '16px', fontWeight: 'bold' }}>Patient Email: <span style={{ fontWeight: '400' }}>{formData.Email}</span></p>
                            <p style={{ color: '#01282D', fontSize: '16px', fontWeight: 'bold', textAlign:'justify' }}>Patient Transcript: <span style={{ fontWeight: '400' }}>{formData.transcript }</span></p>
                        </div>
                        {/* Results */}
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', flexDirection: 'column' }}>
                            <p style={{ color: '#', fontSize: '20px', fontWeight: 'bold', alignItems: 'center' }}>Results</p>
                            {/* <p style={{ color: '#01282D', fontSize: '16px', fontWeight: 'bold'}}>Recommended Specialist:  <span style={{ fontWeight: '400' }}>Thaman Muthappa</span></p> */}
                            <p style={{ color: '#01282D', fontSize: '16px', fontWeight: 'bold', textAlign:'justify' }}>Recommended Treatment: <span style={{ fontWeight: '400' }}>{result}</span></p>
                        </div>
                    </div>
                    {/* Two buttons */}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', flexDirection: 'row', marginBottom: '5%' }}>
                        <button style={{  height: '40px', borderRadius: '8px', border: 'none', backgroundColor: '#01282D', color: '#F5F5F5', fontSize: '12px', fontWeight: 'bold', marginTop: '10px', marginRight: '10%', whiteSpace: 'nowrap' }}>
                            <a href="/patient" style={{ textDecoration: 'none', color: '#F5F5F5' }}>New Transcription</a>
                        </button>
                        <button style={{ height: '40px', borderRadius: '8px', border: 'none', backgroundColor: '#01282D', color: '#F5F5F5', fontSize: '12px', fontWeight: 'bold', marginTop: '10px', whiteSpace: 'nowrap'}} onClick = {handleClick}>
                            Schedule Appointment
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}
