import Typed from 'typed.js';
import { useEffect , useRef } from 'react';

//  --------------- TYPING ANIMATION (TYPED JS ) --------------------- 


   // Create Ref element.
   const el = useRef(null);

   useEffect(() => {
     const typed = new Typed(el.current, {
       strings: ["Class Notes", "Assignments", "Previous Year Papers", "Free Courses and notes" , "Start Studying Smarter Today !"], // Strings to display
       // Speed settings, try diffrent values untill you get good results
       startDelay: 1000,
       typeSpeed: 50,
     
     });
   
     // Destropying
     return () => {
       typed.destroy();
     };
   }, []);

    {/*      <span ref={el}></span>  */}


export default Typedjs