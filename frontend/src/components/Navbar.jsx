import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HorLogo from '../assets/HorLogo.png';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import PatientDashboard from '../pages/patient/PatientDashboard';

import { useAuthState } from 'react-firebase-hooks/auth';
firebase.initializeApp({
    apiKey: "AIzaSyALw5W-YW1K_ERIU5wW8mVbWedPQz935ok",
    authDomain: "chatwebapp-a9396.firebaseapp.com",
    projectId: "chatwebapp-a9396",
    storageBucket: "chatwebapp-a9396.appspot.com",
    messagingSenderId: "678223230076",
    appId: "1:678223230076:web:c4829d1fb552bcaa50c5f9"
  })
  
  const auth = firebase.auth();
  const firestore = firebase.firestore();

  function SignOutAndRedirect() {
    auth.signOut();
    window.location.href = "/";
  }
  function SignOut() {
    return auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut() } style={{backgroundColor: 'transparent'}}>
        <a href="/" style={{color: 'white', textDecoration:'none'}}>Sign Out</a>
        </button>
    )
  }

export default function ButtonAppBar() {
    const [user] = useAuthState(auth);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        {/* Toolbar color black */}
        <Toolbar style={{ backgroundColor: '#01282D' }}>
        <img src={HorLogo} alt="logo" height={50} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#E3D886", marginLeft:"10px"}}>
            
            PHYSIOEXPERT
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            
          >
            <SignOut />
          </IconButton>
          
          
        </Toolbar>
      </AppBar>
    </Box>

  );
}
