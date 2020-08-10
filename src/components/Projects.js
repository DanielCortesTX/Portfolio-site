import React from 'react'
import ProjectLink from './ProjectLink'

export default function Projects(props) {
  return (
    <div className="stagger text-center">
      <div className="container pb-4">
        <h1 className="display-4 py-4">Projects</h1>
        <div className="projects-feed">
          {props.sites.map((site, index) => <ProjectLink key={index} site={site}/>)}
        </div>
      </div>
    </div>
  )
}

// <a href="https://www.cortescorner.com" className="p-2 boundary">MERN stack Blog</a>
//         <a href="https://eager-hermann-f38d2c.netlify.com/" className="p-2 boundary">Pure Javascript app.</a>