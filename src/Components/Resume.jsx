import React, { useEffect, useState } from 'react'
import Sun from './Sun' // Import the Sun component
import Rain from './Rain' // Import the Rain component
import resumeLink from '/public/_A.Keriazes_Resume.pdf';
import ssResume from '../assets/ssResume_open.png';




// Initializes the Rain and Sun components
const Resume = () => {
  const [showRain, setShowRain] = useState(true);
  const [showSun, setShowSun] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRain(false);
      setShowSun(true);
     
    }, 6000); // after 6 seconds the Sun will be displayed

    return () => clearTimeout(timer);
  }, []);

  return (

    <div className='resume-background-image'>
      {showRain  && <Rain />}  
       <div className ='Resume'>
       <h2> <a className="resumeLink" href={resumeLink} target="_blank">✨Click To Download✨</a> </h2>
    
        {/* calls the Rain component to be displayed */}
       
       
        {/* <div className="resume-container">
          <img src={ssResume} alt="resume" />
        </div> */}
      {/* calls the Sun component to be displayed */}
      {showSun && <Sun />}  

        {/* <h2> <a className="resumeLink" href={resumeLink} target="_blank">✨Click Here To View My Resume✨</a> </h2> */}
      </div>
      </div>
  
    );
};
 
export default Resume;