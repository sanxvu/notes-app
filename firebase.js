// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzF3GASmDLaCbtmDrvadRk0JnSAKd4Apw",
  authDomain: "react-notes-fa3e9.firebaseapp.com",
  projectId: "react-notes-fa3e9",
  storageBucket: "react-notes-fa3e9.appspot.com",
  messagingSenderId: "605199975079",
  appId: "1:605199975079:web:ca4205480730060ed4d182"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")