import  { BrowserRouter , Routes, Route } from 'react-router-dom'


import AOS from 'aos';
import 'aos/dist/aos.css';
// -- ANIMATION --- 
import {useEffect} from "react";
AOS.init();
 // You can also use <link> for styles
// ..

import React from "react"

// ---------- IMPORTING CSS ----------- 
import './App.css'
import './css/buttonhover.css'
import './css/navbar.css'
import './css/navqueries.css'
import './css/footer.css'
import './css/contact.css'
import './css/jeenotes.css'

// ---------- IMPORTING COMPONENTS ----------- 

import Navbar from './Components/Navbar'
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ToptoBottom";

// ---------- IMPORTING PAGES ----------- 

// ------------ IMPORTING MAIN PAGES ------------------ 
import Home from "./Pages/Main/Home";
import About from './Pages/Main/About'
import Contact from './Pages/Main/Contact'

// ------------ IMPORTING SEARCH PAGES ------------------ 

import Searchdoc from "./Pages/Search/Searchdoc";
import SearchAllCN1stYear from "./Pages/Search/SearchAllCN1stYear";
import SearchAllCN2ndYear from "./Pages/Search/SearchAllCN2ndYear";

// ------------ IMPORTING 2ND YEAR NOTES PAGES ------------------ 

import Timetable3sem from "./Pages/Second Year/Third Sem/Timetable3sem";
import Syllabus3sem from "./Pages/Second Year/Third Sem/Syllabus3sem";
import Analysis3sem from "./Pages/Second Year/Third Sem/Analysis3sem";
import CommunicationSystem3sem from "./Pages/Second Year/Third Sem/CommunicationSystem3sem";
import CompSystemOrg3sem from "./Pages/Second Year/Third Sem/CompSystemOrg3sem";
import Maths3sem from "./Pages/Second Year/Third Sem/Maths3sem";
import Oops_3sem from "./Pages/Second Year/Third Sem/Oops_3sem";

// ------------ IMPORTING MAIN PAGES ------------------ 
import View_All_Free_courses from './Pages/Others/View_All_Free_courses';

// ------------ IMPORTING CLASS 11 PAGES ------------------ 

import Search11FN from './Pages/Search/Class 11/Search11FN';
import Search11SN from './Pages/Search/Class 11/Search11SN';
import Search11MM from './Pages/Search/Class 11/Search11MM';
import All11Notes from './Pages/Search/Class 11/All11Notes';

// ------------ IMPORTING CLASS 12 PAGES ------------------ 

import All12Notes from './Pages/Search/Class 12/All12Notes';
import Search12SN from './Pages/Search/Class 12/Search12FN';
import Search12MM from './Pages/Search/Class 12/Search12MM';
import Search12FN from './Pages/Search/Class 12/Search12FN';
import Signin from './Pages/SignupSystem/Signin';
import Signin_Analysis from './Pages/SignupSystem/Pages3sem/Signin_Analysis';
import Signin_CSO from './Pages/SignupSystem/Pages3sem/Signin_CSO';
import Signin_Oops from './Pages/SignupSystem/Pages3sem/Signin_Oops';
// import Signin from './Pages/SignupSystem/Signin';



// ---------- LOG AND SIGN UP SYSTEM BY NETLIFY ---------- 


// import netlifyIdentity from '../Netlifylogin'


function App() {

     // ANIMATION FUNCTION 
     useEffect(() => {
          AOS.init();
        }, [])
        
  return (

     
   <>
   <BrowserRouter>
   
               <Navbar/> 


               {/* ---- TOP TO BOTTOM BTN ------  */}

              <ScrollToTop/> 

                <Routes>
                    
            
                    <Route exact path="/" element={ <Home/> } />

                  {/* ---------- SIGN IN PAGES ROUTES ---------  */}                    
                    <Route path="/signin" element={ <Signin/>} />
                                  
                    <Route path="/signin_ada" element={ <Signin_Analysis/>} />

                    <Route path="/signin_cso" element={ <Signin_CSO/>} />

                    <Route path="/signin_oops" element={ <Signin_Oops/>} />

                    {/* ---------- MAIN PAGES ROUTES ---------  */}

                    <Route exact path="/home" element={ <Home/> } />
                   
                    <Route path="/about" element={ <About/> } />
               
                    <Route path="/contact" element={ <Contact/> } />


                    {/* ---------- SEARCH ROUTES ---------  */}

                    <Route path="/search" element={ <Searchdoc/> } />

                    <Route path="/search1styearclassnotes" element={ <SearchAllCN1stYear/> } />

                    <Route path="/search2ndyearclassnotes" element={ <SearchAllCN2ndYear/> } />
             

                      {/* ---------- SECOND YEAR ROUTES ---------  */}

                    <Route path="/timetable3sem" element={ <Timetable3sem/> } />

                    <Route path="/syllabus3sem" element={ <Syllabus3sem/> } />
                 
                    <Route path="/analysis_3sem" element={  <Analysis3sem/> } />
                     

                    <Route path="/computer_system_organization_3sem" element={<CompSystemOrg3sem/>} />
                         
                    

                    <Route path="/maths_3sem" element={ <Maths3sem/>} />
     

                    <Route path="/communication_system_3sem" element={   <CommunicationSystem3sem/> } />
                       
                    
                    <Route path="/oops_3sem" element={ <Oops_3sem/> } />
                         

                      {/* ---------- OTHERS ROUTES ---------  */}

                      <Route path="/view_all_free_courses" element={ <View_All_Free_courses/> } />
             
             {/* --------------- JEE / NEET NOTES ROUTES --------------  */}

                      {/* ---------- CLASS 11TH SEARCH ROUTES ---------  */}

                    <Route path="/all_11_notes" element={ <All11Notes/> } />

                    <Route path="/search_11_full_notes" element={ <Search11FN/> } />

                    <Route path="/search_11_short_notes" element={ <Search11SN/> } />

                    <Route path="/search_11_mind_maps" element={ <Search11MM/> } />


                      {/* ---------- CLASS 12TH SEARCH ROUTES ---------  */}

                      <Route path="/all_12_notes" element={ <All12Notes/> } />

                    <Route path="/search_12_full_notes" element={ <Search12FN/> } />

                    <Route path="/search_12_short_notes" element={ <Search12SN/> } />

                    <Route path="/search_12_mind_maps" element={ <Search12MM/> } />

              </Routes>

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

           {/* <Route path="/" element={ <Footer/>} /> */}
 {/* <button onClick={this.handleLogIn} >Log in with netlify</button> */}
           
          <Footer/>
         
               {/* <Routes>
                    <Route exact path="/" element={ <Home/> }/>
                    <Route path="/home" element={<About/>} />

               </Routes> */}
</BrowserRouter>
          
   </>
  )
}
export default App;
