import React from 'react';
import jobblejobble from '../images/jobblejobble.mp4';

function Goodbye() {
  return (
    <>
      <h2 className="title">I hope you found your job! Jobble Jobble</h2>
      <div className="animationContainer">
        <video className="animation" loop autoPlay>
          <source src={jobblejobble} type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default Goodbye;
