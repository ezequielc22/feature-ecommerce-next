// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIdmYA4s9PhmEcjc4EhIl8COaUWQc89SY",
  authDomain: "almate-6f41a.firebaseapp.com",
  projectId: "almate-6f41a",
  storageBucket: "almate-6f41a.appspot.com",
  messagingSenderId: "874038729141",
  appId: "1:874038729141:web:2c83363719074c9b30a1fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);