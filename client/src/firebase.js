// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG4rBKF_ByHogdfwi_tMeHlNdr76rW0yM",
  authDomain: "mern-blog-fa7c7.firebaseapp.com",
  projectId: "mern-blog-fa7c7",
  storageBucket: "mern-blog-fa7c7.appspot.com",
  messagingSenderId: "823210562362",
  appId: "1:823210562362:web:b7610cc97a9aa92472f603"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);