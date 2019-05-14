import React from 'react'

function Footer() {
  return (
    <div className="text-white bg-dark p-4">
    <div>
    <a href="https://github.com/DanielCortesTX" className="p-2">
      <i className="fab fa-github fa-2x contact-link"></i>
    </a>  
    <a href="https://www.linkedin.com/in/daniel-cortes-webdev/" className="p-2">
      <i className="fab fa-linkedin-in fa-2x contact-link"></i>
    </a>    
  </div>
      <p className="lead">Site created and maintained by Daniel Cortes.</p>
    </div>
  )
}

export default Footer