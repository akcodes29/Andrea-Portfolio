import React from 'react'
import ProjectCard from './ProjectCard'
import CafeTransmuteSS from '../images/CafeTransmuteSS.png'
import leaptosuccess from '../images/leaptosuccess.png'

const Portfolio = () => {
  const projects = [
    {title: 'project 1', description:'the first project', imgsrc: CafeTransmuteSS, buttonText: 'CafeTransmute', link: 'https://akcodes29.github.io/CafeTransmute/' }, 
    {title: 'project 2', description: 'the second project', imgsrc: leaptosuccess, buttonText: 'Leap to Success', link: 'https://aads10323-501dfea30cfd.herokuapp.com/'}, 
    {title: 'project 3', description: 'the third project', buttonText: 'View Project 3'},
    {title: 'project 4', description: 'the fourth project', buttonText: 'View Project 4'}
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