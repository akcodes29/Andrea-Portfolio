import React from 'react'
import ProjectCard from './ProjectCard'
import CafeTransmuteSS from '../images/CafeTransmuteSS.png'
import leaptosuccess from '../images/leaptosuccess.png'
import comingsoon from '../images/comingsoon.png'

const Portfolio = () => {
  const projects = [
    {title: 'Cafetransmute', description:'Cafetransmute is an exciting app for American travelers traveling Europe in search of their daily coffee. It is a one stop app that allows the users to locate a coffee shop close to them, translate their order from English to the desired European language, then convert the price from USD to Euro. Check out Cafetransmute!', imgsrc: CafeTransmuteSS, buttonText: 'CafeTransmute', link: 'https://akcodes29.github.io/CafeTransmute/' }, 
    {title: 'Leap to Success', description: 'Leap to Success is a student behavior app teachers can utilize to keep certain students on task throughout the day. It is intended for student use to have accountability in their progress and daily goals throughout the school day. Teachers select the desired number of goals and label each goal, allowing for individualition for each student. It can be used for all students or just students who need to be reminded and held accountable. Check out Leap to Success!', imgsrc: leaptosuccess, buttonText: 'Leap to Success', link: 'https://aads10323-501dfea30cfd.herokuapp.com/'}, 
    {title: 'Project 3...TBD', description: 'the third project', imgsrc: comingsoon, buttonText: 'View Project 3'},
    {title: 'Project 3...TBD', description: 'the third project', imgsrc: comingsoon, buttonText: 'View Project 3'},
    {title: 'Project 3...TBD', description: 'the third project', imgsrc: comingsoon, buttonText: 'View Project 3'},
    {title: 'Project 3...TBD', description: 'the third project', imgsrc: comingsoon, buttonText: 'View Project 3'},
    
  ]
    return (
        <div className ='Portfolio'>
        <h2>Portfolio</h2>
        <div className='flex'>
          {/* this box is going to hold the comment cards */}
          {projects.map((project, index) => (
            <ProjectCard title={project.title} description={project.description} imgsrc={project.imgsrc} buttonText={project.buttonText} link={project.link} key={index} />
          ))}
        </div>
      </div>
    )
}

export default Portfolio;