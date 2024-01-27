import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBIhBEP9F3tAmoEGMDEQOCojBh5pafi3IQ",

    authDomain: "astrosumi.firebaseapp.com",

    projectId: "astrosumi",

    storageBucket: "astrosumi.appspot.com",

    messagingSenderId: "4402863953",

    appId: "1:4402863953:web:5f881f81b9645397913d70",

    measurementId: "G-HW9WG1VW1P",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
   export const db= getFirestore(app);