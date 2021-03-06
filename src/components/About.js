import React from 'react'
import main from '../images/main.jpg'

export default function About() {
  return (
    <div className="about-gradient p-4">
        <div className="row text-center">
          <h1 className="display-4 mb-4 col-12" id="header">Daniel Cortes Portfolio</h1>
        </div>

        <div className="row mb-4 about">
          <div className="col-10 col-md-5 col-xl-6 card boundary">
            <img src={main} alt="No available" className="main-image-sizing"/>
          </div>
          <div className="col-10 col-md-5 col-xl-6 card boundary half-and-half">
            <p className="p-4 lead">Daniel is a developer specializing in the MERN stack. After having self studied from courses taught by developers like Andrew Mead, Brad Traversy and Colt Steele, Daniel Graduated from Udactiy's React nanodegree program. Since March 2020, Daniel has been a Bootcamp Coding Instructor with Nucamp</p>
          </div>
        </div>
      
    </div>
  )
}

// alt="No picture available"