import React from 'react'

export default function ProjectLink(props) {
  return (
    <div className="card p-2 project-link">
      <div className="card">
        <img src={props.site.image} alt="" className="pic-thumb"/>
        <div className="link-overlay">
          <p className="lead p-1 text-white">{props.site.description}</p>
        </div>
      </div>
      {props.site.title}
      <a href={props.site.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary m-1">View</a>
    </div>
  )
}
