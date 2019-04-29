import React from 'react'

export default function ProjectLink(props) {
  return (
    <div className="card p-2 project-link">
      <img src={props.site.image} alt=""/>
      {props.site.title}
      <a href={props.site.link} className="btn btn-primary m-1">View</a>
    </div>
  )
}
