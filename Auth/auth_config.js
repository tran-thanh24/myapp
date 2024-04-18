// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCue5oUUrBwhTFTMsvoVC4EvZf6ikyb5jA",
  authDomain: "asm-cro102-84d6c.firebaseapp.com",
  projectId: "asm-cro102-84d6c",
  storageBucket: "asm-cro102-84d6c.appspot.com",
  messagingSenderId: "710123575510",
  appId: "1:710123575510:web:27096e6e8a13ac6868d177",
  measurementId: "G-0PQEE6EE5R"
};
export const FIREBASE_APP = initializeApp(firebaseConfig);
// export const FIREBASE_ANALYTICS = getAnalytics(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);