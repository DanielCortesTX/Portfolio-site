import React from 'react'

export default function Skills() {
  return (
    <div className="container p-4">
      <h1 className="display-4">Skills</h1>
      <div className="d-flex flex-row justify-content-between p-4">
        <div className="skill-block">
          <p className="mb-0 list-header">General</p>
          <hr className="line-hr"/>
          <ul className="d-flex flex-column align-items-start lead skills-list">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li> 
          </ul> 
        </div>
        <div className="skill-block">
          <p className="mb-0 list-header">Frameworks</p>
          <hr className="line-hr"/>
          <ul className="d-flex flex-column align-items-start lead skills-list">
            <li>Express.js</li>
            <li>React.js</li>
          </ul> 
        </div>
        <div className="skill-block">
          <p className="mb-0 list-header">Misc</p>
          <hr className="line-hr"/>
          <ul className="d-flex flex-column align-items-start lead skills-list">
            <li>MongoDB</li>
            <li>Redux</li>
            <li>Webpack</li>
          </ul> 
        </div>
      </div>  
    </div>
  )
}
