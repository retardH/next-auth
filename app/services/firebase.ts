// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyD6Met8VyKX-1ogC5fhB3-0r6Dhu4kRSQk",
    authDomain: "fir-01-9a29d.firebaseapp.com",
    projectId: "fir-01-9a29d",
    storageBucket: "fir-01-9a29d.appspot.com",
    messagingSenderId: "480013235558",
    appId: "1:480013235558:web:9d43bb9ca7217d5a2004a7",
    measurementId: "G-EMRT76QE6D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);