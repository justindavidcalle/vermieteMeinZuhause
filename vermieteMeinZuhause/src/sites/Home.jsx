import React, { useEffect } from 'react';
import '../css/Home.css'; // Import the CSS file for styling

const Home = () => {
  useEffect(() => {
    // JavaScript code for moving objects
    const moveObjects = () => {
      const objects = document.querySelectorAll('.moving-object');
      objects.forEach((object, index) => {
        // Randomize animation duration and delay for each object
        const duration = 10; // Random duration between 3 and 8 seconds
        const delay = Math.random() * 2; // Random delay between 0 and 2 seconds

        // Apply animation properties
        object.style.animationDuration = `${duration}s`;
        object.style.animationDelay = `${delay}s`;
        object.style.animationIterationCount = 'infinite';
      });
    };

    moveObjects();
  }, []);

  return (
    <>
    <h1>Vermiete dein Zuhause!</h1>
    <div className='animation'>
      <div class="wrapper">
            <div class="candles">
              <div class="light__wave"></div>
              <div class="candle1">
                <div class="candle1__body">
                  <div class="candle1__eyes">
                    <span class="candle1__eyes-one"></span>
                    <span class="candle1__eyes-two"></span>
                  </div>
                  <div class="candle1__mouth"></div>
                </div>
                <div class="candle1__stick"></div>
              </div>
              
              <div class="candle2">
                <div class="candle2__body">
                  <div class="candle2__eyes">
                    <div class="candle2__eyes-one"></div>
                    <div class="candle2__eyes-two"></div>
                  </div>
                </div>
                <div class="candle2__stick"></div>
              </div>
              <div class="candle2__fire"></div>
              <div class="sparkles-one"></div>
              <div class="sparkles-two"></div>
              <div class="candle__smoke-one">

              </div>
              <div class="candle__smoke-two">

              </div>
              
            </div>
            <div class="floor">
            </div>
            

          </div>
    </div>
  
    </>
          
  );
};

export default Home;
