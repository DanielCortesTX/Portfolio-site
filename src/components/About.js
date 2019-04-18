import React from 'react'
import main from '../images/main.jpg'

export default function About() {
  return (
    <div className="container boundary">
      <hr/>
      <h1 className="display-4">About Me</h1>
      <div className="d-flex flex-row justify-content-between">
        <div className="card boundary half-and-half">
          <img src={main} alt="No available" className="main-image-sizing"/>
        </div>
        <div className="card boundary half-and-half">
          <p>Daniel is a developer specializing in the MERN stack.</p>
        </div>
      </div>
      <hr/>
    </div>
  )
}

// alt="No picture available"