// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlXHCDRtZaIKbcx5UjSYrkr8bmJ_1zrmI",
  authDomain: "walkerjohnsonbrewing-9ffa2.firebaseapp.com",
  projectId: "walkerjohnsonbrewing-9ffa2",
  storageBucket: "walkerjohnsonbrewing-9ffa2.appspot.com",
  messagingSenderId: "55903138048",
  appId: "1:55903138048:web:3be4c31e31d18f59f183e5",
  measurementId: "G-YHMBQBJ6BJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);