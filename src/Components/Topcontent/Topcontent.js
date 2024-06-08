import React from 'react'
import "./Topcontent.css"
import My_Picture from "../../asserts/Image/My_Picture.jpeg"

const Topcontent = () => {
  return (
    <div className='topcontent'>
        <div>
            <img src={My_Picture} className='topcontent__img' />
        </div>
        <div className='topcontent__container '>
          <div className='movetext'>
            <h1>HELLO!</h1>
            <h1>I'm Prakash S V</h1>
            <h2>Aspiring Frontend Developer</h2>
            <a href='https://drive.google.com/file/d/1QtyuB7W4xEW_DFxqVl24-JPYyj11WC3-/view?usp=drivesdk'>
                <button>Download CV</button>
            </a>
          </div>
            
        </div>

    </div>
  )
}

export default Topcontent