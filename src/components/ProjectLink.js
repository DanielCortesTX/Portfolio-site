import React from 'react'

export default function ProjectLink(props) {
  return (
    <div className="card p-3 project-link">
      <div className="card mb-4">
        <img src={props.site.image} alt="" className="pic-thumb"/>
        <div className="link-overlay">
          <p className="lead p-1 text-white">{props.site.description}</p>
        </div>
      </div>
      {props.site.title}
      <a href={props.site.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-4 mb-1">View Site</a>
      <a href={props.site.github} target="_blank" rel="noopener noreferrer" className="btn btn-success mb-1">View Code</a>
    </div>
  )
}
