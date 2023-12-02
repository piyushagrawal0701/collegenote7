import React, { useEffect, useState } from 'react'
import {auth , provider} from '../../../Firebase';
import {signInWithPopup} from 'firebase/auth'
import '../Signin.css'

// ANIMATED IMG 
import signupaniimg from '../../Main/Animated Images/Sign up/mobile-login-animate.svg';

// Pages 
import CompSystemOrg3sem from '../../Second Year/Third Sem/CompSystemOrg3sem';



const Signin_CSO = () => {

    const [value,setValue] = useState('')
    const handleClick=()=>{
        signInWithPopup(auth,provider).then((data) =>{
            setValue(data.user.email)
            localStorage.setItem("email" , data.user.email)
        })
    }

    useEffect(() =>{
        setValue(localStorage.getItem('email'))
    })

  return (

         <>
           <section>

       
           {value?<CompSystemOrg3sem/> :
            
              <div className="signinform">
                    <div className="movie-heading text-center" id="webseriessection" data-aos="fade-up
                        "
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000" > <h1 className="movie-h1 webSeries-h1 movie-h1-transition  " data-aos="flip-right" data-aos-duration="1000" >
                        Let's get started
                      </h1>
                      <p>Sign up to our family and get started immediately</p></div> 

               {/* <!-- ----------- ANIMATED IMAGES --------------- --> */}
            <img className="AniImageSizeBig" src={signupaniimg} alt="" width={"50%"} style={{margin:"auto"}}data-aos="zoom-in-up"
            data-aos-duration="1000" data-aos-delay="800"/>
            

              <button className='bluebtn' onClick={handleClick} >Sign up with Google</button>

                </div>
           
  }
           </section>
         </>
  
  )
}

export default Signin_CSO