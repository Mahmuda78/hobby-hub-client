// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPx4uQDPaggEzM7GIzXT8njPxS08_iY4M",
  authDomain: "hobby-hub-client-65911.firebaseapp.com",
  projectId: "hobby-hub-client-65911",
  storageBucket: "hobby-hub-client-65911.firebasestorage.app",
  messagingSenderId: "653639556321",
  appId: "1:653639556321:web:d1695186e1a1d83a952ba0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);