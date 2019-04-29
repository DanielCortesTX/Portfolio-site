import React from 'react'

export default function ProjectLink(props) {
  return (
    <div className="card p-2 project-link">
      <img src={props.site.image} alt="" className="pic-thumb"/>
      {props.site.title}
      <a href={props.site.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary m-1">View</a>
    </div>
  )
}
