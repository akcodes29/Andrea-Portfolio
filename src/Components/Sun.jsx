import React from 'react';

// Sun component using SVG animation and CSS animation properties 
const Sun = () => (
    <div className="sun">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
        <defs>
          <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="70%" style={{stopColor: "yellow", stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: "orange", stopOpacity: 1}} />
          </radialGradient>
        </defs>
        <circle cx="25" cy="25" r="22" fill="url(#sunGradient)" />
      </svg>
    </div>
  );



export default Sun;