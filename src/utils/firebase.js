// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVJRJU7ZHaS8EV1Z-0NXhtRQKBDsYggFI",
  authDomain: "my-todo-app-21332.firebaseapp.com",
  projectId: "my-todo-app-21332",
  storageBucket: "my-todo-app-21332.appspot.com",
  messagingSenderId: "719954002283",
  appId: "1:719954002283:web:718bcddd75d70d40890c2e",
  measurementId: "G-1Q9LZKPM8E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()
export const auth = getAuth(app)


export default db