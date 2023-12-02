import React from 'react'

// ---------- Importing Animated Images ------------ // 
import freeCourses from '../Main/Animated Images/Home/programming-animate.svg'

// ---------- Importing Animated Images ------------ // 
import javaImg from '../Main/Images/Home/java lang.jpg'
import CImg from '../Main/Images/Home/c lang.jpeg'
import pythonImg from '../Main/Images/Home/python lang.jpg'
import WebdevImg from '../Main/Images/Free courses/web dev full course.jpg'
import htmlImg from '../Main/Images/Free courses/html_oneshot.jpeg'
import cssImg from '../Main/Images/Free courses/css one shot.jpg'
// import myPhoto from '../Main/Images/myphto-roundImg.png'

const View_All_Free_courses = () => {
  
  return (
    <>
          {/* <!-- ----------------------------- FREE COURSES SECTION -------------------------  --> */}
          <section className="text-gray-600 body-font "   data-aos="zoom-in-down" data-aos-duration="1000"id='learn'>
        <div className="container px-5 py-24 mx-auto" >
          <div className="flex flex-col text-center w-full mb-20">
        <div className="movie-heading " id="webseriessection" data-aos="fade-up
        "
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000" ></div> 
          <h1 className="movie-h1 webSeries-h1 movie-h1-transition  " data-aos="flip-right" data-aos-duration="1000" >
            Free Courses
          </h1>
        </div>

            {/* <!-- <p className="lg:w-full mx-auto leading-relaxed text-base text-center" >You can contact me through mail and on call.</p> --> */}

            {/* <!-- ----------- ANIMATED IMAGES --------------- --> */}
            <img className="AniImageSizeBig" src={freeCourses} alt="" width={"50%"} style={{margin:"auto"}}data-aos="zoom-in-up"
            data-aos-duration="1000" data-aos-delay="800"/>
          </div>


        {/* <!-- ------------------------- COURCES CARDS ------------------------------          --> */}
        <section className="text-gray-600 body-font" data-aos="fade-in"
        data-aos-duration="1000" data-aos-delay="10">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">

                {/* <!-- 1 div  --> */}

              <div className="p-4 md:w-1/3 " data-aos="slide-left"
              data-aos-duration="1000" data-aos-delay="150">

                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden Free_course_card " >
                  <a href="https://youtu.be/irqbmMNs2Bo"><img className="lg:h-48 md:h-36 w-full object-cover object-center fitImg" src={CImg} alt="blog"/></a>
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-blue-500 mb-3">C Language</h1>
                    <hr /> <br />
                    <p className="leading-relaxed mb-3">C is a powerful and versatile programming language that can be used to develop a wide variety of software. It is a good choice for beginners.</p>
                    <div className="flex items-center flex-wrap ">
                      <a  href="https://youtu.be/irqbmMNs2Bo" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
          
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- ---- 2 ----------  --> */}
              <div className="p-4 md:w-1/3 " data-aos="slide-left"
              data-aos-duration="1000" data-aos-delay="500">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden Free_course_card">
             <a href="https://youtu.be/fqF9M92jzUo"><img className="lg:h-48 md:h-36 w-full object-cover object-center fitImg" src={pythonImg} alt="blog"/></a>
                  <div className="p-6">
                    {/* <!-- <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> --> */}
                    <h1 className="title-font text-lg font-medium text-blue-500 mb-3">Python programming</h1>
                    <hr /> <br />
                    <p className="leading-relaxed mb-3">Python is a high-level, interpreted, interactive and object-oriented programming language and is used for a wide variety of tasks, including web development, data science, machine learning, and artificial intelligence.</p>
                    <div className="flex items-center flex-wrap">
                      <a  href="https://youtu.be/fqF9M92jzUo" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- --------- 3 --------------  --> */}
              <div className="p-4 md:w-1/3 "  data-aos="slide-left"
              data-aos-duration="1000" data-aos-delay="800">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden  Free_course_card">
                 <a href="https://youtu.be/l1EssrLxt7E?si=7JnAQihOHMPgUSpU"> <img className="lg:h-48 md:h-36 w-full object-cover object-center fitImg" src={javaImg} alt="blog"/></a>
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-blue-500 mb-3">Java</h1>
                    <hr /> <br />
                    <p className="leading-relaxed mb-3">Java is a popular language for developing a wide variety of software, including web applications, mobile applications, desktop applications, and embedded systems. It is also a popular language for teaching programming concepts.</p>
                    <div className="flex items-center flex-wrap ">
                      <a  href="https://youtu.be/l1EssrLxt7E?si=7JnAQihOHMPgUSpU" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
         
            </div>

            {/* <button className=' btnmiddle middlesplit ' style={{margin:"auto", marginTop:"10vh"}} >View All</button> */}
          </div>
        </section>
        
        {/* <!-- ------------------------- COURCES CARDS ------------------------------          --> */}
        <section className="text-gray-600 body-font" data-aos="fade-in"
        data-aos-duration="1000" data-aos-delay="10">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">

                {/* <!-- 4 div  --> */}

              <div className="p-4 md:w-1/3 " data-aos="slide-left"
              data-aos-duration="1000" data-aos-delay="150">

                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden Free_course_card" >
                  <a href="https://youtu.be/l1EssrLxt7E?si=7JnAQihOHMPgUSpU"><img className="lg:h-48 md:h-36 w-full object-cover object-center fitImg" src={WebdevImg} alt="blog"/></a>
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-blue-500 mb-3">Web Development</h1>
                    <hr /> <br />
                    <p className="leading-relaxed mb-3">Web development involves creating and maintaining websites and web applications for the internet. It includes both front-end development (design and user interface) and back-end development (server and functionality).</p>
                    <div className="flex items-center flex-wrap ">
                      <a  href="https://youtu.be/l1EssrLxt7E?si=7JnAQihOHMPgUSpU" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
          
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- ---- 5 ----------  --> */}
              <div className="p-4 md:w-1/3 " data-aos="slide-left"
              data-aos-duration="1000" data-aos-delay="500">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden Free_course_card">
             <a href="https://youtu.be/HcOc7P5BMi4?si=Xq4Euw1TF27USSaE"><img className="lg:h-48 md:h-36 w-full object-cover object-center fitImg" src={htmlImg} alt="blog"/></a>
                  <div className="p-6">
                    {/* <!-- <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> --> */}
                    <h1 className="title-font text-lg font-medium text-blue-500 mb-3">HTML</h1>
                    <hr /> <br />
                    <p className="leading-relaxed mb-3">HTML, or HyperText Markup Language, is the standard markup language used to create web pages. It is the backbone of most web content and is used to structure the content on a web page and define how it should be displayed in a web browser.</p>
                    <div className="flex items-center flex-wrap">
                      <a  href="https://youtu.be/HcOc7P5BMi4?si=Xq4Euw1TF27USSaE" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- --------- 6 --------------  --> */}
              <div className="p-4 md:w-1/3 "  data-aos="slide-left"
              data-aos-duration="1000" data-aos-delay="800">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden  Free_course_card">
                 <a href="https://youtu.be/UmnCZ7-9yDY"> <img className="lg:h-48 md:h-36 w-full object-cover object-center fitImg" src={cssImg} alt="blog"/></a>
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-blue-500 mb-3">CSS</h1>
                    <hr /> <br />
                    <p className="leading-relaxed mb-3">CSS is like the decorator for a web page. Imagine you have a plain room (the HTML content), and you want to make it look nice and organized. CSS is what you use to choose the colors, fonts, and arrangement of everything in the room.</p>
                    <div className="flex items-center flex-wrap ">
                      <a  href="https://youtu.be/l1EssrLxt7E?si=7JnAQihOHMPgUSpU" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
         
            </div>

            {/* <button className=' btnmiddle middlesplit ' style={{margin:"auto", marginTop:"10vh"}} >View All</button> */}
          </div>
        </section>
      </section>
    </>
  )
}

export default View_All_Free_courses