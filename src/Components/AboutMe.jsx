import React from 'react'
import headshot from '../images/headshot.png'


// Initializes the Rain and Sun components
const AboutMe = () => {
  return (
    <div className='AboutMe'>
      <br />
      <br />
   
  <div>
        <img src={headshot} alt="example" />  
        <p>
          I'm Andrea, a versatile professional with a passion for technology. My journey began with a Bachelor's degree in Political Science from Florida State University, followed by a Master's degree in Education from the University of Tampa. Transitioning from the realm of education to technology, I embarked on a transformative journey by completing a full-stack coding bootcamp through UCF and currently pursuing further education in Computer Science at the University of Central Florida. This unique blend of academic backgrounds has equipped me with a diverse skill set that I leverage to create innovative solutions and drive business success.
          <br />
          <br />
          As a brand manager for a company that has generated multi-millions and traversed the nation, I've played a pivotal role in shaping and elevating the brand's presence in the digital realm and beyond. Led the planning and execution of integrated marketing campaigns spanning various channels, including digital, social media, podcasts, and hosted events. By orchestrating cohesive campaigns across multiple touchpoints, we were able to maximize brand exposure and engagement, driving significant results and ROI. My experience in brand management has honed my skills in strategic planning, project management, and cross-functional collaboration, enabling me to deliver impactful results that align with business objectives.
          <br />
          <br />
          During my five years as an educator, I dedicated myself to empowering students in low socioeconomic status schools by integrating technology into the classroom. This experience ignited my interest in software development, leading me to specialize in the MERN stack, where I proficiently leverage MongoDB, Express.js, React.js, and Node.js to craft robust and dynamic applications. Additionally, my repertoire includes proficiency in SQL, NoSQL, JavaScript, SAS, and C programming languages. I have also honed my skills in front-end development, utilizing HTML, CSS, Bootstrap, and Materialize to create visually appealing and user-friendly interfaces.
          <br />
          <br />
          Beyond the realm of technology, I've also gained skills in the hospitality industry, where I've managed teams and served in diverse roles, including overseeing bottle service and providing exceptional customer experiences at The Cosmopolitan of Las Vegas as a Casino beverage server. My experience in the hospitality industry has equipped me with a unique perspective on customer service and a keen eye for detail, which I bring to my work as a technology professional. I'm adept at collaborating with cross-functional teams, communicating effectively with stakeholders, and delivering results that exceed expectations.
          <br />
          <br />
          What sets me apart is my unwavering commitment to continuous learning and adaptability. I thrive in dynamic environments, embracing challenges as opportunities for growth. As a lifelong learner, I am eager to acquire new skills and knowledge to contribute effectively to any team or project.
          <br />
          <br />
          As I embark on this exciting journey, I bring with me a unique blend of experiences, a hunger for knowledge, and a relentless drive to excel. I am eager to become an integral part of a forward-thinking team, where I can apply my diverse skill set and passion for technology to drive innovation and achieve shared goals. 
          <br />
          <br />
          <a className="gitRepo" href="https://github.com/akcodes29/Keriazes-Andrea-Portfolio" target="_blank" >🌟Click here to view the repo for this portfolio.🌟</a>
          <br />
          <br />
        </p>
      </div>
    </div>
   
  )


  };
export default AboutMe;