import React from 'react'
import justin from '../assets/JustinCalle.jpg'
import '../css/About.css'

const About = () => {
  return (
    <div className='about-container'>
      <div className='black-container'>
        <div className='content-container'>
          <div className='welcome-container'>
            <h1>Willkommen auf meiner Website!</h1>
            <hr className='line' />
            <p>
              Mein Name ist Justin Calle und dies ist mein Projekt zu: "Vermiete mein Zuhause".
              Diese App ist mit Vite, Express und Stripe gebaut worden. Auftrag ist es,
              Unterkunftsmöglichkeiten anzubieten und diese mit einem Payment-Provider zu 
              realisieren. Hierbei habe ich mir Stripe zur Hilfe genutzt.
              Eine Unterkunft wird nach dem zahlen in die Datenbank, welche eine MongoDB ist auf Atlas,
              gespeichert mit dem Login, welches mit ReCAPTCHA geschützt ist. 
            </p>
          </div>
          <div className='contact-container'>
            <h1>Kontaktdaten</h1>
            <hr className='line' />
            <p>Name: Justin Calle</p>
            <p>Schulauftrag von: Berufsbildungsschule Winterthur / BBW</p>
            <p>Abgabe am: 25.01.2024</p>
            <p>Github-Repository: <a href="https://github.com/justindavidcalle/vermieteMeinZuhause">github.com/justindavidcalle/vermieteMeinZuhause</a></p>
          </div>
        </div>
        <div className='image-container'>
          <img src={justin} alt="Justin Calle" id='justinCalle' />
        </div>
      </div>
    </div>
  )
}

export default About