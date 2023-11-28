import React, { useEffect, useState } from 'react'
import Sun from './Sun' // Import the Sun component
import Rain from './Rain' // Import the Rain component
import ExamplePic from '../images/SS.png'


// Initializes the Rain and Sun components
const AboutMe = () => {
  const [showRain, setShowRain] = useState(true);
  const [showSun, setShowSun] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRain(false);
      setShowSun(true);
    }, 11000); // after 11 seconds the Sun will be displayed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* calls the Rain component to be displayed */}
      {showRain && <Rain />}  
      {/* calls the Sun component to be displayed */}
      {showSun && <Sun />}  
      <div>
        <h1>Welcome</h1>
        <img src={ExamplePic} alt="example" />
        <p>
          Hello there! I'm Andrea, a passionate software developer and technology connoisseur with a relentless curiosity for learning. Armed with a master's degree in education, I bring a unique perspective to the world of coding. My journey in the realm of technology has been nothing short of exhilarating, and I find joy in the art of crafting digital solutions.
          <br />
          <br />
          My coding playground predominantly revolves around the MERN stack, where I thrive in leveraging MongoDB, Express.js, React.js, and Node.js to create robust and dynamic applications. In the backend, Node.js and Express.js form the backbone of my projects, facilitating seamless server-side operations. MongoDB, with its flexible and scalable database architecture, serves as the cornerstone for data storage, while React.js empowers me to build intuitive and responsive user interfaces on the frontend.
          <br />
          <br />
          What sets me apart is not just my technical expertise but also my unwavering commitment to lifelong learning. Technology is ever-evolving, and I relish the challenge of staying at the forefront of the latest developments. This commitment to continuous learning not only keeps my skills sharp but also ensures that I can adapt and innovate in an ever-changing landscape.
          <br />
          <br />
          Whether it's unraveling the intricacies of a new programming language, exploring innovative development methodologies, or diving into the world of emerging technologies, I embrace each opportunity to expand my knowledge base. My dedication to education doesn't end with my degree; it's a guiding principle that fuels my professional growth and contributes to the success of the projects I undertake.
          <br />
          <br />
          In every line of code I write, there's a blend of creativity, precision, and a genuine enthusiasm for building solutions that make a difference. Join me on this exciting journey through the ever-evolving landscape of technology, where the thrill of discovery and the joy of creation converge in the world of software development.
          <br />
          <br />
          <a className="gitRepo" href="https://github.com/akcodes29/Andrea-Portfolio" target="_blank">Click here to view the repo for this portfolio.</a>
        </p>
      </div>
      <br />
      <br />
    </div>
  );

};

export default AboutMe;