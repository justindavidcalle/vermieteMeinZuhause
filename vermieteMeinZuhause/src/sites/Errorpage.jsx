import React from 'react'
import { useRouteError } from 'react-router-dom'
import '../css/Errorpage.css'

const Errorpage = () => {

    const error = useRouteError();


  return (
    <div id='Errorpage'>
        <h1>Upsiedupsie!</h1>
        <p>Ein Fehler ist aufgetreten:</p>
        <h2>{error.statusText || error.message}</h2>
        <p>Bitte Starten Sie die Seite erneut und/oder gehen Sie zurück zum Home!</p>
    </div>
  )
}

export default Errorpage