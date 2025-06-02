// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8yE6h87iMQEN5xXvzQm3p0nHE4ta9d_c",
  authDomain: "linklux.firebaseapp.com",
  projectId: "linklux",
  storageBucket: "linklux.firebasestorage.app",
  messagingSenderId: "799880056382",
  appId: "1:799880056382:web:ff400a25e80f24b5024b6f",
  measurementId: "G-TJHC9D2KBB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
