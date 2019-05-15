import React from 'react'

export default function Skills() {
  return (
    <div className="container p-4">
      <h1 className="display-4">Skills</h1>
      <div className="d-flex flex-row flex-wrap mb-3 justify-content-around p-4">
        <div className="skill-block skills p-3">
          <p className="mb-0 list-header">General</p>
          <hr className="line-hr"/>
          <ul className="d-flex flex-column  lead skills-list">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript (ES6)</li>
          </ul>
        </div>
        <div className="skill-block p-3">
          <p className="mb-0 list-header">Frameworks</p>
          <hr className="line-hr"/>
          <ul className="d-flex flex-column lead skills-list">
            <li>Express.js</li>
            <li>React.js</li>
          </ul> 
        </div>
        <div className="skill-block skills p-3">
          <p className="mb-0 list-header">Misc</p>
          <hr className="line-hr"/>
          <ul className="d-flex flex-column lead skills-list">
            <li>MongoDB</li>
            <li>Redux</li>
            <li>Webpack</li>
          </ul> 
        </div>
      </div>  
    </div>
  )
}
