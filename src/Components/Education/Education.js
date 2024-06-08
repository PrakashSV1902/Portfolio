import React from 'react'
import "./Education.css"
import { Element } from 'react-scroll'
import education from "../../asserts/Image/education.png"

const Education = () => {
  return (
    <Element id="education" className='educationcontainer'>
        <h1>Education</h1>
        <div className='education__subcontainer'>
            <div className='edu__img'>
                <img src={education}/>
            </div>
            <div className='edu__education'>
                <div className='edu__box'>
                    <div className='edu__school'>
                        <h4>Full Stack Development </h4>
                        <p>Besant Technologies</p>
                        <p>Chennai</p>
                    </div>
                    <div className='edu__year'>
                        <h4>2023-2024</h4>
                    </div>
                </div>
                <div className='edu__box'>
                    <div className='edu__school'>
                        <h4>B.E Civil Engineering - 87.5 CGPA</h4>
                        <p>Kumaraguru College of Technology</p>
                        <p>Coimbatore</p>
                    </div>
                    <div className='edu__year'>
                        <h4>2017-2021</h4>
                    </div>
                </div>
                <div className='edu__box'>
                    <div className='edu__school'>
                        <h4>HSC (State Board) - 88%</h4>
                        <p>PLWA Hr Sec School</p>
                        <p>Tirunelveli</p>
                    </div>
                    <div className='edu__year'>
                        <h4>2016-2017</h4>
                    </div>
                </div>
                <div className='edu__box'>
                    <div className='edu__school'>
                        <h4>SSLC (State Board) - 94.4%</h4>
                        <p>PLWA Hr Sec School</p>
                        <p>Tirunelveli</p>
                    </div>
                    <div className='edu__year'>
                        <h4>2014-2015</h4>
                    </div>
                </div>

            </div>
            

        </div>


    </Element>
  )
}

export default Education
