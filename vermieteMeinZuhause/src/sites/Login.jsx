import React from 'react'
import Loginbox from '../components/Loginbox'
import { Link } from 'react-router-dom'
import '../css/Login.css'

const Login = () => {
  return (
    <div className='login'>
       <Loginbox /> 
        <div className='signInSuggestion'>
            <h1>Noch keinen Account?</h1>
            <p>Erstellen Sie jetzt einen Account!</p>
            <Link to="/signIn">Registrieren</Link>
        </div>
        <div className='forgotpasswordbox'>
            <h1>Passwort vergessen?</h1>
            <p>Clicken Sie hier!</p>
            <Link to="/forgotPassword">Passwort vergessen</Link>
        </div>
    </div>
  )
}

export default Login