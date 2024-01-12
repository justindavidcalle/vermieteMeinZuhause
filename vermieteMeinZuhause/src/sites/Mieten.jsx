import React, { useState } from 'react';
import ObjectCard from '../components/ObjectCard';
import '../css/Mieten.css';
import test from '../assets/test-photo.jpg';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';


const Mieten = () => {
  return (
    <div className='Mieten-Container'>
      <h1>Mieten</h1>
      <div className='Object-Board'>
        <ObjectCard img={test} shortname="testhaus" title="4-Zimmer Testhaus Winterthur" adress="Hündlerstrasse 55, 8406 Winterthur" price="50" stripeID="price_1OW43OE0SwKraBCIM7st0ApW" />
      </div>
    </div>
  );
};

export default Mieten;
