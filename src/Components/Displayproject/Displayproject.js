import React, { useState } from 'react'
import "./Displayproject.css"

const Displayproject = ({img,title,link}) => {
    const [show,setShow] = useState(false)
  return (
    // <a href={link}>
        <div className='Displayproject' onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            { show ? (
                <div className='projectcontent'>
                    <h4>{title}</h4>
                    <a href={link} target='blank'><button>View Project</button></a>
                    
                </div>
                
            ):(
                <img src={img}  />
                
            )}

        </div>
    // </a>
  )
}

export default Displayproject