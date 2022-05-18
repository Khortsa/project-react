import React from 'react'
import '../App.css'
 
function Navbar() {
  return (
    <div>
        <nav className="navbar">
          <div className="top">
          <h1><a href="#home">Juste une aide</a></h1>
          </div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#rechercher">Rechercher</a></li>
                <li><a href="#message">Message</a></li>
                <li><a href="#history">History</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
          <div className="profile">
              <div>
                image
              </div>
              <div>
                <h2>Jean Paluche</h2>
                <p>Points: 200</p>
              </div>
          </div>
         </nav>
    </div>
  )
}
export default Navbar;