import React from 'react'
import { Element } from 'react-scroll'
import about from "../../asserts/Image/about.png"
import "./About.css"

const About = () => {
  return (
    <Element id="about" className='aboutcontainer'>
        <h1>About Me</h1>
        <div className='about__subcontainer'>
            <div className='about__para'>
                <ul>
                    <li>I am a motivated and detail-oriented Frontend Developer with a solid foundation in HTML,CSS,JavaScript and React JS.</li>
                    <li>I have honed my skills through creating responsive web applications.</li>
                    <li>During my coursework, I developed a keen interest in user experience design and accessibility, always aiming to create intuitive and inclusive web interfaces.</li>
                    <li>My ability to quickly adapt to new technologies and my passion for continuous learning drive me to stay updated with industry trends and best practices.</li>
                    <li>I am eager to take on challenging projects and make a meaningful impact as I embark on my career in frontend development.</li>
                </ul>

            </div>
            <div className='about__img'> 
                <img src={about} />
            </div>

        </div>

    </Element>
  )
}

export default About