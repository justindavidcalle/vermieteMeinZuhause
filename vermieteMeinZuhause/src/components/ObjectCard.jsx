import React from 'react';
import ObjectModal from './ObjectModal';
import '../css/ObjectCard.css';

const ObjectCard = (props) => {
  // Check if props.adress is defined before attempting to split
  const addressLines = props.adress ? props.adress.split(',') : [];

  return (
    <div className='ObjectCard-Container'>
      <img className='CardImage' src={props.img} alt={props.img} />
      <div className='CardContext'>
        <h1 className='CardTitle'>{props.title}</h1>
        {addressLines.map((line, index) => (
          <p key={index} className='CardAdress'>
            {line.trim()}
          </p>
        ))}
        <p>{props.price} CHF pro Nacht</p>
        <div className='RentButton-Container'>
          <button className='RentButton' >Mieten</button>
        </div>
        <ObjectModal/>
      </div>
    </div>
  );
};

export default ObjectCard;
