// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLIFSKk2zDRzwqKduWtua9Nkxb9xAFGgw",
  authDomain: "smartexpensetracker-ca8a5.firebaseapp.com",
  databaseURL: "https://smartexpensetracker-ca8a5-default-rtdb.firebaseio.com",
  projectId: "smartexpensetracker-ca8a5",
  storageBucket: "smartexpensetracker-ca8a5.firebasestorage.app",
  messagingSenderId: "848950064420",
  appId: "1:848950064420:web:85a4773528e99ef166afb1",
  measurementId: "G-50MF6DN1TK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);