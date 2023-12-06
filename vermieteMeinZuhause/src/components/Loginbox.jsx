import React from 'react'

const Loginbox = () => {

    const username = ''

  return (
    <div className='loginbox'>
        <h1>Melden Sie sich hier an!</h1>
        <form className='loginform'>
            <label >
                <h2>Username</h2>
                <input type="text" />
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

export default Loginbox