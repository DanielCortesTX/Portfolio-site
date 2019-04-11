import React from 'react'

export default function About() {
  return (
    <div className="container boundary">
      <hr/>
      <h1 className="display-4">About Me</h1>
      <div className="d-flex flex-row justify-content-between">
        <div className="card boundary">
          <p>This will be a picture.</p>
        </div>
        <div className="card boundary">
          <p>Daniel is a developer specializing in the MERN stack.</p>
        </div>
      </div>
      <hr/>
    </div>
  )
}
