import React from 'react';
import './Navbar.scss' 

const Navbar = () => {
  return(
    <nav className="navbar">
      <div>
        <p> <i className="fas fa-map-marked-alt map-icon"></i></p> 
      </div>
      <div className="heading-div">
        {`{`}COUNT{`}`}RIES
      </div>
      <div className="extra-options">
        <p> <i className="far fa-bookmark bookmark-icon"></i> </p> 
        <p> <i className="fas fa-list list-icon"></i> </p> 
      </div> 
    </nav>
  )
}

export default Navbar;