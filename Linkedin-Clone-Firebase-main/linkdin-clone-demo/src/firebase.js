

import { initializeApp } from "firebase/app";
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBIz_FYgTZf78J4Q6tSih4xVSXUOdBYcmQ",
  authDomain: "linkdinclonedemo.firebaseapp.com",
  projectId: "linkdinclonedemo",
  storageBucket: "linkdinclonedemo.appspot.com",
  messagingSenderId: "973324531168",
  appId: "1:973324531168:web:97a3c9020eb875492ea785",
  measurementId: "G-MQTHZGCVMV"
};

// Initialize Firebase

const fireabaseApp = initializeApp(firebaseConfig);


  const db = fireabaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth} ;