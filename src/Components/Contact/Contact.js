import React from 'react'
import "./Contact.css"
import { Element } from 'react-scroll'
import {IconButton} from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  return (
    <Element id='contact' className='contact'>
        <h1>Contact</h1>
        <div className='contact__container'>
          <p>
            <span>Email:</span> prakashsv1902@gmail.com
          </p>
          <p>
            <span>Mobile:</span> +91 9042526962
          </p>
          <div className='contact__icon'>
              <a href="https://github.com/PrakashSV1902" target='blank'>
                <IconButton>
                  <GitHubIcon />
                </IconButton>
              </a>
              <a href="https://www.linkedin.com/in/prakash-s-v-a75833224/" target='blank'>
                <IconButton>
                  <LinkedInIcon />
                </IconButton>
              </a>
              <a href="https://www.instagram.com/_prakash_svp?igsh=bWt2Nm9uamhjYXV4" target='blank'>
                <IconButton>
                  <InstagramIcon />
                </IconButton>
              </a>
          </div>

        </div>

    </Element>
  )
}

export default Contact