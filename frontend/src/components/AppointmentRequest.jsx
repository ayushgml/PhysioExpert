import React from 'react'
import './Signin.css';

export default function AppointmentRequest(props) {

    // const [appointment, setAppointment] = useState({
    //     doctorname: "",
    //     email: "",
    //     date: "",
    //     time: "",
    // })
    

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <div className='app-card' style={{ backgroundColor: '#F5F5F5F0', width: '100%', height: 'auto', borderRadius: '16px', display: 'flex', justifyContent: 'start' }}>
                <div style={{ display: 'flex',  flexDirection: 'column', marginLeft: '5%', marginRight:'5%' }}>
                    <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'baseline', flexDirection: 'column' }}>
                        {/* Patient info */}
                        <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'baseline', flexDirection: 'column' }}>
                            <p style={{ color: '#01282D', fontSize: '16px', fontWeight: 'bold', margin:'16px 0px 4px 0px'}}>Doctor Name: <span style={{ fontWeight: '400' }}>{props.doctorName}</span></p>
                            <p style={{ color: '#01282D', fontSize: '16px', fontWeight: 'bold', margin:'4px' }}>Doctor Specialization: <span style={{ fontWeight: '400' }}>{props.email}</span></p>
                            {/* <p style={{ color: '#01282D', fontSize: '16px', fontWeight: 'bold', textAlign:'justify', margin:'4px' }}>Patient Transcript: <span style={{ fontWeight: '400' }}></span></p> */}
                        </div>
                        {/* Results */}
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', flexDirection: 'column', marginBottom:'5%' }}>
                            <p style={{  fontSize: '20px', fontWeight: 'bold', alignItems: 'center', margin:'16px 0px 2px 0px' }}>Appointment Details</p>
                            <p style={{ color: '#01282D', fontSize: '16px', fontWeight: 'bold', margin:'4px' }}>Date:  <span style={{ fontWeight: '400' }}>{props.date}</span></p>
                            <p style={{ color: '#01282D', fontSize: '16px', fontWeight: 'bold', textAlign:'justify', margin:'4px'  }}>Time: <span style={{ fontWeight: '400' }}>{props.time}</span></p>
                        </div>
                    </div>
                    {/* Two buttons */}
                    {/* <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'baseline', flexDirection: 'row', marginBottom: '5%' }}>
                        <button style={{  height: '40px', borderRadius: '8px', border: 'none', backgroundColor: '#01282D', color: '#F5F5F5', fontSize: '12px', fontWeight: 'bold', marginTop: '10px', marginRight: '5%', whiteSpace: 'nowrap' }}>
                            <a href="/patient" style={{ textDecoration: 'none', color: '#F5F5F5' }}>Cancel Request</a>
                        </button>
                        <button style={{ height: '40px', borderRadius: '8px', border: 'none', backgroundColor: '#01282D', color: '#F5F5F5', fontSize: '12px', fontWeight: 'bold', marginTop: '10px', whiteSpace: 'nowrap'}}>
                            <a href="/scheduleappointment" style={{ textDecoration: 'none', color: '#F5F5F5' }}>Schedule Appointment</a>
                        </button>
                    </div> */}
                </div>
            </div>
        </div>

    )
}
