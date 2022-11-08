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

    const [appointmentFormData, setAppointmentFormData] = useState({ 
        doctorname: '',
        email : '',
        date : '',
        time : '',
    })

    // handle form submission
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(appointmentFormData)
        localStorage.setItem('appointmentFormData', JSON.stringify(appointmentFormData))
        const url = "https://iwp-backend.vercel.app/appointment/create"
        const data = {
            doctorname: appointmentFormData.doctorname,
            email: appointmentFormData.email,
            date: appointmentFormData.date,
            time: appointmentFormData.time
        }
        try {
            axios.post(url, data)
            .then(res => {
                console.log(res)
                console.log(res.data)
                if (res.data.success === true) {
                    alert("Appointment request sent")
                    window.location.href = "/patient"
                }
                else {
                    alert("Appointment request failed")
                    window.location.href = "/scheduleappointment"
                }
            })
        }
        catch (err) {
            console.log(err)
        }
        
    }

    // handle form input changes
    const handleChange = (event) => {
        setAppointmentFormData({
            ...appointmentFormData,
            [event.target.name]: event.target.value
        })
    }

    const redirect = () => {
        console.log(appointmentFormData)
        // window.location.href = "/patient"
    }
    
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', marginTop:'10%' }}>
        <div style={{ backgroundColor: '#F5F5F5', width: '400px', height: '500px', borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <p style={{ color: '#01282D', fontSize: '20px', fontWeight: 'bold' }}>Schedule Appointment</p>
                <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '20px' }} onSubmit={handleSubmit}>
                <input type="text" placeholder="Doctor Name" style={{ width: '300px', height: '40px', borderRadius: '8px', border: 'none', paddingLeft: '10px', fontSize: '16px' } } name="doctorname" value={appointmentFormData.doctorname} onChange={handleChange} />
                <input type="text" placeholder="Specialization" style={{ width: '300px', height: '40px', borderRadius: '8px', border: 'none', paddingLeft: '10px', fontSize: '16px' , marginTop: '10px'}} name="email" value={appointmentFormData.email} onChange={handleChange} />
                <input type= "date" style={{ width: '300px', height: '40px', borderRadius: '8px', border: 'none', paddingLeft: '10px', fontSize: '16px' , marginTop: '10px'}} value = {appointmentFormData.date} name="date" onChange={handleChange} />
                <input type= "time" style={{ width: '300px', height: '40px', borderRadius: '8px', border: 'none', paddingLeft: '10px', fontSize: '16px' , marginTop: '10px'}} value = {appointmentFormData.time} name="time" onChange={handleChange} />
                <button style={{ width: '300px', height: '40px', borderRadius: '8px', border: 'none', backgroundColor: '#01282D', color: '#F5F5F5', fontSize: '16px', fontWeight: 'bold', marginTop: '10px' }} type="submit" onClick={redirect}>
                    Submit
                    </button>
                </form>
            </div>
        </div>
    </div>


  )
}
