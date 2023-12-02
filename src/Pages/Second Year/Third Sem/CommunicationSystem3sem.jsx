import React from 'react'

// ------------ IMPORTING HANDWRITTEN NOTES OF PW -------- 
import CnofCommSystemPWpg01 from './Class Notes/Communication System/Hand-Written PW/communication-system-notes_page-0001.jpg'
import CnofCommSystemPWpg02 from './Class Notes/Communication System/Hand-Written PW/communication-system-notes_page-0002.jpg'
import CnofCommSystemPWpg03 from './Class Notes/Communication System/Hand-Written PW/communication-system-notes_page-0003.jpg'
import CnofCommSystemPWpg04 from './Class Notes/Communication System/Hand-Written PW/communication-system-notes_page-0004.jpg'
import CnofCommSystemPWpg05 from './Class Notes/Communication System/Hand-Written PW/communication-system-notes_page-0005.jpg'
import CnofCommSystemPWpg06 from './Class Notes/Communication System/Hand-Written PW/communication-system-notes_page-0006.jpg'
import CnofCommSystemPWpg07 from './Class Notes/Communication System/Hand-Written PW/communication-system-notes_page-0007.jpg'
import CnofCommSystemPWpg08 from './Class Notes/Communication System/Hand-Written PW/communication-system-notes_page-0008.jpg'


// ------------ IMPORTING PPT OF EDUNITI (13 pages) -------- 

import pptofCommSystemEdupg01 from './Class Notes/Communication System/PPT Notes/communication-system-notes_pages-to-jpg-0005.jpg'
import pptofCommSystemEdupg02 from './Class Notes/Communication System/PPT Notes/communication-system-notes_pages-to-jpg-0006.jpg'
import pptofCommSystemEdupg03 from './Class Notes/Communication System/PPT Notes/communication-system-notes_pages-to-jpg-0007.jpg'
import pptofCommSystemEdupg04 from './Class Notes/Communication System/PPT Notes/communication-system-notes_pages-to-jpg-0008.jpg'
import pptofCommSystemEdupg05 from './Class Notes/Communication System/PPT Notes/communication-system-notes_pages-to-jpg-0009.jpg'
import pptofCommSystemEdupg06 from './Class Notes/Communication System/PPT Notes/communication-system-notes_pages-to-jpg-0010.jpg'
import pptofCommSystemEdupg07 from './Class Notes/Communication System/PPT Notes/communication-system-notes_pages-to-jpg-0011.jpg'
import pptofCommSystemEdupg08 from './Class Notes/Communication System/PPT Notes/communication-system-notes_pages-to-jpg-0012.jpg'
import pptofCommSystemEdupg09 from './Class Notes/Communication System/PPT Notes/communication-system-notes_pages-to-jpg-0013.jpg'
import pptofCommSystemEdupg10 from './Class Notes/Communication System/PPT Notes/communication-system-notes_pages-to-jpg-0014.jpg'
import pptofCommSystemEdupg11 from './Class Notes/Communication System/PPT Notes/communication-system-notes_pages-to-jpg-0015.jpg'
import pptofCommSystemEdupg12 from './Class Notes/Communication System/PPT Notes/communication-system-notes_pages-to-jpg-0016.jpg'
import pptofCommSystemEdupg13 from './Class Notes/Communication System/PPT Notes/communication-system-notes_pages-to-jpg-0017.jpg'

const CommunicationSystem3sem = () => {


// --------- Tabs Script Function  ------------ 
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
  }

  return (
    <>

    
      {/* <!-- ----------------------------- TABS SECTION ------------------------------------  --> */}

    <section className="unitTabs">
    {/* <!-- ----------- UNITS BUTTON ---------  --> */}
    <div className="tab">
        <button className="tablinks" onClick={() => openCity("unit1")} id="defaultOpen">Unit 1</button>
        <button className="tablinks" onClick={() => openCity("unit2")}>Unit 2</button>
        <button className="tablinks" onClick={() => openCity("unit3")}>Unit 3</button>
        <button className="tablinks" onClick={() => openCity("unit4")}>Unit 4</button>
        <button className="tablinks" onClick={() => openCity("unit5")}>Unit 5</button>
        
        </div>
        
        {/* <!-- -----------------------------------  -->
        <!-- --------- UNITS CONTENT -----------  -->
        <!-- -----------------------------------  --> */}

        {/* <!-- ---- UNIT 1 CONTENT ------  --> */}
        <div id="unit1" className="tabcontent">

            <section className="unit1Content">
                
                <div className="movie-heading  " id="webseriessection" data-aos="fade-up
                "
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" >
                <h1 className="movie-h1 webSeries-h1 movie-h1-transition  " data-aos="flip-right" data-aos-duration="1000" >
                    Unit - 1
            
                </h1>

                <h2 className="movie-h1 webSeries-h1 movie-h1-transition  "  style={{fontSize:"xx-large " ,marginTop:"6% " }}>Signal Analysis</h2>
            </div> 
                <div>
                    <h2 className="Btna" style={{marginTop:"10%"}}>Learn Basic First<span >&nbsp;     &nbsp;  </span>   </h2> 

                    <h2 class="Btna" style={{marginTop:"10%"}}>CREDIT - <span >&nbsp;  Piyush Agrawal <span style={{backgroundColor:"rgb(50, 193, 203)"}}> (I.T) </span>  &nbsp;   </span>   </h2>
                    {/* <!-- <h2 className="Btna" style="margin-top: 0%;">Jao usse padao</h2> --> */}
                </div>
                

                {/* ----------------------------------------------- */}
                {/* <!-- ----------- NOTES IMAGES ------------  --> */}
                {/* ----------------------------------------------- */}

                <section className="notes-Images-Section">

                    {/* <!-- HAND WRITTEN NOTES OF MINE  --> */}

                    <div className="Handwritten">

                    <img src={CnofCommSystemPWpg01} alt=""/>

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

                    <img src={CnofCommSystemPWpg02} alt=""/>

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

                    <img src={CnofCommSystemPWpg03} alt=""/>

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

                    <img src={CnofCommSystemPWpg04} alt=""/>

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

                    <img src={CnofCommSystemPWpg05} alt=""/>

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

                    <img src={CnofCommSystemPWpg06} alt=""/>

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

                <img src={CnofCommSystemPWpg07} alt=""/>

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

                <img src={CnofCommSystemPWpg08} alt=""/>

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

                {/* ---------------------------------------------------------  */}
                {/* <!-- ---- PW CLASS NOTES OF COMMUNCATION SYSTEM------  --> */}
                {/* ---------------------------------------------------------  */}





            
        
                {/* <!-- ----- CONTENT DIV KE ANDAR HI HONA CHAHIYE --------  --> */}
        

                    </div>

                    {/* <!-- PPT OF EDUNITI (BASIC)  --> */}
                    <div className="ppt">

                    <img src={pptofCommSystemEdupg01} alt=""/>

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

                    <img src={pptofCommSystemEdupg02} alt=""/>

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

                    <img src={pptofCommSystemEdupg03} alt=""/>

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

                    <img src={pptofCommSystemEdupg04} alt=""/>

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

                    <img src={pptofCommSystemEdupg05} alt=""/>

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

                    <img src={pptofCommSystemEdupg06} alt=""/>

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

                    <img src={pptofCommSystemEdupg07} alt=""/>

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

                    <img src={pptofCommSystemEdupg08} alt=""/>

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

                    <img src={pptofCommSystemEdupg09} alt=""/>

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

                    <img src={pptofCommSystemEdupg10} alt=""/>

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

                    <img src={pptofCommSystemEdupg11} alt=""/>

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

                    <img src={pptofCommSystemEdupg12} alt=""/>

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

                    <img src={pptofCommSystemEdupg13} alt=""/>

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

                    {/* <!-- ---- PPT OF EDUNITI ON COMMUNICATION SYSTEM ------  --> */}


        
                {/* <!-- ----- CONTENT DIV KE ANDAR HI HONA CHAHIYE --------  --> */}
        

                    </div>

                </section>
            </section>

    </div>

        {/* <!-- ---- UNIT 2 CONTENT ------  --> */}

        <div id="unit2" className="tabcontent">

        <section className="unit1Content">
            
                <div className="movie-heading  " id="webseriessection" data-aos="fade-up
                "
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" >
                <h1 className="movie-h1 webSeries-h1 movie-h1-transition  " data-aos="flip-right" data-aos-duration="1000" >
                    Unit - 2
            
                </h1>

                <h2 className="movie-h1 webSeries-h1 movie-h1-transition  "  style={{fontSize:"xx-large " ,marginTop:"6% " }}>Linear Modulation</h2>
            </div> 
                <div>
                    <h2 className="Btna" style={{marginTop:"10%"}}>Coming Soon... <span >&nbsp;       &nbsp;  </span>   </h2>
                    {/* <!-- <h2 className="Btna" style="margin-top: 0%;">Jao usse padao</h2> --> */}
                </div>


        </section>


                {/* <!-- ----------- NOTES IMAGES ------------  --> */}

    
    </div>

        {/* <!-- ---- UNIT 3 CONTENT ------  --> */}

            <div id="unit3" className="tabcontent">

                <section className="unit1Content">
                    
                        <div className="movie-heading  " id="webseriessection" data-aos="fade-up
                        "
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000" >
                        <h1 className="movie-h1 webSeries-h1 movie-h1-transition  " data-aos="flip-right" data-aos-duration="1000" >
                            Unit - 3
                    
                        </h1>

                        <h2 className="movie-h1 webSeries-h1 movie-h1-transition  "  style={{fontSize:"xx-large " ,marginTop:"6% " }}>Angle Modulation</h2>
                    </div> 
                    <div>
                    <h2 className="Btna" style={{marginTop:"10%"}}>Coming Soon...<span >&nbsp;     &nbsp;  </span>   </h2>
                    {/* <!-- <h2 className="Btna" style="margin-top: 0%;">Jao usse padao</h2> --> */}
                </div>


                </section>

            </div>


            

            
    

        {/* <!-- ---- UNIT 4 CONTENT ------  --> */}

            <div id="unit4" className="tabcontent">

                    <section className="unit1Content">

                    <div className="movie-heading  " id="webseriessection" data-aos="fade-up
                    "
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000" >
                    <h1 className="movie-h1 webSeries-h1 movie-h1-transition  " data-aos="flip-right" data-aos-duration="1000" >
                        Unit - 4

                    </h1>

                    <h2 className="movie-h1 webSeries-h1 movie-h1-transition  "  style={{fontSize:"xx-large " ,marginTop:"6% " }}>Radio transmitter and receiver</h2>
                    </div> 
                    <div>
                    <h2 className="Btna" style={{marginTop:"10%"}}>Coming Soon...<span >&nbsp;     &nbsp;  </span>   </h2>
                    {/* <!-- <h2 className="Btna" style="margin-top: 0%;">Jao usse padao</h2> --> */}
                    </div>

                    </section>

            </div>




            
    
        {/* <!-- ---- UNIT 5 CONTENT ------  --> */}

        <div id="unit5" className="tabcontent">

            <section className="unit1Content">
                
                    <div className="movie-heading  " id="webseriessection" data-aos="fade-up
                    "
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000" >
                    <h1 className="movie-h1 webSeries-h1 movie-h1-transition  " data-aos="flip-right" data-aos-duration="1000" >
                        Unit - 5
                
                    </h1>

                    <h2 className="movie-h1 webSeries-h1 movie-h1-transition  "  style={{fontSize:"xx-large " ,marginTop:"6% " }}>Information Theory</h2>
                </div> 
                <div>
                <h2 className="Btna" style={{marginTop:"10%"}}>Coming Soon...<span >&nbsp;     &nbsp;  </span>   </h2>
                {/* <!-- <h2 className="Btna" style="margin-top: 0%;">Jao usse padao</h2> --> */}
            </div>
        </section>
                    
        </div>

            </section>
    </>
  )
}

export default CommunicationSystem3sem