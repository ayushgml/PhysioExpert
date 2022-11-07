import {useState} from 'react'
import APIService from '../components/APIService'
import axios from 'axios'

export default function InformationForm(props) {
    // const [ transcript, setTranscript ] = useState( '' )

    // const insertTranscript = () =>{
    //     APIService.InsertTranscript({transcript})
    //     .then((response) => props.insertedTranscript(response))
    //     .catch(error => console.log('error',error))
    // }

    // const handleSubmit = (event)=>{ 
    //     event.preventDefault()
    //     insertTranscript()
    //     setTranscript('')
    // }
    const [transcript, setTranscript] = useState('')
    const [prediction, setPrediction] = useState('')
    const [formData, setFormData] = useState({ 
        Name: '',
        Email : '',
        transcript : '',
    })

    // handle form submission
    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     console.log(formData)
    //     // store locally
        
    // }

    // handle form input changes
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async(event) => {
        event.preventDefault()
        const url = "http://127.0.0.1:5000/predict"
        const data = {
            transcript: formData.transcript
        }
        try {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(res => {
                setPrediction(res.data)
                console.log(res)
                console.log(res.speciality)
                localStorage.setItem( 'prediction', res.speciality )
                // localStorage.setItem('transcription', transcript)
            })
        }
        catch (err) {
            console.log(err)
        }
        localStorage.setItem('formData', JSON.stringify(formData))
    }

            

    const redirect = () => {
        console.log(formData.transcript)
        window.location.href = "/patientresults"
    }

    


    return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', marginTop:'10%' }}>
        <div style={{ backgroundColor: '#F5F5F5', width: '400px', height: '500px', borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <p style={{ color: '#01282D', fontSize: '20px', fontWeight: 'bold' }}>Drop your transcript here</p>
                    <div style={ { display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '20px' } }>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '20px' }}>
                {/* <form onSubmit={handleSubmit}> */}
                <input type="text" placeholder="Name" style={{ width: '300px', height: '40px', borderRadius: '8px', border: 'none', paddingLeft: '10px', fontSize: '16px' }} value = {formData.Name} onChange={handleChange} name="Name" required/>
                <input type="text" placeholder="Email" style={{ width: '300px', height: '40px', borderRadius: '8px', border: 'none', paddingLeft: '10px', fontSize: '16px' , marginTop: '10px'}} value = {formData.Email} onChange={handleChange} name="Email" required/>
                
                            <input
                                type="text-area"
                                placeholder="Transcript"
                                name="transcript"
                                onChange={handleChange}
                                style={ { width: '300px', height: '100px', borderRadius: '8px', border: 'none', paddingLeft: '10px', fontSize: '16px', marginTop: '10px' } }
                                required
                            />
                            <button
                                style={ { width: '300px', height: '40px', borderRadius: '8px', border: 'none', backgroundColor: '#01282D', color: '#F5F5F5', fontSize: '16px', fontWeight: 'bold', marginTop: '10px' } }
                                type="submit"
                                onClick={redirect}

                            >
                                Submit
                                
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
