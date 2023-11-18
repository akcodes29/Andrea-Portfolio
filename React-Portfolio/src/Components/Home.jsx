import React from 'react'
import ExamplePic from '../images/SS.png'



const Home = () => {
  return (
    <div>
      <Rain />
      <div>
        <h1>About Me</h1>
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
In every line of code I write, there's a blend of creativity, precision, and a genuine enthusiasm for building solutions that make a difference. Join me on this exciting journey through the ever-evolving landscape of technology, where the thrill of discovery and the joy of creation converge in the world of software development.</p>
      </div>
      
    </div>
  );
};




const Rain = () => {
  return (
    <div className="rain">
      {Array.from({ length: 15 }).map((_, i) => (
        <svg
          className="drop"
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 1 + 6}s`,
            animationDelay: `${Math.random() * 2}s`
          }}
        >
          <path d="M25 50c13.807 0 25-11.193 25-25S38.807 0 25 0 0 11.193 0 25c0 9.614 5.377 18.208 13.75 22.25a1.5 1.5 0 002.5-1.32V25a1.5 1.5 0 00-3 0v16.07C8.613 38.157 5 31.967 5 25 5 12.641 14.641 3 27 3s22 9.641 22 22-9.641 22-22 22z"/>
        </svg>
      ))}
    </div>
  );
};





export default Home;

