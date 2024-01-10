import React, { useState } from 'react';
import '../css/ObjectCard.css';
import { Datepicker, getJson, localeDe, setOptions } from '@mobiscroll/react';

const ObjectCard = (props) => {
  const addressLines = props.adress ? props.adress.split(',') : [];

  const currentDate = new Date(); // Get the current date
  const min = currentDate.toISOString().split('T')[0] + 'T00:00';
  const max = '2024-07-10T00:00';
  const [multiple, setMultiple] = useState([
    '2024-01-11T00:00',
    '2024-01-16T00:00',
    '2024-01-17T00:00'
  ]);
  const [multipleLabels, setMultipleLabels] = useState([]);
  const [multipleInvalid, setMultipleInvalid] = useState([]);

  const onPageLoadingMultiple = (event, inst) => {
    getBookings(event.firstDay, (bookings) => {
      setMultipleLabels(bookings.labels);
      setMultipleInvalid(bookings.invalid);
    });
  };

  const getBookings = (date, callback) => {
    const invalid = [];
    const labels = [];

    getJson('//trial.mobiscroll.com/getbookings/?year=' + date.getFullYear() + '&month=' + date.getMonth(), (bookings) => {
      for (const booking of bookings) {
        const d = new Date(booking.d);
        if (booking.nr > 0) {
          labels.push({
            start: d,
            title: booking.nr + 'SPOTS',
            textColor: '#e1528f'
          });
        } else {
          invalid.push(d);
        }
      }
      callback({ labels, invalid });
    }, 'jsonp');
  };


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
        <div className='Rent-Container'>
          <div className='RentButton-Container'>
            <button className='RentButton' >Mieten</button>
          </div>
          <div className='Datepicker-Container'>
          <Datepicker 
              controls={['calendar']}
              value={multiple}
              min={min}
              max={max}
              labels={multipleLabels}
              invalid={multipleInvalid}
              selectMultiple={true}
              onPageLoading={onPageLoadingMultiple}
              onChange={(event, inst) => {
                const selectedDates = event.value;
                setMultiple(selectedDates);
              }}
              themeVariant='light'
              theme='windows'
              locale={localeDe}
            />
        </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectCard;
