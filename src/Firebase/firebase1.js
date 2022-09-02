// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANTexoYahZB5HvIWuKLWYAsH4FUVQF1z8",
  authDomain: "greener-habits-3b2cf.firebaseapp.com",
  projectId: "greener-habits-3b2cf",
  storageBucket: "greener-habits-3b2cf.appspot.com",
  messagingSenderId: "937022763561",
  appId: "1:937022763561:web:4b131aa747d8d69fa2e238",
  measurementId: "G-TW6E1W9LP5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);