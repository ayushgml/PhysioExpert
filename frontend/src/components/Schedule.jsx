import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function Schedule() {

    
    // store info from backend in an object
    const [doctor, setDoctor] = useState({})
    

    const getData = () => {
        const url = "https://iwp-backend.vercel.app/doctor/get_specialization"
        const body = {
            "specialization": "Cardiologist"
        }
        axios.post(url, body)
        .then(res => {
            setDoctor(res.data)
        })
    }

    // getData()
    // console.log(doctor)

    const [appFormData, setAppFormData] = useState({ 
        Name: '',
        Specialization : '',
        Date : '',
        Time : '',
    })

    // handle form submission
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(appFormData)
        localStorage.setItem('appFormData', JSON.stringify(appFormData))
    }

    // handle form input changes
    const handleChange = (event) => {
        setAppFormData({
            ...appFormData,
            [event.target.name]: event.target.value
        })
    }

    const redirect = () => {
        window.location.href = "/patient"
    }
    
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', marginTop:'10%' }}>
        <div style={{ backgroundColor: '#F5F5F5', width: '400px', height: '500px', borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <p style={{ color: '#01282D', fontSize: '20px', fontWeight: 'bold' }}>Schedule Appointment</p>
                <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '20px' }} onSubmit={handleSubmit}>
                <input type="text" placeholder="Doctor Name" style={{ width: '300px', height: '40px', borderRadius: '8px', border: 'none', paddingLeft: '10px', fontSize: '16px' }} value = {appFormData.Name} onChange={handleChange} name="Name" required/>
                <input type="text" placeholder="Specialization" style={{ width: '300px', height: '40px', borderRadius: '8px', border: 'none', paddingLeft: '10px', fontSize: '16px' , marginTop: '10px'}} value = {appFormData.Specialization} onChange={handleChange} name="Specialization" required/>
                <input type= "date" style={{ width: '300px', height: '40px', borderRadius: '8px', border: 'none', paddingLeft: '10px', fontSize: '16px' , marginTop: '10px'}} value = {appFormData.Date} onChange={handleChange} name="Date" required/>
                <input type= "time" style={{ width: '300px', height: '40px', borderRadius: '8px', border: 'none', paddingLeft: '10px', fontSize: '16px' , marginTop: '10px'}} value = {appFormData.Time} onChange={handleChange} name="Time" required/>
                <button style={{ width: '300px', height: '40px', borderRadius: '8px', border: 'none', backgroundColor: '#01282D', color: '#F5F5F5', fontSize: '16px', fontWeight: 'bold', marginTop: '10px' }} type="submit" onClick={redirect}>
                    Submit
                    </button>
                </form>
            </div>
        </div>
    </div>


  )
}
