import React from 'react'

// ------------ IMPORTING CLASS NOTES -------- 
import CnofMathsUnit1pg01 from './Class Notes/Maths/Unit 1/Piyush/Maths-CN-Unit1_page-0001.jpg'
import CnofMathsUnit1pg02 from './Class Notes/Maths/Unit 1/Piyush/Maths-CN-Unit1_page-0002.jpg'
import CnofMathsUnit1pg03 from './Class Notes/Maths/Unit 1/Piyush/Maths-CN-Unit1_page-0003.jpg'
import CnofMathsUnit1pg04 from './Class Notes/Maths/Unit 1/Piyush/Maths-CN-Unit1_page-0004.jpg'
import CnofMathsUnit1pg05 from './Class Notes/Maths/Unit 1/Piyush/Maths-CN-Unit1_page-0005.jpg'
import CnofMathsUnit1pg06 from './Class Notes/Maths/Unit 1/Piyush/Maths-CN-Unit1_page-0006.jpg'
import CnofMathsUnit1pg07 from './Class Notes/Maths/Unit 1/Piyush/Maths-CN-Unit1_page-0007.jpg'
import CnofMathsUnit1pg08 from './Class Notes/Maths/Unit 1/Piyush/Maths-CN-Unit1_page-0008.jpg'
import CnofMathsUnit1pg09 from './Class Notes/Maths/Unit 1/Piyush/Maths-CN-Unit1_page-0009.jpg'

const Maths3sem = () => {


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

                <h2 className="movie-h1 webSeries-h1 movie-h1-transition  "  style={{fontSize:"xx-large " ,marginTop:"6% " }}>Principal of Mathematical Induction</h2>
            </div> 
                <div>
                    <h2 className="Btna" style={{marginTop:"10%"}}> "Unit 3 is currently happening in the college."<span >&nbsp;     &nbsp;  </span>   </h2> 
                    {/* <!-- <h2 className="Btna" style="margin-top: 0%;">Jao usse padao</h2> --> */}
                </div>
                


                {/* <!-- ----------- NOTES IMAGES ------------  --> */}
                <section className="notes-Images-Section">

                    {/* <!-- HAND WRITTEN NOTES OF MINE  --> */}

                    <div className="Handwritten">

                    {/* <img src={CnofMathsUnit1pg01} alt=""/> */}

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

                    {/* <img src={CnofMathsUnit1pg02} alt=""/> */}

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

                    {/* <img src={CnofMathsUnit1pg03} alt=""/> */}

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

                    {/* <img src={CnofMathsUnit1pg04} alt=""/> */}

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
                    {/* <img src={CnofMathsUnit1pg05} alt=""/> */}

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

                    {/* <img src={CnofMathsUnit1pg06} alt=""/> */}

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

                    {/* <img src={CnofMathsUnit1pg07} alt=""/> */}

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

                    {/* <img src={CnofMathsUnit1pg08} alt=""/> */}

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

                    {/* <img src={CnofMathsUnit1pg09} alt=""/> */}

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

                    {/* <!-- ---- 9 IMAGES TILL DATE - 23 / 08 / 2023 ------  --> */}





            
        
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

                <h2 className="movie-h1 webSeries-h1 movie-h1-transition  "  style={{fontSize:"xx-large " ,marginTop:"6% " }}>Logics and Proofs</h2>
            </div> 
                <div>
                    <h2 className="Btna" style={{marginTop:"10%"}}> "Unit 3 is currently happening in the college."<span >&nbsp;       &nbsp;  </span>   </h2>
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

                        <h2 className="movie-h1 webSeries-h1 movie-h1-transition  "  style={{fontSize:"xx-large " ,marginTop:"6% " }}>Algebraic Structure and Morphism</h2>
                    </div> 
                    <div>
        
                    <h2 class="Btna" style={{marginTop:"10%"}}>CREDIT - <span >&nbsp;  Piyush Agrawal <span style={{backgroundColor:"rgb(50, 193, 203)"}}>and</span> Utkarsh Dikshit&nbsp;  </span>   </h2>

                    {/* <!-- <h2 className="Btna" style="margin-top: 0%;">Jao usse padao</h2> --> */}
                </div>

                {/* <!-- ----------- NOTES IMAGES ------------  --> */}

                <section className="notes-Images-Section">

                    {/* <!-- HAND WRITTEN NOTES OF MINE  --> */}

                    <div className="Handwritten">

                    <img src={CnofMathsUnit1pg01} alt=""/>

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

                    <img src={CnofMathsUnit1pg02} alt=""/>

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

                    <img src={CnofMathsUnit1pg03} alt=""/>

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

                    <img src={CnofMathsUnit1pg04} alt=""/>

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
                    <img src={CnofMathsUnit1pg05} alt=""/>

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

                    <img src={CnofMathsUnit1pg06} alt=""/>

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

                    <img src={CnofMathsUnit1pg07} alt=""/>

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

                    <img src={CnofMathsUnit1pg08} alt=""/>

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

                    <img src={CnofMathsUnit1pg09} alt=""/>

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

                    {/* <!-- ---- 9 IMAGES TILL DATE - 23 / 08 / 2023 ------  --> */}





            
        
                {/* <!-- ----- CONTENT DIV KE ANDAR HI HONA CHAHIYE --------  --> */}
        

                    </div>

                </section>

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

                    <h2 className="movie-h1 webSeries-h1 movie-h1-transition  "  style={{fontSize:"xx-large " ,marginTop:"6% " }}>Substructures</h2>
                    </div> 
                    <div>
                    <h2 className="Btna" style={{marginTop:"10%"}}> "Unit 3 is currently happening in the college."<span >&nbsp;     &nbsp;  </span>   </h2>
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

                    <h2 className="movie-h1 webSeries-h1 movie-h1-transition  "  style={{fontSize:"xx-large " ,marginTop:"6% " }}>Graph Colouring</h2>
                </div> 
                <div>
                <h2 className="Btna" style={{marginTop:"10%"}}> "Unit 3 is currently happening in the college."<span >&nbsp;     &nbsp;  </span>   </h2>
                {/* <!-- <h2 className="Btna" style="margin-top: 0%;">Jao usse padao</h2> --> */}
            </div>
        </section>
                    
        </div>

            </section>
    </>
  )
}

export default Maths3sem