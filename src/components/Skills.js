import React from 'react'

export default function Skills() {
  return (
    <div className="container boundary">
      <h1 className="display-4">Skills section</h1>
      <div className="d-flex flex-row justify-content-between p-4">
        <div className="boundary skill-block">
          <p className="mb-0 underline">General</p>
          <hr/>
          <ul className="d-flex flex-column align-items-start lead skills-list">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li> 
          </ul> 
        </div>
        <div className="boundary skill-block">
          <p className="mb-0">misc</p>
          <hr/>
          <ul className="d-flex flex-column align-items-start lead skills-list">
            <li>MongoDB</li>
            <li>Redux</li>
            <li>Webpack</li>
          </ul> 
        </div>
        <div className="boundary skill-block">
          <p className="mb-0">Frameworks</p>
          <hr/>
          <ul className="d-flex flex-column align-items-start lead skills-list">
            <li>Express.js</li>
            <li>React.js</li>
          </ul> 
        </div>
      </div>  
    </div>
  )
}
