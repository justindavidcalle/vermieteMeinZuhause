import React, { useState } from 'react';
import ObjectCard from '../components/ObjectCard';
import '../css/Mieten.css';
import test from '../assets/test-photo.jpg';
import mauritius from '../assets/villa-mauritius.jpg'
import anantara from '../assets/villa-anantara.jpg'
import paris from '../assets/villa-paris.jpg'
import nyc from '../assets/haus-nyc.jpg'
import tokyo from '../assets/haus-tokyo.jpg'
import sydney from '../assets/haus-sidney.jpg'
import rome from '../assets/haus-rome.jpg'




import '@mobiscroll/react/dist/css/mobiscroll.min.css';


const Mieten = () => {
  return (
    <div className='Mieten-Container'>
      <h1>Mieten</h1>
      <div className='Object-Board'>
        <ObjectCard img={test} shortname="testhaus" title="4-Zimmer Testhaus Winterthur" adress="Hündlerstrasse 55, 8406 Winterthur" price="50" stripeID="price_1OW43OE0SwKraBCIM7st0ApW" />
        <ObjectCard img={test} shortname="buelrain" title="Schulhaus KBW" adress="Rosenstrasse 1, 8400 Winterthur" price="100" stripeID="price_1OcCj5E0SwKraBCIXyYUOUOy" />
        <ObjectCard img={test} shortname="bbw" title="Schulhaus BBW" adress="Pionierstrasse 28, 8400 Winterthur" price="150" stripeID="price_1OcCkAE0SwKraBCI6byOaALy" />
        <ObjectCard img={mauritius} shortname="mauritius" title="Villa Mauritius" adress="Frankwood 231, Port Luis" price="250" stripeID="price_1OcCkAE0SwKraBCI6byOaALy" />
        <ObjectCard img={anantara} shortname="anantara" title="Villa Anantara" adress="Hojas Azules 23, Antara" price="235" stripeID="price_1OcCkAE0SwKraBCI6byOaALy" />
        <ObjectCard img={paris} shortname="paris" title="Eiffel Tower View Apartment" adress="Champs-Élysées, Paris" price="180" stripeID="price_1OcCkAE0SwKraBCI6byOaALy" />
        <ObjectCard img={nyc} shortname="nyc" title="Luxury Penthouse in Manhattan" adress="Fifth Avenue, New York City" price="300" stripeID="price_1OcCkAE0SwKraBCI6byOaALy" />
        <ObjectCard img={tokyo} shortname="tokyo" title="Modern Apartment in Tokyo" adress="Shibuya, Tokyo" price="200" stripeID="price_1OcCkAE0SwKraBCI6byOaALy" />
        <ObjectCard img={sydney} shortname="sydney" title="Harbor View House in Sydney" adress="Circular Quay, Sydney" price="220" stripeID="price_1OcCkAE0SwKraBCI6byOaALy" />
        <ObjectCard img={rome} shortname="rome" title="Historic Villa in Rome" adress="Colosseum, Rome" price="190" stripeID="price_1OcCkAE0SwKraBCI6byOaALy" />

      </div>
    </div>
  );
};

export default Mieten;
