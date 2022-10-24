// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMVoaO0nFOEyekUYB9cV8xJpEbcZ-wm2I",
    authDomain: "learners-eaa2b.firebaseapp.com",
    projectId: "learners-eaa2b",
    storageBucket: "learners-eaa2b.appspot.com",
    messagingSenderId: "665442326239",
    appId: "1:665442326239:web:df01641c7e62fdd1f13b6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;