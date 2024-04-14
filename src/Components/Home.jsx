import React from 'react'
import { TypeAnimation } from 'react-type-animation';

// Home component using react-type-animation
const Home = () => {

  return (
    <div className="Home">
      
      <iframe src="https://giphy.com/embed/xUPGGDNsLvqsBOhuU0" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/animation-cool-hello-xUPGGDNsLvqsBOhuU0"></a></p>
      <h2>I'm Andrea K</h2>
      <h3>Technology Professional</h3>

      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Innovative',
          1000, // wait 1s before replacing 
          'Collaborative',
          1000,
          'Agile',
          1000,
          'Strategic',
          1000,
          'Versatile',
          1000,
          'Results-driven',
          1000,
          'Customer-centric',
          1000,
          'Analytical',
          1000,
          'Communicative',
          1000,
          'Leadership',
          1000,
          'Resilient',
          1000,
          'Eager',
          1000,
          'Ambitious',
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