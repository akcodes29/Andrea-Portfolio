import React from 'react'
import { TypeAnimation } from 'react-type-animation';

// Home component using react-type-animation
const Home = () => {

  return (
    <div className="Home">
      <h3>Welcome</h3>
      <h2>I am Andrea K</h2>

      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Full Stack Web Developer',
          1000, // wait 1s before replacing 
          'MongoDB',
          1000,
          'Express.js',
          1000,
          'React.js',
          1000,
          'Node.js',
          1000,
          'HTML',
          1000,
          'JavaScript',
          1000,
          'jQuery',
          1000,
          'MySQL',
          1000,
          'I love to code!',
          1000
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '2em', display: 'inline-block' }}
        repeat={Infinity}
      />
    </div>
  )
}

export default Home;