import React from 'react'

// ------------ IMPORTING CLASS NOTES -------- 


const Search12MM = () => {


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
        <button className="tablinks" onClick={() => openCity("unit1")}>Physics</button>
        <button className="tablinks" onClick={() => openCity("unit2")}>Chemistry</button>
        <button className="tablinks" onClick={() => openCity("unit3")}>Maths</button>

        </div>
        
        {/* <!-- -----------------------------------  -->
        <!-- --------- SUJECT'S CONTENT -----------  -->
        <!-- -----------------------------------  --> */}

        {/* <!-- ---- PHYSICS Mind Maps CONTENT ------  --> */}
        <div id="unit1" className="tabcontent">

            <section className="unit1Content">
                
                <div className="movie-heading  " id="webseriessection" data-aos="fade-up
                "
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" >
                <h1 className="movie-h1 webSeries-h1 movie-h1-transition  " data-aos="flip-right" data-aos-duration="1000" >
                    Physics
            
                </h1>

                <h2 className="movie-h1 webSeries-h1 movie-h1-transition" style={{fontSize:"xx-large " ,marginTop:"6% " }}>Mind Maps</h2>
            </div> 
                <div>
                <h2 class="Btna" style={{marginTop:"10%"}}>CREDIT - <span >&nbsp;  Piyush Agrawal <span style={{backgroundColor:"rgb(50, 193, 203)"}}> (JEE Mentor) </span>  &nbsp;   </span>   </h2>
                    
                </div>
                


            {/* <!-- -----------MIND MAPS PHYSICS PDF  ------------  --> */}

           <section>
                <div className='mmpdfdiv'>
                     <iframe src="https://drive.google.com/file/d/1xUhUk1EGDd8ZEIwT10SyMuu_wFhSN3oR/preview#toolbar=0" width="100%" height="600px" ></iframe>
                </div>

           </section>
      
        
 
            </section>

    </div>

        {/* <!-- ---- CHEMISTRY Mind Maps CONTENT ------  --> */}
        <div id="unit2" className="tabcontent">

            <section className="unit1Content">
                
                <div className="movie-heading  " id="webseriessection" data-aos="fade-up
                "
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" >
                <h1 className="movie-h1 webSeries-h1 movie-h1-transition  " data-aos="flip-right" data-aos-duration="1000" >
                    Chemistry
            
                </h1>

                <h2 className="movie-h1 webSeries-h1 movie-h1-transition  "  style={{fontSize:"xx-large " ,marginTop:"6% " }}>Mind Maps</h2>
            </div> 
                <div>
                <h2 class="Btna" style={{marginTop:"10%"}}>CREDIT - <span >&nbsp;  Piyush Agrawal <span style={{backgroundColor:"rgb(50, 193, 203)"}}> (JEE Mentor) </span>  &nbsp;   </span>   </h2>
                 
                </div>
                


            {/* <!-- -----------MIND MAPS CHEMISTRY PDF  ------------  --> */}

           <section>
                <div className='mmpdfdiv'>
                     <iframe src="https://drive.google.com/file/d/1I8Ln0gDqVnB06JssTYXiNy6oQIbvhWpg/preview" width="100%" height="600px" ></iframe>
                </div>
           </section>
      
            </section>

    </div>

        {/* <!-- ---- MATHS Mind Maps CONTENT ------  --> */}
        <div id="unit3" className="tabcontent">

            <section className="unit1Content">
                
                <div className="movie-heading  " id="webseriessection" data-aos="fade-up
                "
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" >
                <h1 className="movie-h1 webSeries-h1 movie-h1-transition  " data-aos="flip-right" data-aos-duration="1000" >
                    Maths
            
                </h1>

                <h2 className="movie-h1 webSeries-h1 movie-h1-transition  "  style={{fontSize:"xx-large " ,marginTop:"6% " }}>Mind Maps</h2>
            </div> 
                <div>
                <h2 class="Btna" style={{marginTop:"10%"}}>CREDIT - <span >&nbsp;  Piyush Agrawal <span style={{backgroundColor:"rgb(50, 193, 203)"}}> (JEE Mentor) </span>  &nbsp;   </span>   </h2>
                    {/* <!-- <h2 className="Btna" style={{marginTop:"10%"}}>Coming Soon..<span >&nbsp;     &nbsp;  </span>   </h2> --> */}
                    {/* <!-- <h2 className="Btna" style="margin-top: 0%;">Jao usse padao</h2> --> */}
                </div>
                


            {/* <!-- -----------MIND MAPS MATHS PDF  ------------  --> */}
         
            <section>
                <div className='mmpdfdiv'>
                     <iframe src="https://drive.google.com/file/d/1L-0zgRD_2wWqiR3DGNTBmjfSww3IbXtA/preview" width="100%" height="600px" ></iframe>
                </div>
           </section>

            </section>

    </div>



            </section>
    </>
  )
}

export default Search12MM