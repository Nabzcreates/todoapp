import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyDekBivp5w1mPn8MuG5uzElkSvcjVPTGxI",
  authDomain: "todo-app-a3027.firebaseapp.com",
  projectId: "todo-app-a3027",
  storageBucket: "todo-app-a3027.appspot.com",
  messagingSenderId: "937540172634",
  appId: "1:937540172634:web:6e2eb62ddca73f79ebd163",
  measurementId: "G-NQHR9VLF4Z"
};

//initialize 
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db