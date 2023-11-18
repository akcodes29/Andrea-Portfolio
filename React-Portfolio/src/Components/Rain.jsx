import React from 'react';


const Rain = () => {
    return (
      <div className="rain">
        {Array.from({ length: 40 }).map((_, i) => (
          <svg
            className="drop"
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 1 + 4}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            <path d="M25 50c13.807 0 25-11.193 25-25S38.807 0 25 0 0 11.193 0 25c0 9.614 5.377 18.208 13.75 22.25a1.5 1.5 0 002.5-1.32V25a1.5 1.5 0 00-3 0v16.07C8.613 38.157 5 31.967 5 25 5 12.641 14.641 3 27 3s22 9.641 22 22-9.641 22-22 22z"/>
          </svg>
        ))}
      </div>
    );
  };


  export default Rain;