import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../css/style.css'
import '../css/cardslider.css'
import { Link } from 'react-router-dom';




// Free courses images 
import webCwh from '../Pages/Main/Images/Free courses/web dev cwh.jpg'
import CImg from '../Images/Home/c lang.jpeg'
import pythonImg from '../Images/Home/python lang.jpg'
import javaImg from '../Images/Home/java lang.jpg'
import WebdevImg from '../Pages/Main/Images/Free courses/web dev full course.jpg'
import htmlImg from '../Pages/Main/Images/Free courses/html_oneshot.jpeg'
import cssImg from '../Pages/Main/Images/Free courses/css one shot.jpg'

const CardSlider = () => {

  return (
    <>
     <section>
     <div className="cardslider-container">
      
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >

        {/* <!-- ---- 1 ( Web dev by harry )----------  --> */}
        <SwiperSlide>
        <div className="p-4 md:w-1/3 img " data-aos="zoom-in"
              data-aos-duration="1000" data-aos-delay="10">

                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden Free_course_card" >
                  <a href="https://www.youtube.com/watch?v=tVzUXW6siu0&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&index=1&ab_channel=CodeWithHarry"><img className="lg:h-48 md:h-36 w-full object-cover object-center fitImg" src={webCwh} alt="blog"/></a>
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-blue-500 mb-3">Web Development</h1>
                    <hr /> <br />
                    <p className="leading-relaxed mb-3">Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management.</p>
                    <div className="flex items-center flex-wrap ">
                      <a  href="https://www.youtube.com/watch?v=tVzUXW6siu0&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&index=1&ab_channel=CodeWithHarry" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
          
                    </div>
                  </div>
                </div>
              </div>
        </SwiperSlide>

        {/* <!-- ---- 2 ( C lang) ----------  --> */}

        <SwiperSlide>
          
        <div className="p-4 md:w-1/3 img " data-aos="zoom-in"
              data-aos-duration="1000" data-aos-delay="50">

                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden Free_course_card" >
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
        </SwiperSlide>

        {/* <!-- ---- 3 (Python) ----------  --> */}
        <SwiperSlide>
        <div className="p-4 md:w-1/3 img" data-aos="zoom-in"
              data-aos-duration="1000" data-aos-delay="100">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden Free_course_card">
             <a href="https://youtu.be/fqF9M92jzUo"><img className="lg:h-48 md:h-36 w-full object-cover object-center fitImg" src={pythonImg} alt="blog"/></a>
                  <div className="p-6">
                    {/* <!-- <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> --> */}
                    <h1 className="title-font text-lg font-medium text-blue-500 mb-3">Python programming</h1>
                    <hr /> <br />
                    <p className="leading-relaxed mb-3">Python is a high-level, interpreted, interactive and object-oriented programming language and is used for a wide variety of tasks, including web development, machine learning, and artificial intelligence.</p>
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
        </SwiperSlide>

        {/* <!-- ---- 4 ( Java )----------  --> */}
        <SwiperSlide>
            <div className="p-4 md:w-1/3 img "  data-aos="zoom-in"
              data-aos-duration="1000" data-aos-delay="150">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden  Free_course_card">
                 <a href="https://youtu.be/UmnCZ7-9yDY"> <img className="lg:h-48 md:h-36 w-full object-cover object-center fitImg" src={javaImg} alt="blog"/></a>
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-blue-500 mb-3">Java</h1>
                    <hr /> <br />
                    <p className="leading-relaxed mb-3">Java is a popular language for developing a wide variety of software, including web applications, mobile applications, desktop applications, and embedded systems.</p>
                    <div className="flex items-center flex-wrap ">
                      <a  href="https://youtu.be/UmnCZ7-9yDY" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
        </SwiperSlide>

        {/* <!-- ---- 5 ( Web dev by apna college) ----------  --> */}
        <SwiperSlide>
        <div className="p-4 md:w-1/3 img" data-aos="zoom-in"
              data-aos-duration="1000" data-aos-delay="200">

                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden Free_course_card" >
                  <a href="https://youtu.be/l1EssrLxt7E?si=7JnAQihOHMPgUSpU"><img className="lg:h-48 md:h-36 w-full object-cover object-center fitImg" src={WebdevImg} alt="blog"/></a>
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-blue-500 mb-3">Web Development</h1>
                    <hr /> <br />
                    <p className="leading-relaxed mb-3">Web development involves creating and maintaining websites and web applications for the internet. It includes both front-end  (design and user interface) and back-end (server and functionality).</p>
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
        </SwiperSlide>

        {/* <!-- ---- 6 ( Html one shot) ----------  --> */}
        <SwiperSlide>
        <div className="p-4 md:w-1/3 img" data-aos="zoom-in"
              data-aos-duration="1000" data-aos-delay="250">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden Free_course_card">
             <a href="https://youtu.be/HcOc7P5BMi4?si=Xq4Euw1TF27USSaE"><img className="lg:h-48 md:h-36 w-full object-cover object-center fitImg" src={htmlImg} alt="blog"/></a>
                  <div className="p-6">
                    {/* <!-- <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> --> */}
                    <h1 className="title-font text-lg font-medium text-blue-500 mb-3">HTML</h1>
                    <hr /> <br />
                    <p className="leading-relaxed mb-3">HTML, or HyperText Markup Language, is the standard markup language used to create web pages. It is the backbone of most web content and is used to structure the content on a web page.</p>
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
        </SwiperSlide>

        {/* <!-- ---- 7 (CSS one shot) ----------  --> */}

        <SwiperSlide>
        <div className="p-4 md:w-1/3 img"  data-aos="zoom-in"
              data-aos-duration="1000" data-aos-delay="300">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden  Free_course_card">
                 <a href="https://youtu.be/UmnCZ7-9yDY"> <img className="lg:h-48 md:h-36 w-full object-cover object-center fitImg" src={cssImg} alt="blog"/></a>
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-blue-500 mb-3">CSS</h1>
                    <hr /> <br />
                    <p className="leading-relaxed mb-3">CSS is like the decorator for a web page. Imagine you have a plain room, and you want to make it look nice and organized. CSS is what you use to choose the colors, fonts, and everything in the room.</p>
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
        </SwiperSlide>

        <div className="slider-controler ">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
     </section>
 
    </>
  )
}

export default CardSlider