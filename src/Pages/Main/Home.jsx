import React from 'react'
import Typed from 'typed.js';
import {Link} from 'react-router-dom'
import { useEffect , useRef } from 'react';


// ------------ Importing Components -------- 

// ---------- Importing Animated Images ------------ // 
import logo from './Animated Images/Home/editorial-commision-animate.svg'
import freeCourses from './Animated Images/Home/programming-animate.svg'

import teaching from './Animated Images/Home/teaching-animate.svg'
import takingNotes from './Animated Images/Home/taking-notes-animate.svg'
import mindMaps from './Animated Images/Home/Mind_maps.svg'


// ---------- Importing Animated Images ------------ // 
import javaImg from './Images/Home/java lang.jpg'
import CImg from './Images/Home/c lang.jpeg'
import pythonImg from './Images/Home/python lang.jpg'
import myPhoto from './Images/myphto-roundImg.png'

import '../../css/buttonhover.css'
import '../../css/style.css'
import CardSlider from '../../Components/CardSlider';



const Home = () => {

// --------- Tabs Script Function ------------
const openCity = (cityName) => {
  const tabContents = document.querySelectorAll(".tabcontent");
  const tabLinks = document.querySelectorAll(".tablinks > a");

  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }

  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  tabLinks[tabLinks.length - 1].className += " active";
};

// -------- AUTOMATIC OPEN TAB SCRIPT FOR COLLEGE YEAR --------
const openDefault = () => {
  // Get the default tab button element
  const defaultTabButton = document.getElementById("defaultOpen");

  // Trigger a click event on the default tab button
  if (defaultTabButton) {
    defaultTabButton.click();
  }
};

//     // --------- Tabs Script Function  ------------------------------------- 
  const notesjee = (cityName) => {
   
    const tabContents = document.querySelectorAll(".tabcontent");
    const tabLinks = document.querySelectorAll(".tablinks > a");
  
    for (let i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = "none";
    }
  
    for (let i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
  
    document.getElementById(cityName).style.display = "block";
    tabLinks[tabLinks.length - 1].className += " active";
  }
  
// -------- AUTOMATIC OPEN TAB SCRIPT FOR JEE/NEET NOTES --------
const defaultOpenNotes = () => {
  // Get the button element for the default tab (Class - 11th)
  const defaultTabButton = document.getElementById("defaultOpenNotes");

  // Trigger a click event on the default tab button
  if (defaultTabButton) {
    defaultTabButton.click();
  }
};

// Call both functions when the page loads
window.addEventListener("load", () => {
  openDefault();
  defaultOpenNotes();
});

//  --------------- TYPING ANIMATION (TYPED JS ) --------------------- 


  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Class Notes", "Assignments", "Previous Year Papers", "Free Courses and notes" , "Start Studying Smarter Today !"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 1000,
      typeSpeed: 50,
    
    });
  
    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);


  return (

    
   <>

{/* <!-- ------ SEARCH BTN ---------  --> */}
  
  <Link to="/search"><button  class="search-btn"><ion-icon name="search"></ion-icon></button></Link>


           {/* <!-- ----------------------------- HEADER SECTION -------------------------  --> */}
  <section className="text-gray-600 body-font header align-items center items-center">
    <div className="container mx-auto flex px-5 py-24 flex-col md:flex-row  items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0" data-aos="zoom-out-right"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000" data-aos-delay="200">
        <img className="object-cover object-center rounded  device-width mainLogo" alt="hero" src={logo} data-aos="zoom-in-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000" data-aos-delay="200"/>
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 " data-aos="zoom-in-up"  data-aos-duration="1000" data-aos-delay="500">
        <span ref={el}></span> 
          {/* <span id="element"></span> */}
        </h1>
        <p className="mb-8 leading-relaxed " data-aos="slide-left"  data-aos-duration="1000" data-aos-delay="700">Introducing the ultimate college notes website! Boost your studies with our diverse collection of class notes, assignments, mid-semester papers, end-semester papers, coding resources, and much more. Our platform offers a user-friendly and interactive experience, making it easier than ever to access and organize all your study materials. </p>
        <div className="flex justify-center buttonbox" data-aos="zoom-in-up"  data-aos-duration="1000">
          <a href="#learn"><button className="flex mx-auto assignment  inline-flex text-white border-0 py-2 px-6 focus:outline-2px btnslide rounded text-lg get_started_btn">Learn</button></a>

          <a href="#classNOtes"><button className="flex mx-auto classnote text-gray-500 inline-flex  py-2 px-6  btnslide rightslide rounded colouredText">Class Notes</button></a>
        </div>
      </div>
    </div>
  </section>

  <hr/>

  {/* <!-- ------------------------ LATEST UPDATES SECTION -------------------------  --> */}
     <section className='latestupdate' data-aos="fade-in"
      data-aos-duration="1000" data-aos-delay="50">
          
            <div className="movie-heading text-center" id="webseriessection" data-aos="fade-up
              "
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"> <h1 className="latestupdate-h1 movie-h1-transition  " data-aos="flip-right" data-aos-duration="1000" >
               Latest Updates 
            </h1></div> 

       <div className="latestupdatespoints" data-aos="zoom-in"
      data-aos-duration="1000" data-aos-delay="70">

            <div className="LUdiv">
                <Link to="/search_11_mind_maps"><h3><ion-icon  name="caret-forward-circle-outline"></ion-icon>JEE Mind Maps</h3></Link>
            </div>

           <div className="LUdiv">
               <Link to="/maths_3sem"><h3><ion-icon name="caret-forward-circle-outline"></ion-icon>Maths ( 3rd Sem ) Class Notes</h3></Link>
           </div>

           <div className="LUdiv">
               <Link to="/view_all_free_courses"><h3><ion-icon name="caret-forward-circle-outline"></ion-icon>Free Courses</h3></Link>
           </div>

            <div className="LUdiv">
               <Link to="/analysis_3sem"><h3><ion-icon name="caret-forward-circle-outline"></ion-icon>Analysis & Design of algorithm ( 3rd Sem ) Class Notes</h3></Link>
            </div>         
      </div>

      <div class="custom-shape-divider-bottom-1697856721">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill" border="none"></path>
    </svg>
</div>
     </section>

        {/* <!-- ----------------------------- YEAR SECTION -------------------------  --> */}
        <div className=" ChangerDiv my-10" id="classNOtes" data-aos="slide-up"
      data-aos-duration="1000" data-aos-delay="50">

      <div className="movie-heading text-center" id="webseriessection" data-aos="fade-up
              "
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000" > <h1 className="movie-h1 webSeries-h1 movie-h1-transition  " data-aos="flip-right" data-aos-duration="1000" >
              Select the college year
            </h1></div> 

      <div class="tab " style={{marginTop:"5%"}}>
          <button className="tablinks" onClick={() => openCity("London")} >1st Year</button>
          <button className="tablinks" onClick={() => openCity("Paris")} id="defaultOpen">2nd Year</button>
         
        </div>
        
                {/* <!-- -------------- 1st YEAR DIV ------------  --> */}
                <div id="London" className="tabcontent" >
          <section className="text-gray-600 body-font">

          <div className='m-10'>
          <h1 className="text-3xl font-medium title-font text-blue-500 mb-12 text-center">&#10022; First Year &#10022;</h1>
            </div>
         
            <div className="container px-5 py-24 mx-auto">
                     
              <div className="flex flex-wrap -m-4" >

          {/* <!-- -----------------CLASS NOTES BOX ---------------- --> */}

                <div className="p-4 md:w-1/2 w-full Free_course_card" data-aos="slide-up"
                data-aos-duration="1000" data-aos-delay="200">
                  <Link to="/search1styearclassnotes"><div className="h-full bg-gray-100 p-8 rounded">
                  <img src={teaching} alt="teaching image"/>
                    {/* <!-- <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p> --> */}
                    <Link to="/search1styearclassnotes" className="inline-flex items-center">
                      <img alt="testimonial" src={myPhoto} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                      <div className="flex-grow flex flex-col pl-4">
                        <span className="title-font text-lg text-gray-900" style={{fontSize : "2em"}}>Class Notes</span>
                        <h2 className="text-black text-sm" style={{color:"black "}}>Piyush Agrawal</h2>

                      </div>
                    {/* <!-- <button className="float-right" style="display: flex; align-items: flex-end; padding-left: 180px;">Click Here</button> --> */}
                      
                    </Link>

                  </div>
                  </Link>
                </div>

          {/* <!-- -----------------ASSIGNMENT BOX ---------------- --> */}
          <div className="p-4 md:w-1/2 w-full Free_course_card" data-aos="slide-up"
                data-aos-duration="1000" data-aos-delay="200">
                  <Link to="/search1styearclassnotes"><div className="h-full bg-gray-100 p-8 rounded">
                  <img src={takingNotes} alt="taking notes image"/>
                    {/* <!-- <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p> --> */}
                    <Link to="/search1styearclassnotes" className="inline-flex items-center">
                      <img alt="testimonial" src={myPhoto} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                      <div className="flex-grow flex flex-col pl-4">
                        <span className="title-font text-lg text-gray-900" style={{fontSize : "2em"}}>Assignments</span>
                        <h2 className="text-black text-sm" style={{color:"black "}}>Piyush Agrawal</h2>

                      </div>
                    {/* <!-- <button className="float-right" style="display: flex; align-items: flex-end; padding-left: 180px;">Click Here</button> --> */}
                      
                    </Link>

                  </div>
                  </Link>
                </div>


 
              </div>
         

            </div>
          </section>


        </div>

        {/* <!-- -------------- 2ND YEAR DIV ------------  --> */}
        
        <div id="Paris" className="tabcontent">
          <section className="text-gray-600 body-font">
                  
                  <div className='m-10'>
                  <h1 className="text-3xl font-medium title-font text-blue-500 mb-12 text-center">&#10022; Second Year &#10022;</h1>
                  </div>

              <div className="container px-5 py-24 mx-auto">
             
                <div className="flex flex-wrap -m-4">

          {/* <!-- -----------------CLASS NOTES BOX ---------------- --> */}

          <div className="p-4 md:w-1/2 w-full Free_course_card" data-aos="slide-up"
                data-aos-duration="1000" data-aos-delay="200">
                  <Link to="/search2ndyearclassnotes"><div className="h-full bg-gray-100 p-8 rounded">
                  <img src={teaching} alt="teaching image"/>
                    {/* <!-- <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p> --> */}
                    <Link to="/search2ndyearclassnotes" className="inline-flex items-center">
                      <img alt="testimonial" src={myPhoto} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                      <div className="flex-grow flex flex-col pl-4">
                        <span className="title-font text-lg text-gray-900" style={{fontSize : "2em"}}>Class Notes</span>
                        <h2 className="text-black text-sm" style={{color:"black "}}>Piyush Agrawal</h2>

                      </div>
                    {/* <!-- <button className="float-right" style="display: flex; align-items: flex-end; padding-left: 180px;">Click Here</button> --> */}
                      
                    </Link>

                  </div>
                  </Link>
                </div>

          {/* <!-- -----------------ASSIGNMENT BOX ---------------- --> */}
          <div className="p-4 md:w-1/2 w-full Free_course_card" data-aos="slide-up"
                data-aos-duration="1000" data-aos-delay="200">
                  <Link to="/search2ndyearclassnotes"><div className="h-full bg-gray-100 p-8 rounded">
                  <img src={takingNotes} alt="taking notes image"/>
                    {/* <!-- <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p> --> */}
                    <Link to="/search2ndyearclassnotes" className="inline-flex items-center">
                      <img alt="testimonial" src={myPhoto} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                      <div className="flex-grow flex flex-col pl-4">
                        <span className="title-font text-lg text-gray-900" style={{fontSize : "2em"}}>Assignments</span>
                        <h2 className="text-black text-sm" style={{color:"black "}}>Piyush Agrawal</h2>

                      </div>
                    {/* <!-- <button className="float-right" style="display: flex; align-items: flex-end; padding-left: 180px;">Click Here</button> --> */}
                      
                    </Link>

                  </div>
                  </Link>
                </div>

                </div>
        
              </div>
            </section>
        </div>
        

       </div>

    {/* <!-- --------------------- FREE COURSES SECTION -------------------------  --> */}

      <section className="text-gray-600 body-font " style={{background:" #E4F0FB"}}  data-aos="zoom-in-down" data-aos-duration="1000" id="learn">

        <div className="container px-5 py-24 mx-auto" >
          <div className="flex flex-col text-center w-full mb-20">
        <div className="movie-heading text-center" id="webseriessection" data-aos="fade-up
        "
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000" > <h1 className="movie-h1 webSeries-h1 movie-h1-transition  " data-aos="flip-right" data-aos-duration="1000" >
        Free Courses
      </h1></div> 
         
        </div>

            {/* <!-- ----------- ANIMATED IMAGES --------------- --> */}
            <img className="AniImageSizeBig mainLogo" src={freeCourses} alt="" width={"50%"} style={{margin:"auto"}}data-aos="zoom-in-up"
            data-aos-duration="1000" data-aos-delay="800"/>
          </div>


        {/* <!-- ------------------------- COURCES CARDS --------------------------------> */}
              <CardSlider/>
        
      </section>

         {/* <!-- // HORIZONTAL ADS FILE BETWEEN IMAGES // --> */}

        <div>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7491870010187023"
                  crossOrigin="anonymous"></script>
            <ins className="adsbygoogle"
                  style={{display:"block" , textAlign:"center"}}
                  data-ad-layout="in-article"
                  data-ad-format="fluid"
                  data-ad-client="ca-pub-7491870010187023"
                  data-ad-slot="5127488657"></ins>
            <script>
                  (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
        </div>



    {/* <!-- ------------------- JEE / NEET NOTES SECTION ------------------------  --> */}

      <div className="ChangerDiv my-10 " id="classNOtes">

<div className="movie-heading text-center " id="webseriessection" > <h1 className="movie-h1 webSeries-h1 movie-h1-transition " >
        JEE / NEET NOTES
      </h1></div> 

      <div class="tab " style={{marginTop:"5%"}}>
          <button className="tablinks" onClick={() => notesjee("class11")} id="defaultOpenNotes">Class - 11 <sup>th</sup></button>
          <button className="tablinks" onClick={() => notesjee("class12")}>Class - 12 <sup>th</sup></button>
         
        </div>
        
          {/* <!-- -------------- CLASS 11 TH MATERIAL ------------  --> */}
          <div id="class11" className="tabcontent" >
          <section className="text-gray-600 body-font">
         
            <div className='m-10'>
            <h1 className="text-3xl font-medium title-font text-blue-500 mb-12 text-center">&#10022; Class 11 <sup>th</sup> &#10022;</h1>
            </div>
            <div className="container px-5 py-24 mx-auto">
              
         
              <div className="flex flex-wrap -m-4 " >

          {/* <!-- ----------------- CLASS 11th DETAILED NOTES BOX ---------------- --> */}

                <div className="p-4 md:w-1/3 w-full Free_course_card" data-aos="fade-in"
                data-aos-duration="1000" data-aos-delay="50">
                  <Link to="/all_11_notes"><div className="h-full bg-gray-100 p-8 rounded">
                  <img src={teaching} alt="teaching image"/>
                  
                    <Link to="/all_11_notes" className="inline-flex items-center">
                      <img alt="testimonial" src={myPhoto} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                      <div className="flex-grow flex flex-col pl-4">
                        <span className="title-font text-lg text-gray-900" style={{fontSize:"2em"}}>Full Notes</span>
                        <h2 className="text-black text-sm" style={{color:"black "}}>Piyush Agrawal</h2>

                      </div>
                    {/* <!-- <button className="float-right" style="display: flex; align-items: flex-end; padding-left: 180px;">Click Here</button> --> */}
                      
                    </Link>

                  </div>
                  </Link>
                </div>

          {/* <!-- ----------------- CLASS 11th SHORT NOTES BOX ---------------- --> */}
          <div className="p-4 md:w-1/3 w-full Free_course_card" data-aos="fade-in"
                data-aos-duration="1000" data-aos-delay="300">
                  <Link to="/search_11_short_notes"><div className="h-full bg-gray-100 p-8 rounded">
                  <img src={takingNotes} alt="taking notes image"/>
                    {/* <!-- <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p> --> */}
                    <Link to="/search_11_short_notes" className="inline-flex items-center">
                      <img alt="testimonial" src={myPhoto} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                      <div className="flex-grow flex flex-col pl-4">
                        <span className="title-font text-lg text-gray-900" style={{fontSize : "2em"}}>Short Notes</span>
                        <h2 className="text-black text-sm" style={{color:"black "}}>Piyush Agrawal</h2>

                      </div>
                    {/* <!-- <button className="float-right" style="display: flex; align-items: flex-end; padding-left: 180px;">Click Here</button> --> */}
                      
                    </Link>

                  </div>
                  </Link>
                </div>


          {/* <!-- ----------------- CLASS 11th MIND MAPS BOX ---------------- --> */}
          <div className="p-4 md:w-1/3 w-full Free_course_card" data-aos="fade-in"
                data-aos-duration="1000" data-aos-delay="500"  >
                  <Link to="/search_11_mind_maps"><div className="h-full bg-gray-100 p-8 rounded">
                  <img src={mindMaps} alt="taking notes image"/>
                   
                    <Link to="/search_11_mind_maps" className="inline-flex items-center">
                      <img alt="testimonial" src={myPhoto} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                      <div className="flex-grow flex flex-col pl-4">
                        <span className="title-font text-lg text-gray-900" style={{fontSize : "2em"}}>Mind Maps</span>
                        <h2 className="text-black text-sm" style={{color:"black "}}>Piyush Agrawal</h2>

                      </div>
                    {/* <!-- <button className="float-right" style="display: flex; align-items: flex-end; padding-left: 180px;">Click Here</button> --> */}
                      
                    </Link>

                  </div>
                  </Link>
                </div>
 
              </div>
         

            </div>
          </section>


        </div>

        {/* <!-- -------------- CLASS 12 TH MATERIAL ------------  --> */}
        
        <div id="class12" className="tabcontent">
          <section className="text-gray-600 body-font">
                  
              <div className="m-10">            
                  <h1 className="text-3xl font-medium title-font text-blue-500 mb-12 text-center">&#10022; Class 12 <sup>th</sup> &#10022;</h1>
              </div>

              <div className="container px-5 py-24 mx-auto">
          
                <div className="flex flex-wrap -m-4">

          {/* <!-- ----------------- CLASS 12th DETAILED NOTES BOX ---------------- --> */}

          <div className="p-4 md:w-1/3 w-full Free_course_card" data-aos="slide-up"
                data-aos-duration="1000" data-aos-delay="200">
                  <Link to="/all_12_notes"><div className="h-full bg-gray-100 p-8 rounded">
                  <img src={teaching} alt="teaching image"/>

                    <Link to="/all_12_notes" className="inline-flex items-center">
                      <img alt="testimonial" src={myPhoto} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                      <div className="flex-grow flex flex-col pl-4">
                        <span className="title-font text-lg text-gray-900" style={{fontSize : "2em"}}>Full Notes</span>
                        <h2 className="text-black text-sm" style={{color:"black "}}>Piyush Agrawal</h2>

                      </div>
                    {/* <!-- <button className="float-right" style="display: flex; align-items: flex-end; padding-left: 180px;">Click Here</button> --> */}
                      
                    </Link>

                  </div>
                  </Link>
                </div>

          {/* <!-- ----------------- CLASS 12th SHORT NOTES BOX ---------------- --> */}

          <div className="p-4 md:w-1/3 w-full Free_course_card" data-aos="slide-up"
                data-aos-duration="1000" data-aos-delay="200">
                  <Link to="/search_12_short_notes"><div className="h-full bg-gray-100 p-8 rounded">
                  <img src={takingNotes} alt="taking notes image"/>
                    {/* <!-- <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p> --> */}
                    <Link to="/search_12_short_notes" className="inline-flex items-center">
                      <img alt="testimonial" src={myPhoto} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                      <div className="flex-grow flex flex-col pl-4">
                        <span className="title-font text-lg text-gray-900" style={{fontSize : "2em"}}>Short Notes</span>
                        <h2 className="text-black text-sm" style={{color:"black "}}>Piyush Agrawal</h2>

                      </div>
                    {/* <!-- <button className="float-right" style="display: flex; align-items: flex-end; padding-left: 180px;">Click Here</button> --> */}
                      
                    </Link>

                  </div>
                  </Link>
                </div>

          {/* <!-- ----------------- CLASS 12th MIND MAPS BOX ---------------- --> */}
          <div className="p-4 md:w-1/3 w-full Free_course_card" data-aos="fade-in"
                data-aos-duration="1000" data-aos-delay="500"  >
                  <Link to="/search_12_mind_maps"><div className="h-full bg-gray-100 p-8 rounded">
                  <img src={mindMaps} alt="taking notes image"/>
                   
                    <Link to="/search_12_mind_maps" className="inline-flex items-center">
                      <img alt="testimonial" src={myPhoto} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                      <div className="flex-grow flex flex-col pl-4">
                        <span className="title-font text-lg text-gray-900" style={{fontSize : "2em"}}>Mind Maps</span>
                        <h2 className="text-black text-sm" style={{color:"black "}}>Piyush Agrawal</h2>

                      </div>
                    {/* <!-- <button className="float-right" style="display: flex; align-items: flex-end; padding-left: 180px;">Click Here</button> --> */}
                      
                    </Link>

                  </div>
                  </Link>
                </div>


                </div>
        
              </div>
            </section>
        </div>
      
       </div>


   </>
  )
}

export default Home

