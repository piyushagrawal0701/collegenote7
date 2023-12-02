// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB5ISk08APSBTlwEIOxOg2vjF-feQgYcHE",
  authDomain: "contact-page-bb83d.firebaseapp.com",
  projectId: "contact-page-bb83d",
  storageBucket: "contact-page-bb83d.appspot.com",
  messagingSenderId: "724469743636",
  appId: "1:724469743636:web:f4a4f8f4ebbcced2f16701",
  measurementId: "G-03HTH22LQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};