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

    const handleSubmit = (event) => {
        event.preventDefault()
        const url = "http://127.0.0.1:5000/predict"
        const data = {
            transcript: transcript
        }
        try {
            axios.post(url, data)
            .then(res => {
                console.log(res)
                console.log(res.data)
                localStorage.setItem('result', res.data)
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    const redirect = () => {
        window.location.href = "/result"
    }


    return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', marginTop:'10%' }}>
        <div style={{ backgroundColor: '#F5F5F5', width: '400px', height: '500px', borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <p style={{ color: '#01282D', fontSize: '20px', fontWeight: 'bold' }}>Drop your transcript here</p>
                    <div style={ { display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '20px' } }>
                        <form onSubmit = {handleSubmit} style={ { display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '20px' } }>
                            <input
                                type="text"
                                placeholder="Name"
                                style={ { width: '300px', height: '40px', borderRadius: '8px', border: 'none', paddingLeft: '10px', fontSize: '16px' } }
                                required
                            />
                            <input
                                type="text"
                                placeholder="Email"
                                style={ { width: '300px', height: '40px', borderRadius: '8px', border: 'none', paddingLeft: '10px', fontSize: '16px', marginTop: '10px' } }
                                required
                            />
                            <input
                                type="text-area"
                                placeholder="Transcript"
                                name="transcript"
                                onChange={(e)=>setTranscript(e.target.value)}
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
