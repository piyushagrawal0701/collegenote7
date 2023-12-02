import React from 'react'

// --------- Importing Animated Images ----------- 
import MarketingImg from './Animated Images/About/mobile-marketing-animate.svg'

// --------- Importing Images ----------- 
import myPhoto from './Images/myphto-roundImg.png'


const About = () => {
  return (
    <>


{/* <!-- ----------------------------- ABOUT SECTION ------------------------------------  --> */}
      <section className="text-gray-600 body-font aboutSection">
              <div className="movie-heading" id="webseriessection" data-aos="fade-up
              "
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000" >
              <h1 className="movie-h1 webSeries-h1 movie-h1-transition  " data-aos="flip-right" data-aos-duration="1000" >
                  About Us
              </h1>

          </div> 

      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-full mx-auto">
          <div className="rounded-lg overflow-hidden">

            
            <img className="AniImageSizeBig" src={MarketingImg} alt="" width="50%" data-aos="zoom-in-up"
            data-aos-duration="1000" data-aos-delay="800" style={{margin:"auto"}}/>


          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-full h-full rounded-full inline-flex items-center justify-center  text-gray-400">
                <img src={myPhoto} alt="" data-aos="slide-right"
                data-aos-duration="1000" data-aos-delay="350"/>
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Piyush Agrawal</h2>
               
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left" data-aos="slide-up"
            data-aos-duration="1000" data-aos-delay="350">
              <p className="leading-relaxed text-lg mb-4">Hi, I'm Piyush Agrawal! <br/>

                  I'm a bachelor of technology student majoring in Information Technology at SATI Vidisha. I'm also the owner of the telegram and youtube channel of Piyush Nitian, where I share class 11th and 12th notes, mind maps, short notes, strategies, and other useful content.
                  <br/> <br/>
                  On this website, I share class notes, assignments, end-sem papers, and other useful information related to college. I also create interactive content, such as quizzes, surveys, and polls, to help you learn and stay engaged.
                  <br/>
                  I'm passionate about education and I believe that everyone should have access to high-quality learning resources. That's why I created this website and my YouTube channel. I want to help you succeed in your studies and achieve your goals.
                  
                  I'm always looking for ways to improve my teaching and learning methods. If you have any feedback or suggestions, please feel free to contact me.
                  
                  Thank you for visiting my website! </p>
              <a className="text-blue-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      </section>


    </>
  )
}

export default About