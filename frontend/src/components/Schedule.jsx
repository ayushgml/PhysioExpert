import React from 'react'

export default function InformationForm() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', marginTop:'10%' }}>
        <div style={{ backgroundColor: '#F5F5F5', width: '400px', height: '500px', borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <p style={{ color: '#01282D', fontSize: '20px', fontWeight: 'bold' }}>Schedule Appointment</p>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '20px' }}>
                <input type="text" placeholder="Doctor Name" style={{ width: '300px', height: '40px', borderRadius: '8px', border: 'none', paddingLeft: '10px', fontSize: '16px' }} required/>
                <input type="text" placeholder="Specialization" style={{ width: '300px', height: '40px', borderRadius: '8px', border: 'none', paddingLeft: '10px', fontSize: '16px' , marginTop: '10px'}} required/>
                {/* Pick date and time */}
                <input type= "date" style={{ width: '300px', height: '40px', borderRadius: '8px', border: 'none', paddingLeft: '10px', fontSize: '16px' , marginTop: '10px'}} required/>
                <input type= "time" style={{ width: '300px', height: '40px', borderRadius: '8px', border: 'none', paddingLeft: '10px', fontSize: '16px' , marginTop: '10px'}} required/>
                <button style={{ width: '300px', height: '40px', borderRadius: '8px', border: 'none', backgroundColor: '#01282D', color: '#F5F5F5', fontSize: '16px', fontWeight: 'bold', marginTop: '10px' }}>
                    <a href="/patientresults" style={{ textDecoration: 'none', color: '#F5F5F5' }}>
                        Submit
                    </a>
                    </button>
                </div>
            </div>
        </div>
    </div>


  )
}
