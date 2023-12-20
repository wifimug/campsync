// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL9zW0zUQGQVpxNDgiJxLANFYTlHq2wIY",
  authDomain: "campsync-d1774.firebaseapp.com",
  projectId: "campsync-d1774",
  storageBucket: "campsync-d1774.appspot.com",
  messagingSenderId: "773205351567",
  appId: "1:773205351567:web:541e06c460d5a714ed64fa",
  measurementId: "G-F039BKG73N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);