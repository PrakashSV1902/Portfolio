import React from 'react'
import "./Skillcontainer.css"
import { Element } from 'react-scroll'
import html from "../../asserts/Image/html.png"
import css from "../../asserts/Image/css.png"
import js from "../../asserts/Image/js.png"
import bootstrap from "../../asserts/Image/bootstrap.png"
import react from "../../asserts/Image/react.png"
import github from "../../asserts/Image/github.png"
import netlify from "../../asserts/Image/netlify.png"
import postman from "../../asserts/Image/postman.png"
import vscode from "../../asserts/Image/vscode.png"
import mysql from "../../asserts/Image/mysql.png"
import java from "../../asserts/Image/java.png"

const Skillcontainer = () => {
  return (
    <Element className='skillcontainer' id='skills'>
        <br />
        <h1>Skills</h1>
        <div className='skill__subcontainer'>
            <div className='skill__frotend'>
                <h2>Frontend</h2>
                <div className='frontend__container'>
                    <div className='skill__box'>
                        <img src={html} />
                        <h4>HTML</h4>
                    </div>
                    <div className='skill__box'>
                        <img src={css} />
                        <h4>CSS</h4>
                    </div>
                    <div className='skill__box'>
                        <img src={bootstrap} />
                        <h4>Bootstrap</h4>
                    </div>
                    <div className='skill__box'>
                        <img src={js} />
                        <h4>Javascript</h4>
                    </div>
                    <div className='skill__box'>
                        <img src={react} />
                        <h4>React Js</h4>
                    </div>
                </div>

            </div>
            <div className='skill__others'>
                <h2>Others</h2>
                <div className='others__container'>
                    <div className='skill__box'>
                        <img src={github} />
                        <h4>Github</h4>
                    </div>
                    <div className='skill__box'>
                        <img src={netlify} />
                        <h4>Netlify</h4>
                    </div>
                    <div className='skill__box'>
                        <img src={postman} />
                        <h4>Postman</h4>
                    </div>
                    <div className='skill__box'>
                        <img src={vscode} />
                        <h4>VS Code</h4>
                    </div>

                </div>

            </div>
            <div className='skill__backend'>
                <h2>Backend</h2>
                <div className='backend__container'>
                    <div className='skill__box'>
                        <img src={mysql} />
                        <h4>MySql</h4>
                    </div>
                    <div className='skill__box'>
                        <img src={java} />
                        <h4>Java</h4>
                    </div>

                </div>

            </div>
            

        </div>


    </Element>
    
  )
}

export default Skillcontainer