import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function DoctorSignup() {
   
    const [doctor, setDoctor] = useState({
        username: "",
        password: "",
        email: "",
        specialization: "",
    })
    const [error, setError] = useState({
        username: "",
        password: "",
        email: "",
        specialization: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setDoctor({
            ...doctor,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const url = "https://iwp-backend.vercel.app/"
        setError(validate(doctor))
        setIsSubmitting(true)
        const data = {
            username: doctor.username,
            password: doctor.password,
            email: doctor.email,
            specialization: doctor.specialization
        }
        try {
            axios.post(url + "doctor/registration", data)
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    const validate = (doctor) => {
        let errors = {}
        if (!doctor.username.trim()) {
            errors.username = "Username required"
        }
        if (!doctor.password.trim()) {
            errors.password = "Password required"
        }
        if (!doctor.email.trim()) {
            errors.email = "Email required"
        }
        if (!doctor.specialization.trim()) {
            errors.specialization = "Specialization required"
        }
        return errors
    }

    


    const redirect = () => {
        console.log(doctor)
        window.location.href = "/doctor"
    }



    return (
        <div style={{ backgroundColor: '#01282D', height: '100vh' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80%' }}>
                <div style={{ backgroundColor: '#F5F5F5', width: '400px', height: '400px', borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <h1 style={{ color: '#01282D', fontSize: '32px', fontWeight: 'bold' }}>Sign Up</h1>
                        <p style={{ color: '#01282D', fontSize: '16px', fontWeight: 'bold' }}>Welcome to the community!</p>
                        <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '20px' }} onSubmit={handleSubmit}>
                            <input type="text" placeholder="Username" name="username" value={doctor.username} onChange={handleChange} style={{ width: '300px', height: '40px', borderRadius: '8px', border: 'none', paddingLeft: '10px', marginBottom: '10px' }} />
                            <input type="text" placeholder="Email" name="email" value={doctor.email} onChange={handleChange} style={{ width: '300px', height: '40px', borderRadius: '8px', border: 'none', paddingLeft: '10px', marginBottom: '10px' }} />
                            <input type="text" placeholder="Specialization" name="specialization" value={doctor.specialization} onChange={handleChange} style={{ width: '300px', height: '40px', borderRadius: '8px', border: 'none', paddingLeft: '10px', marginBottom: '10px' }} />
                            <input type="password" placeholder="Password" name="password" value={doctor.password} onChange={handleChange} style={{ width: '300px', height: '40px', borderRadius: '8px', border: 'none', paddingLeft: '10px', marginBottom: '10px' }} />
                            <button style={{ width: '300px', height: '40px', borderRadius: '8px', border: 'none', backgroundColor: '#01282D', color: '#F5F5F5', fontSize: '16px', fontWeight: 'bold', marginTop: '10px' }} type="submit" onClick={redirect}>Sign Up</button>
                            
                        </form>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "-7.5%" }}>
                <p style={{ color: '#F5F5F5', fontSize: '16px', fontWeight: 'bold' }}>Already have an account? <a href="/doctorsignin" style={{ textDecoration: 'none', color: '#F5F5F5' }}>Sign In</a></p>
            </div>
        </div>

    )
}
