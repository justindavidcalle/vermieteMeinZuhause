import axios from 'axios';
import React, { useState } from 'react'

const Loginbox = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })

    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            
            const response = await axios.post('http://localhost:3000/user/login', formData)
            console.log('Loged in with:', response.data)

            setFormData({
                username: '',
                password:'',
            })
            
            sessionStorage.setItem('token', response.data)

        }catch(error){
            console.error('Error sending user data:', error.message)
        }
    }

  return (
    <div className='loginbox'>
        <h1>Melden Sie sich hier an!</h1>
        <form className='loginform' onSubmit={handleSubmit}>
            <label >
                <h2>Username</h2>
                <input name='username' value={formData.username} type="text"  onChange={handleChange} />
            </label>
            <label >
                <h2>Password</h2>
                <input name='password' value={formData.password} type="password" onChange={handleChange} />
            </label>
            <div>
                <button id='loginbuttoninlogin' className='loginbutton' type='submit'>Anmelden</button>
            </div>
            
        </form>
    </div>
  )
}

export default Loginbox