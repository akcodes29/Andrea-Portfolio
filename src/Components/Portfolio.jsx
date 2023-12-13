import React from 'react'
import ProjectCard from './ProjectCard'
import CafeTransmuteSS from '../images/CafeTransmuteSS.png'
import leaptosuccess from '../images/leaptosuccess.png'
import comingsoon from '../images/comingsoon.png'
import tswiftquiz from '../images/tswiftquizss.png'
import workoutwiz from '../images/workoutwiz-ss.png'
import swiftquiz from '../images/swiftquiz-ss.png'

const Portfolio = () => {
  const projects = [
    {
      title: 'Cafetransmute',
      description: 'Cafetransmute is an exciting app for Americans traveling Europe in search of their daily coffee. It is a one stop app that allows the users to locate a coffee shop close to them, translate their order from English to the desired European language, then convert the price from USD to Euro. Check out Cafetransmute!',
      imgsrc: CafeTransmuteSS,
      buttonText: 'CafeTransmute',
      link: 'https://akcodes29.github.io/CafeTransmute/',
      githublink: 'https://github.com/akcodes29/CafeTransmute'
    },
    {
      title: 'Leap to Success',
      description: 'Leap to Success is a student behavior app teachers can utilize to keep certain students on task throughout the day. It is intended for student use to have accountability in their progress and daily goals throughout the school day. Teachers select the desired number of goals and label each goal, allowing for individualition for each student. It can be used for all students or just students who need to be reminded and held accountable. Check out Leap to Success!',
      imgsrc: leaptosuccess,
      buttonText: 'Leap to Success',
      link: 'https://aads10323-501dfea30cfd.herokuapp.com/',
      githublink: 'https://github.com/akcodes29/Leap-To-Success'
    },
    { title: 'Taylor Swift Quiz', description: 'This is a timed quiz I created with Taylor Swift questions!', imgsrc: swiftquiz, buttonText: 'Taylor Swift Quiz', link: 'https://akcodes29.github.io/Timed-Quiz/', githublink: 'https://github.com/akcodes29/Timed-Quiz' },
    { title: 'WorkoutWiz', description: 'WorkoutWiz is a workout tracking app. It gives you the ability to keep track of your type of workout, reps, sets, and weight, with a fully functional calendar that highlights the days you worked out. Conveniently allowing the user to click on the day they want to look at and see their inputted. WorkoutWiz also comes with an awesome feature that allows users to ask a certified personal trainer questions. Head on over to WorkoutWiz, create a user account, and start you workout journey!', imgsrc: workoutwiz, buttonText: 'WorkoutWiz', link:'https://workoutwiz-f5a608d8a6a9.herokuapp.com' },
    { title: 'Project 3...TBD', description: 'the third project', imgsrc: comingsoon, buttonText: 'View Project 3' },

  ]
  return (
    <div className='Portfolio'>
      <h3>Check Out Some of My Projects!</h3>
      <div className='projects'>
        {/* this box is going to hold the comment cards */}
        {projects.map((project, index) => (
          <ProjectCard title={project.title} description={project.description} imgsrc={project.imgsrc} buttonText={project.buttonText} link={project.link} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Portfolio;