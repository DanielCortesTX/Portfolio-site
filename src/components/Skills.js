import React from 'react'

export default function Skills() {
  return (
    <div className="container p-4">
      <h1 className="display-4">Skills</h1>
      <div className="d-flex flex-row flex-wrap mb-3 justify-content-around p-4">
        <div className="skill-block skills p-3">
          <p className="mb-0 list-header">Advanced</p>
          <hr className="line-hr"/>
          <ul className="d-flex flex-column  lead skills-list">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript (ES8)</li>
            <li>MongoDB</li>
            <li>Express.js</li>
            <li>React.js</li>
            <li>Redux</li>
          </ul>
        </div>
        <div className="skill-block p-3">
          <p className="mb-0 list-header">Intermediate</p>
          <hr className="line-hr"/>
          <ul className="d-flex flex-column lead skills-list">
            <li>React Native</li>
            <li>SCSS</li>
            <li>Webpack</li>
            <li>Bootstrap 4</li>
          </ul> 
        </div>
        <div className="skill-block skills p-3">
          <p className="mb-0 list-header">Familiar</p>
          <hr className="line-hr"/>
          <ul className="d-flex flex-column lead skills-list">
            <li>Angular 2</li>
            <li>Angular Js</li>
            <li>PHP</li>
            <li>MySQLi</li>
          </ul> 
        </div>
      </div>  
    </div>
  )
}
