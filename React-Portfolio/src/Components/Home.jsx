import React from 'react'
import { TypeAnimation } from 'react-type-animation';

// Home component using react-type-animation
const Home = () => {

  return (
    <div className="Home">
      
      <iframe src="https://giphy.com/embed/xUPGGDNsLvqsBOhuU0" width="340" height="220" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/animation-cool-hello-xUPGGDNsLvqsBOhuU0"></a></p>
      <h2>I'm Andrea K</h2>
      <h3>Full Stack Web Developer</h3>

      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'MongoDB',
          1000, // wait 1s before replacing 
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