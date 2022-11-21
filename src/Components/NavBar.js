//rafc used
import React from 'react';
import {Link} from 'react-router-dom';


const NavBar = () => {
    return (
        <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          BYMART.com
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          
          <Link class="btn btn-outline-light" style={{marginLeft:"-950px",float:"left"}} to="/">Home</Link>
                    <Link class="btn btn-outline-light"  to="/about">About</Link>
        </div>
      </nav>
           
                
                   
                    
                    
                    
                  
        </div>
    )
}

export default NavBar
