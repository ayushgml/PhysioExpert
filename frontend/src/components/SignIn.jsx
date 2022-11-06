import React, { useRef, useState } from 'react';
import './Signin.css';


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


function SignInPage() {

  const [user] = useAuthState(auth);

  return (
    <div style={{ backgroundColor: '#01282D', height: '100vh' }}>
        {/* Box with button */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80%' }}>
            <div style={{ backgroundColor: '#F5F5F5', width: '400px', height: '400px', borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <h1 style={{ color: '#01282D', fontSize: '32px', fontWeight: 'bold' }}>Sign In</h1>
                    <p style={{ color: '#01282D', fontSize: '16px', fontWeight: 'bold' }}>Welcome back!</p>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '20px' }}>
                    {user ? <RedirectToDashboard /> : <SignIn />}
                    </div>
                </div>
            </div>
        </div>
    </div>


      

  );
}

function RedirectToDashboard() {
    window.location.href = "/patient";
}


function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}






export default SignInPage;