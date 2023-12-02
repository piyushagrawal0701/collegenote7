import React from 'react'

// ------------ IMPORTING CLASS NOTES -------- 


const Search11SN = () => {


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
                            <td>Unit and Measurement</td>
                            <td className='boxHover'><a href="" download={"Unit and Measurement PDF"}>PDF Download</a></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Kinematics</td>
                            <td className='boxHover'><a href="" download={"Kinematics Full Notes PDF"}>PDF Download</a></td>

                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Laws of Motion</td>
                            <td className='boxHover'><a href="" download={"Laws of Motion Full Notes PDF"}>PDF Download</a></td>
                        
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Work, Energy and Power</td>
                            <td className='boxHover'><a href="" download={"Work, Energy and Power Full Notes PDF"}>PDF Download</a></td>

                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Rotational Motion</td>
                            <td className='boxHover'><a href="" download={"Rotational Motion Full Notes PDF"}>PDF Download</a></td>
                        
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Gravitation</td>
                            <td className='boxHover'><a href="" download={"Gravitation Full Notes PDF"}>PDF Download</a></td>

                        </tr>

                        <tr>
                            <td>7</td>
                            <td>Properties of solids and liquids</td>
                            <td className='boxHover'><a href="" download={"Properties fo solids and liquids Full Notes PDF"}>PDF Download</a></td>

                        </tr>

                        <tr>
                            <td>8</td>
                            <td>Thermodynamics</td>
                            <td className='boxHover'><a href="" download={"Thermodynamics Full Notes PDF"}>PDF Download</a></td>

                        </tr>

                        <tr>
                            <td>9</td>
                            <td>KTG</td>
                            <td className='boxHover'><a href="" download={"KTG Full Notes PDF"}>PDF Download</a></td>

                        </tr>

                        <tr>
                            <td>10</td>
                            <td>Oscillation and Waves</td>
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
                            <td>Some basic concept of chemistry</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Atomic Structure</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>

                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Periodic Properties</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>
                        
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Chemical Bonding</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>

                        </tr>
                        <tr>
                            <td>5</td>
                            <td>State of matter</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>
                        
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Thermodynamics</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>

                        </tr>

                        <tr>
                            <td>7</td>
                            <td>Chemical Eqillibrium</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>

                        </tr>

                        <tr>
                            <td>8</td>
                            <td>Redox Reaction</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>

                        </tr>

                        <tr>
                            <td>9</td>
                            <td>S Blocks</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>

                        </tr>

                        <tr>
                            <td>10</td>
                            <td>Hydrogen</td>
                            <td className='boxHover'><a href=""download>PDF Download</a></td>

                        </tr>

                        <tr>
                            <td>11</td>
                            <td>Environmental Chemistry</td>
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
                            <td>Sets</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Relation and Function</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>

                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Trigonometry</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>
                        
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Quadratic Equations</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>

                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Complex Numbers</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>
                        
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Linear Inequalities</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>

                        </tr>

                        <tr>
                            <td>7</td>
                            <td>Permutation and Combination</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>

                        </tr>

                        <tr>
                            <td>8</td>
                            <td>Binomial Theoram</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>

                        </tr>

                        <tr>
                            <td>9</td>
                            <td>Sequence and series</td>
                            <td className='boxHover'><a href="" download>PDF Download</a></td>

                        </tr>

                        <tr>
                            <td>10</td>
                            <td>Straight Lines</td>
                            <td className='boxHover'><a href=""download>PDF Download</a></td>

                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Conic Sections</td>
                            <td className='boxHover'><a href="" download={"Conic Section Full Notes PDF"}>PDF Download</a></td>

                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Mathematical Reasoning</td>
                            <td className='boxHover'><a href="" download={"Mathematical Reasoning Full Notes PDF"}>PDF Download</a></td>

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

export default Search11SN