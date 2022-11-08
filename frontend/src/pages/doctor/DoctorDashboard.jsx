import React from 'react'
import Navbar from '../../components/Navbar'
import AppointmentRequest from '../../components/AppointmentRequest'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function DoctorDashboard() {
  const [appointment, setAppointment] = useState({})


  useEffect(() => {
    const url = "https://iwp-backend.vercel.app/appointment/get"
    axios.get(url)
    .then(res => {
      setAppointment(res.data)
    })
  }, [])

  console.log(appointment.data)


  return (
    <>
    <Navbar />
    {/* <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">Doctor Dashboard</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-center">Appointment Requests</h2>
        </div>
      </div> */}
      {
        appointment.data && appointment.data.map((item, index) => {
          return (
            <AppointmentRequest key={index} doctorName={item.doctorname} email={item.email} date={item.date} time={item.time} />
          )
        })
      }
    {/* </div> */}
    </>
    
  )
}
