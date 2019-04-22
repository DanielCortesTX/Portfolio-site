import React from 'react'

export default function Projects(props) {
  return (
    <div className="container boundary pb-3">
      <h1 className="display-4">Projects</h1>
      <div>
      {props.sites.map((site, index) => <h1 key={index}>test</h1>)}
      </div>
    </div>
  )
}

// <a href="https://www.cortescorner.com" className="p-2 boundary">MERN stack Blog</a>
//         <a href="https://eager-hermann-f38d2c.netlify.com/" className="p-2 boundary">Pure Javascript app.</a>