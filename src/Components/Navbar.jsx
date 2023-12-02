import React from 'react'
import '../css/style.css'
import '../css/buttonhover.css'
import '../css/navqueries.css'
import '../css/navbar.css'
import '../css/footer.css'


// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import {Link} from 'react-router-dom'
// import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min'

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
export default function Navbar() {

  
  return (
    <>
{/* <Router> */}
      {/* <!-- ----------------------------- NAVBAR -------------------------  --> */}
        
        <div className="topnav" id="myTopnav" >
       

          {/* <!-- <ion-icon name="list-circle-outline"></ion-icon>     &nbsp; --> */}
          
          <a className="head textsize" to="#!"><ion-icon id="icon" name="book-outline"></ion-icon> College Notes</a>
          <div className="Navbar-link">
          <Link className="home_a active" to="/home">Home</Link>
          <Link className="about_a" to="/about">About</Link>
          {/* <!-- <a to="#contact">Contact</a> --> */}
  
          {/* <!-- FIRST Dropdown  --> */}
          <div className="dropdown">
            <button className="dropbtn">Class Notes
              {/* <i className="fa fa-caret-down"></i> */}
            </button>
            <div className="dropdown-content">
              <Link to="/search1styearclassnotes">First Year</Link>
              <Link to="/search2ndyearclassnotes">Second Year</Link>
              <a to="#latestUpdate">Latest Updates</a>
            </div>
          </div>
          
          {/* <!-- SECOND Dropdown  --> */}
          <div className="dropdown">
            <button className="dropbtn ">Coding
              {/* <i className="fa fa-caret-down"></i> */}
            </button>
            <div className="dropdown-content">
              <a to="#">Web Development</a>
              <a to="#">Extras</a>
            </div>
          </div>
          <Link className="contant_a" to="/contact">Contact</Link>
          <a to="javascript:void(0);" className="icon" onClick={myFunction}>&#9776;</a>
        </div>
  
    </div>

    {/* </Router> */}
    </>
  )
}

