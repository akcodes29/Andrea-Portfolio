import React from 'react';
import rainImage from '../images/favicon-rain-32x32.png';

// Rain component using SVG animation and CSS animation properties 
const Rain = () => {
    return (
      <div className="rain">
        {Array.from({ length: 40 }).map((_, i) => (
          <img
            className="drop"
            key={i}
            src={rainImage}
            alt="rain drop"
            style={{
              left: `${Math.random() * 100}%`, // randomize the position of the rain drops
              animationDuration: `${Math.random() * 1 + 4}s`, // randomize the duration of the animation
              animationDelay: `${Math.random() * 2}s` // randomize the delay of the animation
            }}
          />
            
        ))}
      </div>
    );
  };


  export default Rain;