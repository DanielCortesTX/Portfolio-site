import React from 'react'
import ProjectLink from './ProjectLink'

export default function Projects(props) {
  return (
    <div className="container boundary pb-3">
      <h1 className="display-4">Projects</h1>
      <div class="d-flex flex-row">
      {props.sites.map((site, index) => <ProjectLink key={index} site={site}>test</ProjectLink>)}
      </div>
    </div>
  )
}

// <a href="https://www.cortescorner.com" className="p-2 boundary">MERN stack Blog</a>
//         <a href="https://eager-hermann-f38d2c.netlify.com/" className="p-2 boundary">Pure Javascript app.</a>