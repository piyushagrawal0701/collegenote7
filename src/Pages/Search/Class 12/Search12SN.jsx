import React from 'react'

// ------------ IMPORTING CLASS NOTES -------- 


const Search12SN = () => {


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
        <button className="tablinks" onClick={() => openCity("unit1")} id="defaultOpen">Physics</button>
        <button className="tablinks" onClick={() => openCity("unit2")}>Chemistry</button>
        <button className="tablinks" onClick={() => openCity("unit3")}>Maths</button>

        </div>
        
        {/* <!-- -----------------------------------  -->
        <!-- --------- SUJECT'S CONTENT -----------  -->
        <!-- -----------------------------------  --> */}

        {/* <!-- ---- PHYSICS Full Notes CONTENT ------  --> */}
        <div id="unit1" className="tabcontent">

            <section className="unit1Content">
                
                <div className="movie-heading  " id="webseriessection" data-aos="fade-up
                "
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" >
                <h1 className="movie-h1 webSeries-h1 movie-h1-transition  " data-aos="flip-right" data-aos-duration="1000" >
                    Physics
            
                </h1>

                <h2 className="movie-h1 webSeries-h1 movie-h1-transition  "  style={{fontSize:"xx-large " ,marginTop:"6% " }}>Full Notes</h2>
            </div> 
                <div>
                <h2 class="Btna" style={{marginTop:"10%"}}>CREDIT - <span >&nbsp;  Piyush Agrawal <span style={{backgroundColor:"rgb(50, 193, 203)"}}> (JEE Mentor) </span>  &nbsp;   </span>   </h2>
                    {/* <!-- <h2 className="Btna" style={{marginTop:"10%"}}>Coming Soon..<span >&nbsp;     &nbsp;  </span>   </h2> --> */}
                    {/* <!-- <h2 className="Btna" style="margin-top: 0%;">Jao usse padao</h2> --> */}
                </div>
                


                {/* <!-- ----------- NOTES PDF  ------------  --> */}
                 <section>
                     <div className='jeenotestable'>
                          <table>

                            {/* ---- TABLE HEAD -----  */}
                        <thead>
                            <th>S.No</th>
                            <th>Chapter</th>
                            <th>Full Notes PDF</th>
      
                        </thead>
                        <tr>
                            <td>1</td>
                            <td> Electric Charges and Fields</td>
                            <td className='boxHover'><a href="" download={" Electric Charges and Fields PDF"}>PDF Download</a></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Electrostatic Potential and Capacitance</td>
                            <td className='boxHover'><a href="" download={"Electrostatic Potential and Capacitance Full Notes PDF"}>PDF Download</a></td>

                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Current Electricity</td>
                            <td className='boxHover'><a href="" download={"Current Electricity Full Notes PDF"}>PDF Download</a></td>
                        
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Moving Charges and Magnetism</td>
                            <td className='boxHover'><a href="" download={"Moving Charges and Magnetism Full Notes PDF"}>PDF Download</a></td>

                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Magnetism and Matter</td>
                            <td className='boxHover'><a href="" download={"Magnetism and Matter Full Notes PDF"}>PDF Download</a></td>
                        
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Electromagnetic Induction</td>
                            <td className='boxHover'><a href="" download={"Electromagnetic Induction Full Notes PDF"}>PDF Download</a></td>

                        </tr>

                        <tr>
                            <td>7</td>
                            <td>Alternating Current</td>
                            <td className='boxHover'><a href="" download={"Alternating Current Full Notes PDF"}>PDF Download</a></td>

                        </tr>

                        <tr>
                            <td>8</td>
                            <td>Electromagnetic Waves</td>
                            <td className='boxHover'><a href="" download={"Electromagnetic Waves Full Notes PDF"}>PDF Download</a></td>

                        </tr>

                        <tr>
                            <td>9</td>
                            <td>Ray Optics and Optical Instruments</td>
                            <td className='boxHover'><a href="" download={"Ray Optics and Optical Instruments Full Notes PDF"}>PDF Download</a></td>

                        </tr>

                        <tr>
                            <td>10</td>
                            <td>Wave Optics</td>
                            <td className='boxHover'><a href=""download>PDF Download</a></td>

                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Dual Nature of Radiation and Matter</td>
                            <td className='boxHover'><a href="" download={"Dual Nature of Radiation and Matter Full Notes PDF"}>PDF Download</a></td>

                        </tr>

                        <tr>
                            <td>12</td>
                            <td>Atoms</td>
                            <td className='boxHover'><a href=""download>PDF Download</a></td>

                        </tr>
                        <tr>
                            <td>13</td>
                            <td>Nuclei</td>
                            <td className='boxHover'><a href="" download={"Nuclei Full Notes PDF"}>PDF Download</a></td>

                        </tr>

                        <tr>
                            <td>14</td>
                            <td>Semiconductor</td>
                            <td className='boxHover'><a href=""download>PDF Download</a></td>

                        </tr>
                        </table>
                     </div>
                 </section>
            </section>

    </div>

        {/* <!-- ---- CHEMISTRY Full Notes CONTENT ------  --> */}
        <div id="unit2" className="tabcontent">

            <section className="unit1Content">
                
                <div className="movie-heading  " id="webseriessection" data-aos="fade-up
                "
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" >
                <h1 className="movie-h1 webSeries-h1 movie-h1-transition  " data-aos="flip-right" data-aos-duration="1000" >
                    Chemistry
            
                </h1>

                <h2 className="movie-h1 webSeries-h1 movie-h1-transition  "  style={{fontSize:"xx-large " ,marginTop:"6% " }}>Full Notes</h2>
            </div> 
                <div>
                <h2 class="Btna" style={{marginTop:"10%"}}>CREDIT - <span >&nbsp;  Piyush Agrawal <span style={{backgroundColor:"rgb(50, 193, 203)"}}> (JEE Mentor) </span>  &nbsp;   </span>   </h2>
                    {/* <!-- <h2 className="Btna" style={{marginTop:"10%"}}>Coming Soon..<span >&nbsp;     &nbsp;  </span>   </h2> --> */}
                    {/* <!-- <h2 className="Btna" style="margin-top: 0%;">Jao usse padao</h2> --> */}
                </div>
                


                {/* <!-- ----------- NOTES PDF  ------------  --> */}
                 <section>
                     <div className='jeenotestable'>
                          <table>

                            {/* ---- TABLE HEAD -----  */}
                        <thead>
                            <th>S.No</th>
                            <th>Chapter</th>
                            <th>Full Notes PDF</th>
      
                        </thead>
                        <tr>
                            <td>1</td>
                            <td>The Solid State</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Solution</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>

                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Chemical Kinetics</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>
                        
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Electrochemistry</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>

                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Surface Chemistry</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>
                        
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Metallurgy</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>

                        </tr>

                        <tr>
                            <td>7</td>
                            <td>The p-Block Elements</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>

                        </tr>

                        <tr>
                            <td>8</td>
                            <td>The d & f Block Elements</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>

                        </tr>

                        <tr>
                            <td>9</td>
                            <td> Coordination Compounds</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>

                        </tr>

                        <tr>
                            <td>10</td>
                            <td>Polymers</td>
                            <td className='boxHover'><a href=""download>PDF Download</a></td>

                        </tr>

                        <tr>
                            <td>11</td>
                            <td>Biomolecules</td>
                            <td className='boxHover'><a href=""download>PDF Download</a></td>

                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Haloalkanes and Haloarenes</td>
                            <td className='boxHover'><a href=""download>PDF Download</a></td>

                        </tr>
                        <tr>
                            <td>13</td>
                            <td>Chemistry in Everyday Life</td>
                            <td className='boxHover'><a href=""download>PDF Download</a></td>

                        </tr>
                        </table>
                     </div>
                 </section>
            </section>

    </div>

        {/* <!-- ---- MATHS Full Notes CONTENT ------  --> */}
        <div id="unit3" className="tabcontent">

            <section className="unit1Content">
                
                <div className="movie-heading  " id="webseriessection" data-aos="fade-up
                "
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" >
                <h1 className="movie-h1 webSeries-h1 movie-h1-transition  " data-aos="flip-right" data-aos-duration="1000" >
                    Maths
            
                </h1>

                <h2 className="movie-h1 webSeries-h1 movie-h1-transition  "  style={{fontSize:"xx-large " ,marginTop:"6% " }}>Full Notes</h2>
            </div> 
                <div>
                <h2 class="Btna" style={{marginTop:"10%"}}>CREDIT - <span >&nbsp;  Piyush Agrawal <span style={{backgroundColor:"rgb(50, 193, 203)"}}> (JEE Mentor) </span>  &nbsp;   </span>   </h2>

                </div>
                


                {/* <!-- ----------- NOTES PDF  ------------  --> */}
                 <section>
                     <div className='jeenotestable'>
                          <table>

                            {/* ---- TABLE HEAD -----  */}
                        <thead>
                            <th>S.No</th>
                            <th>Chapter</th>
                            <th>Full Notes PDF</th>
      
                        </thead>
                        <tr>
                            <td>1</td>
                            <td>Relation and Function</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Inverse Trigonometric Function</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>

                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Matrix</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>
                        
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Determinants</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>

                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Limits, Continuity and Differentiability</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>
                        
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Applications of Derivatives</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>

                        </tr>

                        <tr>
                            <td>7</td>
                            <td>Integrals</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>

                        </tr>

                        <tr>
                            <td>8</td>
                            <td>Applications of Integrals</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>

                        </tr>

                        <tr>
                            <td>9</td>
                            <td>Differential Equations</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>

                        </tr>

                        <tr>
                            <td>10</td>
                            <td>Vector Algebra</td>
                            <td className='boxHover'><a href=""download>PDF Download</a></td>

                        </tr>
                        <tr>
                            <td>11</td>
                            <td> Three dimensional Geometry</td>
                            <td className='boxHover'><a href="" download={"Three dimensional Geometry Full Notes PDF"}>PDF Download</a></td>

                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Probability</td>
                            <td className='boxHover'><a href="" download={"Probability Full Notes PDF"}>PDF Download</a></td>

                        </tr>
                        </table>
                     </div>
                 </section>
            </section>

    </div>



            </section>
    </>
  )
}

export default Search12SN