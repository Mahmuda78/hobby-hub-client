// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWFMWhht4hK2AwX4ZDoWk6Ny0GgLkz9zM",
  authDomain: "hobby-hub-client-44782.firebaseapp.com",
  projectId: "hobby-hub-client-44782",
  storageBucket: "hobby-hub-client-44782.firebasestorage.app",
  messagingSenderId: "816021611036",
  appId: "1:816021611036:web:85d2440d6bdd32eb43b5d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);