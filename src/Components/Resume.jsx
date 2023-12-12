import React from 'react'
import resume from '/public/AndreaK-Dev-Resume.pdf';

// Resume component with a link to my resume
const Resume = () => {
    return (
        <div className ='Resume'>
        <h1>Resume
        </h1>
        <br />
        <h2> <a className="resumeLink" href={resume} target="_blank">Click Here To View My Resume</a> </h2>
        <br />
        <br />
        <br />

      </div>
    )
}

export default Resume;