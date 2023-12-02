import React from 'react'
import {Link} from 'react-router-dom'
import '../../css/Searchdoc.css'


import netlifyIdentity from 'netlify-identity-widget';

const Searchdoc = () => {
    const user = netlifyIdentity.currentUser();
    console.log({ user });

    function myFunction() {
        // Declare variables
        var input, filter, ul, li, a, i;
        input = document.getElementById('myInput');
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName('li');
    
        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }
  return (
      <>



 {/* <!-- ----------------------------- SEARCH SECTION ------------------------------------  --> */}

  
<section>


         <div class="search-div">

          <h1 class="text-4xl font-medium title-font text-blue-500 mb-12 text-center my-10">&#10022; SEARCH &#10022;</h1>


                <input type="text" id="myInput" onKeyUp={myFunction} placeholder="Search here..."/>

                <ul id="myUL">
                  <li><Link to="#" class="header">A</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/search1styearclassnotes">Assignment ( 1st Year )</Link></li>
                  <li><Link to="/search2ndyearclassnotes">Assignment ( 2nd Year )</Link></li>
                  <li><Link to="/signin_ada">Analysis and Design of Algorithm</Link></li>
      
                
                  <li><Link to="#" class="header">C</Link></li>
                  <li><Link to="/search1styearclassnotes">Class Notes ( 1st Year )</Link></li>
                  <li><Link to="/search2ndyearclassnotes">Class Notes ( 2nd Year )</Link></li>
                  <li><Link to="/communication_system_3sem">Communication System ( 2nd Year )</Link></li>
                  <li><Link to="/signin_cso">Computer System Organization ( 2nd Year )</Link></li>
                  <li><Link to="/">Communication ( 1st Year )</Link></li>
                  <li><Link to="/">Chemistry ( 1st Year ) </Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                
                  <li><Link to="#" class="header">I</Link></li>
                  <li><Link to="#">Internet Programming</Link></li>

                  <li><Link to="#" class="header">M</Link></li>
                  <li><Link to="/Pages/First Year/maths1sem.html">Maths ( 1 Sem )</Link></li>
                  <li><Link to="#">Maths ( 2 Sem )</Link></li>
                  <li><Link to="/signin">Maths ( 3 Sem )</Link></li>

                  <li><Link to="#" class="header">O</Link></li>
                  <li><Link to="/signin_oops">Oops</Link></li>

                  <li><Link to="#" class="header">P</Link></li>
                  <li><Link to="#">Principal of Software System</Link></li>

                  <li><Link to="#" class="header">S</Link></li>
                  <li><Link to="/syllabus3sem">Syllabus ( 3 sem )</Link></li>

                  <li><Link to="#" class="header">T</Link></li>
                  <li><Link to="/timetable3sem">Time Table ( 3 sem )</Link></li>
                </ul>
         </div>
</section>
      </>
  )
}

export default Searchdoc