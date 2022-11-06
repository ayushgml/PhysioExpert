import React from 'react'
import Navbar from '../../components/Navbar'
import ResultsCard from '../../components/ResultsCard'

export default function PatientResults() {
  return (
    <>
    <Navbar />
    <h1 style={{ color: '#01282D', fontSize: '32px', fontWeight: 'bold', textAlign: 'center', marginTop: '20px' }}>Results</h1>
    <ResultsCard />
    </>
  )
}
