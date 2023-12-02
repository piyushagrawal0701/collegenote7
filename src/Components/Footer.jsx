import React from 'react'
import {Link} from 'react-router-dom'
import './css/footer.css'

const Footer = () => {
  return (
    <>
   {/* <!-- -------------------------------------------------------------------------------- -->
       <!------------------------------------ FOOTER --------------------------------------- -->
       <!-- -------------------------------------------------------------------------------- --> */}


<footer className="text-gray-600 " data-aos="fade"  data-aos-duration="2000" data-aos-delay="300">

  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col " >
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <Link className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" to="/">
          <ion-icon id="icon" style={{color: "darkblue"}} name="book-outline"></ion-icon>
        <span className="ml-3 text-3xl">College Notes</span>
        {/* <!-- <h1 className="ml-3 text-3xl">College Notes</h1> --> */}
      </Link>
      <p className="mt-2 text-sm text-gray-500 textSmall">
        College Notes is the perfect place for you!, We have a wide variety of notes and assignments covering all major subjects, written by real students, so you can be sure they are accurate and up-to-date.
        Sign up today and start studying smarter! </p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 footerdivmovehomepage">
        
        <h2 className="tracking-widest  mb-3"></h2>
        <nav className="list-none mb-10 my-10">
          <h2 className=" tracking-widest   mb-3">First Year</h2>
          <li>
            <Link to="/search1styearclassnotes">Class Notes</Link>
          </li>
          <li>
            <Link to="/search2ndyearclassnotes" >Assignment</Link>
          </li>
          <li>
            <a  onClick={() => alert('Syllabus not released')} >Syllabus</a>
          </li>
          <li>
            <a  onClick={() => alert('Time-Table not released')}>Time Table</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4  footerdivmovehomepage">
        <h2 className=" tracking-widest  mb-3 my-10"></h2>
        <nav className="list-none mb-10">
          <h2 className=" tracking-widest   mb-3">Second Year</h2>
          <li>
            <Link to="/search2ndyearclassnotes">Class Notes</Link>
          </li>
          <li>
            <Link to="/search2ndyearclassnotes">Assignment</Link>
          </li>
          <li>
            <Link to="/syllabus3sem">Syllabus</Link>
          </li>
          <li>
            <Link to="/timetable3sem">Time Table</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 footerdivmovehomepage">
        <h2 className=" tracking-widest mb-3"></h2>
        <nav className="list-none mb-10 my-10">
          <h2 className=" tracking-widest   mb-3">Info</h2>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="mailto:piyushnitian777@gmail.com">Mail</Link>
          </li>
          <li>
            <Link to="/contact">Contant us</Link>
          </li>
          <li>
            <Link to="#FAQ"></Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <nav className="list-none mb-10 my-10">
          <h2 className=" tracking-widest   mb-3">Follow us</h2>
          <li>
            <a href="https://www.linkedin.com/in/piyush-agrawal-b51aa926b/"><ion-icon name="logo-linkedin" className="mx-2" id="whatsapp"></ion-icon>Linked In</a>
          </li>
          <li>
            <a href="https://www.instagram.com/piyushagrawal0701/"> <ion-icon name="logo-instagram" className="mx-2" id="instagram"></ion-icon>Instagram</a>
          </li>
          <li>
            <a href="https://t.me/piyushnitian" ><ion-icon name="navigate-outline" className="mx-2" id="discord"></ion-icon>Telegram</a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UClOmB7C2tNGsCJok10a-aiQ" > <ion-icon name="logo-youtube" className="mx-2" id="twitter"></ion-icon>Youtube</a>
          </li>
         
        </nav>
      </div>
    </div>
  </div>
  <hr />
  <div className="copyrightdiv">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className=" text-sm text-center sm:text-left">© 2023 College Notes - All rights reserved.
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className=" ml-1" target="_blank">@ Piyush Agrawal</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 ">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 " href="https://www.instagram.com/gigs.ng/" id="instagram">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 ">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer