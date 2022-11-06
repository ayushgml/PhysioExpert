import React from 'react'
import './Signin.css';

export default function AppointmentRequest() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <div className='app-card' style={{ backgroundColor: '#F5F5F5F0', width: '100%', height: 'auto', borderRadius: '16px', display: 'flex', justifyContent: 'start' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginLeft: '5%', marginRight:'5%' }}>
                    <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'baseline', flexDirection: 'column' }}>
                        {/* Patient info */}
                        <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'baseline', flexDirection: 'column' }}>
                            <p style={{ color: '#01282D', fontSize: '16px', fontWeight: 'bold', margin:'16px 0px 4px 0px'}}>Patient Name: <span style={{ fontWeight: '400' }}>Thaman Muthappa</span></p>
                            <p style={{ color: '#01282D', fontSize: '16px', fontWeight: 'bold', margin:'4px' }}>Patient Email: <span style={{ fontWeight: '400' }}>thamanmuthappa@gmail.com</span></p>
                            <p style={{ color: '#01282D', fontSize: '16px', fontWeight: 'bold', textAlign:'justify', margin:'4px' }}>Patient Transcript: <span style={{ fontWeight: '400' }}>Lorem ipsum dolor sit amet. Sit sunt laborum ex officiis consequatur ut voluptatibus rerum cum libero commodi eos consequatur saepe. Aut totam nobis et omnis temporibus rem minus voluptatem sed consequatur voluptas sit galisum dolor ut velit mollitia? Qui labore distinctio sed nihil dolor sed cupiditate repellendus.
                                Quo sint eius ea laudantium unde cum beatae eveniet et nostrum excepturi non architecto itaque et voluptatibus earum qui soluta saepe? Id perspiciatis ipsum non fugiat cupiditate 33 magnam velit sed provident dolorem eos voluptatem fugiat quo blanditiis asperiores non quia voluptatem! Eum maiores ipsum id magni beatae ut voluptatem autem.
                                Ea eligendi nihil non blanditiis laborum et nulla optio est itaque quibusdam est incidunt voluptates aut earum cumque! Non ipsum numquam ea pariatur dolorum eos ullam fugit et tempora galisum et sint omnis rem velit asperiores qui rerum enim.</span></p>
                        </div>
                        {/* Results */}
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', flexDirection: 'column' }}>
                            <p style={{  fontSize: '20px', fontWeight: 'bold', alignItems: 'center', margin:'16px 0px 2px 0px' }}>Appointment Details</p>
                            <p style={{ color: '#01282D', fontSize: '16px', fontWeight: 'bold', margin:'4px' }}>Date:  <span style={{ fontWeight: '400' }}>29th July</span></p>
                            <p style={{ color: '#01282D', fontSize: '16px', fontWeight: 'bold', textAlign:'justify', margin:'4px'  }}>Time: <span style={{ fontWeight: '400' }}>10:00PM</span></p>
                        </div>
                    </div>
                    {/* Two buttons */}
                    <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'baseline', flexDirection: 'row', marginBottom: '1%' }}>
                        <button style={{  height: '40px', borderRadius: '8px', border: 'none', backgroundColor: '#01282D', color: '#F5F5F5', fontSize: '12px', fontWeight: 'bold', marginTop: '10px', marginRight: '5%', whiteSpace: 'nowrap' }}>
                            <a href="/patient" style={{ textDecoration: 'none', color: '#F5F5F5' }}>Cancel Request</a>
                        </button>
                        <button style={{ height: '40px', borderRadius: '8px', border: 'none', backgroundColor: '#01282D', color: '#F5F5F5', fontSize: '12px', fontWeight: 'bold', marginTop: '10px', whiteSpace: 'nowrap'}}>
                            <a href="/scheduleappointment" style={{ textDecoration: 'none', color: '#F5F5F5' }}>Schedule Appointment</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}
