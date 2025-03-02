// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQg-2QU1BjGB0IhkW14bh8zWb-o9cdndc",
  authDomain: "visa-navigator-33d79.firebaseapp.com",
  projectId: "visa-navigator-33d79",
  storageBucket: "visa-navigator-33d79.firebasestorage.app",
  messagingSenderId: "683271776893",
  appId: "1:683271776893:web:5349274c9a80525e289f14",
  measurementId: "G-H4F090VD66",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
