import React from 'react'

const SignInBox = () => {
  return (
    <div className='SignInBox'>
        <h1>Erstellen Sie einen Account!</h1>
        <form className='loginform'>
            <label >
                <h2>Username</h2>
                <input type="text" />
            </label>
            <label >
                <h2>E-Mail</h2>
                <input type="email" />
            </label>
            <label >
                <h2>Password</h2>
                <input type="password" />
            </label>
            
            <div>
                <button id='loginbuttoninlogin' className='loginbutton' type='submit'>Anmelden</button>
            </div>
            
        </form>
    </div>
  )
}

export default SignInBox