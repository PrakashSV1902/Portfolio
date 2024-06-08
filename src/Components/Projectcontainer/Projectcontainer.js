import React from 'react'
import "./Projectcontainer.css"
import { Element } from 'react-scroll'
import Displayproject from '../Displayproject/Displayproject'
import kartzone from "../../asserts/Image/Kartzone.PNG"
import billing from "../../asserts/Image/Billing.PNG"
import todo from "../../asserts/Image/todo.PNG"
import "./Projectcontainer.css"


const Projectcontainer = () => {
  

  return (
    <Element id='projects' className='projectcontainer'>
      <br />
      <h1>Projects</h1>
      <div className='project__subcontainer'>
        <h3>Here are some Frontend projects I have done </h3>
        <div className='projectcontainer__proj'>
          <div className='proj__box'>
            <Displayproject key={1} img={kartzone} title="Ecommerce-Kartzone " link="https://prakashsv1902.github.io/KartZone/"/>
            <h5>Tools used: HTML,CSS,Bootstrap,Javascript</h5>
            <p>Developed a Frontend E-Commerce website with basic functionalities. Integrated with REST APIs to dynamically load product data and handle user authentication.</p>
          </div>

          <div className='proj__box'>
            <Displayproject key={2} img={billing} title="Simple Billing System" link="https://prakashsv1902.github.io/Simple_Billing_System/"/>
            <h5>Tools used: HTML,CSS,Bootstrap,Javascript</h5>
            <p>Developed a simple billing system using JS. The system will enable users to add products with prices, calculate the total amount, and apply discounts. </p>
          </div>

          <div className='proj__box'>
            <Displayproject key={3} img={todo} title="To-Do List" desc="dddd" link="https://sparkly-klepon-8a2a9c.netlify.app"/>
            <h5>Tools used: HTML,CSS,Bootstrap,Javascript</h5>
            <p>Developed a interactive and user-friendly To-Do list website designed to help users manage their tasks efficiently.Implemented local storage to persist user tasks across sessions</p>
          </div>

          
           
          
        </div>

      </div>
      <br />
      

    </Element>
    
  )
}

export default Projectcontainer