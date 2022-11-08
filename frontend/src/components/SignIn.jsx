import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Signin() {

    const [patient, setPatient] = useState({
        email: "",
        password: "",
    })
    const [error, setError] = useState({
        email: "",
        password: "",
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
            email: patient.email,
            password: patient.password,
        }
        try {
            axios.post(url + "patient/login", data)
            .then(res => {
              console.log(res)
              console.log(res.data)
              if(res.data.success === true){
                  window.location.href = "/patient"
              }
              else if(res.data.success === false){
                  alert("Invalid Credentials")
                  window.location.href = "/signin"
              }


              localStorage.setItem("token", res.data.token)


          })
        }
        catch (err) {
            console.log(err)
        }
        // //only if the form is valid we redirect
        // if (Object.keys(error).length === 0 && isSubmitting) {
        //     //redirect to the home page
        //     window.location.href = "/patient"
        // }
        // else {
        //     alert("Invalid Credentials")
        // }

    }

    const validate = (patient) => {
        let errors = {}
        if (!patient.email.trim()) {
            errors.email = "Username required"
        }
        if (!patient.password.trim()) {
            errors.password = "Password required"
        }
        return errors
    }




    // const redirect = () => {
    //   console.log(patient)
    //   // set token as patienttoken in local storage
    //   window.location.href = "/patient"
        
    // }


  return (
    <div style={{ backgroundColor: '#01282D', height: '100vh' }}>
        {/* Box with button */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80%' }}>
            <div style={{ backgroundColor: '#F5F5F5', width: '400px', height: '400px', borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <h1 style={{ color: '#01282D', fontSize: '32px', fontWeight: 'bold' }}>Sign In</h1>
                    <p style={{ color: '#01282D', fontSize: '16px', fontWeight: 'bold' }}>Welcome back!</p>
                    <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '20px' }} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Email" name="email" value={patient.email} onChange={handleChange} style={{ width: '300px', height: '40px', borderRadius: '8px', border: 'none', paddingLeft: '10px', marginBottom: '10px' }} />
                        <input type="password" placeholder="Password" name="password" value={patient.password} onChange={handleChange} style={{ width: '300px', height: '40px', borderRadius: '8px', border: 'none', backgroundColor: '#F5F5F5', paddingLeft: '10px', marginBottom: '10px' }} />
                        <button type="submit" style={{ width: '300px', height: '40px', borderRadius: '8px', border: 'none', backgroundColor: '#01282D', color: '#F5F5F5', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>Sign In</button>
                    </form>
                </div>
            </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "-7.5%" }}>
            <p style={{ color: '#F5F5F5', fontSize: '16px', fontWeight: 'bold' }}>Don't have an account? <a href="/patientsignup" style={{ textDecoration: 'none', color: '#F5F5F5' }}>Sign Up</a></p>
        </div>
    
        <section>
        
      </section>
    </div>

  )
}
