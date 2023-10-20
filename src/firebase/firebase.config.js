// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChhSo5Rrig6_aX_0eUGsD1oB1jnug3RXM",
  authDomain: "technology-and-electroni-1030c.firebaseapp.com",
  projectId: "technology-and-electroni-1030c",
  storageBucket: "technology-and-electroni-1030c.appspot.com",
  messagingSenderId: "784271061779",
  appId: "1:784271061779:web:498073a1c7ae9568a1a0e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;