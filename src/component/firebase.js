// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcIecsmO9FJPdFZvQ94XttPNXyx42iae8",
  authDomain: "todo-app-firebase-96b12.firebaseapp.com",
  projectId: "todo-app-firebase-96b12",
  storageBucket: "todo-app-firebase-96b12.appspot.com",
  messagingSenderId: "356329441680",
  appId: "1:356329441680:web:262dcf8bbc16b905668b15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);