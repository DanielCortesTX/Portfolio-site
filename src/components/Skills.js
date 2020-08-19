import React from 'react'

export default function Skills() {
  return (
    <div className="container p-4">
      <h1 className="display-4 text-center">Skills</h1>
      <div className="mb-3 p-4 skills-body">

        <div className="skill-block p-3 boundary">
          <p className="mb-0">Advanced</p>
          <hr/>
          <ul className="lead">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript (ES8)</li>
            <li>MongoDB</li>
            <li>Express.js</li>
            <li>React.js</li>
            <li>Redux</li>
          </ul>
        </div>

        <div className="skill-block p-3 boundary">
          <p className="mb-0">Intermediate</p>
          <hr/>
          <ul className="lead">
            <li>React Native</li>
            <li>SCSS</li>
            <li>Webpack</li>
            <li>Bootstrap 4</li>
            <li>Responsive Web Design</li>
            <li>Git</li>
          </ul> 
        </div>

        <div className="skill-block p-3 boundary">
          <p className="mb-0">Familiar</p>
          <hr/>
          <ul className="lead">
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
