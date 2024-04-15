import React, { useEffect, useState } from 'react'
import Sun from './Sun' // Import the Sun component
import Rain from './Rain' // Import the Rain component
import resumeLink from '/public/_A.Keriazes_Resume.pdf';




// Initializes the Rain and Sun components
const Resume = () => {
  const [showRain, setShowRain] = useState(true);
  const [showSun, setShowSun] = useState(false);
  const [showResume, setShowResume] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRain(false);
      setShowSun(true);
      setShowResume(true);
    }, 6000); // after 6 seconds the Sun will be displayed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
       <div className ='Resume'>
        <h1>Resume</h1>
        <br />
      <h2> <a className="resumeLink" href={resumeLink} target="_blank">✨Click Here To View My Resume✨</a> </h2>
      {showResume && <resumeLink />}
      {/* calls the Rain component to be displayed */}
      {showRain  && <Rain />}  
      {/* calls the Sun component to be displayed */}
      {showSun && <Sun />}  
       
        {/* <h2> <a className="resumeLink" href={resumeLink} target="_blank">✨Click Here To View My Resume✨</a> </h2> */}
        <br />
        <br />
        <br />
      </div>
      </div>
  
    );
};
 
export default Resume;