// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCd-ACqKe0QZD34yd-XqgAvaz201a94mRI",
    authDomain: "fashion-flare-ffc3a.firebaseapp.com",
    projectId: "fashion-flare-ffc3a",
    storageBucket: "fashion-flare-ffc3a.appspot.com",
    messagingSenderId: "744998543192",
    appId: "1:744998543192:web:0a0f754ed2e64ac74b8f2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)