import React from 'react'
import Typed from 'typed.js';
import { useEffect , useRef } from 'react';

import '../../css/contact.css'

// --------- Importing Animated Images ----------- 
import ContactAniImage from './Animated Images/Contact/example-animate.svg'


// --------- IMPORTING COMPONENTS ----------- 


const Contact = () => {

//  --------------- TYPING ANIMATION (TYPED JS ) --------------------- 


   // Create Ref element.
   const el = useRef(null);

   useEffect(() => {
     const typed = new Typed(el.current, {
       strings: ["Contact Us", ], // Strings to display
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
   


 {/* <!-- ----------------------------- CONTACT SECTION ------------------------------------  --> */}

<section className="text-gray-600 body-font"  data-aos="zoom-in-down" data-aos-duration="1000" id="contact-header">
    <div className="container px-5 py-24 mx-auto" >
      <div className="flex flex-col text-center w-full mb-20">
        {/* <!-- <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Ask your any query</h2> --> */}
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"><b>     <span ref={el}></span> </b></h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Please feel free to contact me through any of the methods listed above.</p>

        <img className="AniImageSizeBig" src={ContactAniImage} alt="" width="50%" data-aos="zoom-in-up"
        data-aos-duration="1000" data-aos-delay="800" style={{margin:"auto"}}/>

      </div>
      <div className="flex flex-wrap" data-aos="flip-right" 
      data-aos-duration="1000">
        {/* --- MAIL ---  */}
        
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 cardcolor btnslide rightslide">
          <ion-icon name="mail" id="mail"></ion-icon>
          <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 h2color">Mail</h2>
          <p className="leading-relaxed text-base mb-4">You can ask your query through mail.</p>
          <a className="text-green-500 inline-flex items-center" href="mailto:piyushnitian777@gmail.com">Click here
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        {/* --- LINKED IN ---  */}
  
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6  border-opacity-60 cardcolor btnmiddle middlesplit" data-aos="flip-left" 
        data-aos-duration="1000">
          <ion-icon name="logo-linkedin" id="linkedin"></ion-icon>
          <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 h2color" >Linked In</h2>
  
          <p className="leading-relaxed text-base mb-4">You can also contact me on linked in. Here i also upload lots of incredible project which i have made.</p>
          <a className="text-green-500 inline-flex items-center" href="https://www.linkedin.com/in/piyush-agrawal-b51aa926b">Click here
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>

        {/* --- YOUTUBE ---  */}
  
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 cardcolor btnmiddle middleup" data-aos="zoom-in-left" data-aos-duration="1000">
          <b><ion-icon name="logo-youtube" id="youtube"></ion-icon></b>
          <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 h2color" >Youtube Channel</h2>
          <p className="leading-relaxed text-base mb-4">This is my youtube channel and i will upload important material on this channel.</p>
          <a className="text-green-500 inline-flex items-center" href="https://www.youtube.com/channel/UClOmB7C2tNGsCJok10a-aiQ">Click here
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        {/* --- TELEGRAM ---  */}
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 cardcolor btnslide leftslide " data-aos="flip-right" 
        data-aos-duration="1000" >
          <b><ion-icon name="navigate-circle" id="telegram"></ion-icon></b>
          <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 h2-color" >Telegram Channel</h2>
          <p className="leading-relaxed text-base mb-4">In this telegram channel, i have uploaded class 11 and 12th notes and lots of useful content.</p>
          <a className="text-green-500 inline-flex items-center" href="https://t.me/piyushnitian">Click here
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        
      </div>
      <a href="https://instagram.com/piyushagrawal0701?igshid=MGNiNDI5ZTU="><button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Follow me on Instagram</button></a>
    </div>
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
<hr />
 {/* <!-- ----------------------------- MESSAGE SECTION ------------------------------------  --> */}

 <section class="text-gray-600 body-font relative" data-aos="slide-right" data-aos-duration="1000">
    <div class="container px-5 py-24 mx-auto" >
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Feel free to ask your any queries</p>
      </div>

      <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-full">
            {/* <!-- Form  --> */}
          <form action="https://formsubmit.co/piyushnitian777@gmail.com" method="POST" >
            <div class="relative">
              <label for="name" class="leading-7 text-sm text-gray-600" >Name</label>
              <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Name"/>
            </div>
   
          <div class="p-2 w-full">
            <div class="relative">
              <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Email-id"/>
            </div>
          </div>
  
          <div class="p-2 w-full">
            <div class="relative">
              <label for="number" class="leading-7 text-sm text-gray-600">Mobile No.</label>
               <input type="number" name="number" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Mobile no."/>
            </div>
          </div>
  
  
          <div class="p-2 w-full">
            <div class="relative">
              <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" placeholder="Type any message"></textarea>
            </div>
          </div>
  
          <div class="p-2 w-full">
            <button type="submit" class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
          </div>
          </form>
          <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
            <a class="text-indigo-500">piyushnitian777@gmail.com</a>
            <p class="leading-normal my-5">Piyush Agrawal
              <br/>Ganj Basoda, Madhya Pradesh
            </p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-4 text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-4 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a class="ml-4 text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
  
   </>
  )
}

export default Contact