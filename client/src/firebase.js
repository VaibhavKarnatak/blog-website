// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-97058.firebaseapp.com",
  projectId: "mern-blog-97058",
  storageBucket: "mern-blog-97058.appspot.com",
  messagingSenderId: "448242449616",
  appId: "1:448242449616:web:b9b4371657a66ab345b2d5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
