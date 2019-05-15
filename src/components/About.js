import React from 'react'
import main from '../images/main.jpg'

export default function About() {
  return (
    <div className="about-gradient p-4">
    <div className="container">
    <h1 className="display-4 mb-4">Daniel Cortes Portfolio</h1>
      <div className="d-flex flex-row flex-wrap justify-content-around mt-2 mb-4">
        <div className="card boundary m-2 half-and-half about-mod">
          <img src={main} alt="No available" className="main-image-sizing"/>
        </div>
        <div className="card boundary half-and-half m-2 about-mod">
          <p className="p-4 lead">Daniel is a developer specializing in the MERN stack. After having self studied from courses taught by developers like Andrew Mead, Brad Traversy and Colt Steele, Daniel Graduated from Udactiy's React nanodegree program. </p>
        </div>
      </div>
    </div>
    </div>
  )
}

// alt="No picture available"