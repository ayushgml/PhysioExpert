import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function PatientSignup() {
   
    const [patient, setPatient] = useState({
        username: "",
        password: "",
        email: "",
        
    })
    const [error, setError] = useState({
        username: "",
        password: "",
        email: "",
        
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setPatient({
            ...patient,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const url = "https://iwp-backend.vercel.app/"
        setError(validate(patient))
        setIsSubmitting(true)
        const data = {
            username: patient.username,
            password: patient.password,
            email: patient.email,
            
        }
        try {
            axios.post(url + "patient/registration", data)
            .then(res => {
                console.log(res)
                console.log(res.data)
                if(res.data.success === true){
                    window.location.href = "/signin"
                }
                else if(res.data.success === false){
                    alert("Something went wrong")
                    window.location.href = "/signup"
                }
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    const validate = (patient) => {
        let errors = {}
        if (!patient.username.trim()) {
            errors.username = "Username required"
        }
        if (!patient.password.trim()) {
            errors.password = "Password required"
        }
        if (!patient.email.trim()) {
            errors.email = "Email required"
        }
        
        return errors
    }

    


    const redirect = () => {
        console.log(patient)
        // window.location.href = "/signin"
    }



    return (
        <div style={{ backgroundColor: '#01282D', height: '100vh' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80%' }}>
                <div style={{ backgroundColor: '#F5F5F5', width: '400px', height: '400px', borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <h1 style={{ color: '#01282D', fontSize: '32px', fontWeight: 'bold' }}>Sign Up</h1>
                        <p style={{ color: '#01282D', fontSize: '16px', fontWeight: 'bold' }}>Welcome to the community!</p>
                        <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '20px' }} onSubmit={handleSubmit}>
                            <input type="text" placeholder="Username" name="username" value={patient.username} onChange={handleChange} style={{ width: '300px', height: '40px', borderRadius: '8px', border: 'none', paddingLeft: '10px', marginBottom: '10px' }} />
                            <input type="text" placeholder="Email" name="email" value={patient.email} onChange={handleChange} style={{ width: '300px', height: '40px', borderRadius: '8px', border: 'none', paddingLeft: '10px', marginBottom: '10px' }} />
                            <input type="password" placeholder="Password" name="password" value={patient.password} onChange={handleChange} style={{ width: '300px', height: '40px', borderRadius: '8px', border: 'none', paddingLeft: '10px', marginBottom: '10px' }} />
                            <button style={{ width: '300px', height: '40px', borderRadius: '8px', border: 'none', backgroundColor: '#01282D', color: '#F5F5F5', fontSize: '16px', fontWeight: 'bold', marginTop: '10px' }} type="submit" onClick={redirect}>Sign Up</button>
                            
                        </form>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "-7.5%" }}>
                <p style={{ color: '#F5F5F5', fontSize: '16px', fontWeight: 'bold' }}>Already have an account? <a href="/signin" style={{ textDecoration: 'none', color: '#F5F5F5' }}>Sign In</a></p>
            </div>
        </div>

    )
}
