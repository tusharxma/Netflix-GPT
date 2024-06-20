// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuRanjslBrr0db6zD_YEu12338_B5YeGs",
  authDomain: "netflix-gpt-a77e1.firebaseapp.com",
  projectId: "netflix-gpt-a77e1",
  storageBucket: "netflix-gpt-a77e1.appspot.com",
  messagingSenderId: "732000301311",
  appId: "1:732000301311:web:c250d69a10f2e9c16cdcca",
  measurementId: "G-BE1PCBVEZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();