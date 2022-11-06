import * as React from 'react';
import Button from '@mui/material/Button';
import logo from '../assets/logo.svg';

export default function Landing() {
  return (
      <div style={{ backgroundColor: '#01282D', height: '100vh' }}>
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80%' }}>
          <img src={logo} alt="logo" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:"-7.5%"}}>
          <Button variant="contained" style={{ backgroundColor: '#F5F5F5', color: '#01282D', marginRight: '100px', width: '200px', borderRadius:'16px', fontSize:'16px' }}>
            <a href="/doctorsignin" style={{ textDecoration: 'none', color: '#01282D' }}>Doctor</a>
            </Button>
            
          <Button variant="contained" style={{ backgroundColor: '#F5F5F5', color: '#01282D',  width: '200px', borderRadius:'16px', fontSize:'16px'}}>
            <a href="/signin" style={{ textDecoration: 'none', color: '#01282D' }}>Patient</a>
            </Button>
          </div>


    </div>
  ); 
}
