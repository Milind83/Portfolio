import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <div className="n-wrapper">
          <div className="n-left">
            <div className="n-name">Milind</div>
            <span>Toggle</span>
          </div>
          <div className="n-right">
              <div className="n-list">
                  <ul>
                      <li>Home</li>
                      <li>Services</li>
                      <li>Experiance</li>
                      <li>testionials</li>
                  </ul>
              </div>
              <button className='button n-button'>Contact</button>
          </div>
      </div>
    </div>
  )
}

export default Navbar;
