import React from 'react'
import {Link} from "react-scroll"
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className='header__left'>
            <h1>
                Portfolio
            </h1>
        </div>
        <div className='header__right'>
            <Link to='about' smooth ={true} duration={500}>
                About Me
            </Link>
            <Link to='education' smooth ={true} duration={500}>
                Education
            </Link>
            <Link to='skills' smooth ={true} duration={500}>
                Skills
            </Link>
            <Link to='projects' smooth ={true} duration={500}>
                Projects
            </Link>
            <Link to='contact' smooth ={true} duration={500}>
                Contact
            </Link>
            

        </div>
    </div>
  )
}

export default Header