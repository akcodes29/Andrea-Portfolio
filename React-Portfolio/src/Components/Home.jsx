import React from 'react'
import ExamplePic from '../images/SS.png'

const Home = () => {
    return (
        <div className ='Home'>
        <h2>About Me</h2>
        <img src={ExamplePic} alt="example" />
        <p>My name is Andrea and I am a software developer and technology connoisseur.</p>
      </div>
    )
}

export default Home;