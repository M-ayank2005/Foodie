// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration using environment variables
const firebaseConfig = {
  apiKey: 'AIzaSyB6V2dIYNF9cWb9q8MkvQy49hB5lCjGLzQ',
  authDomain: 'foodieenhanced.firebaseapp.com',
  projectId: 'foodieenhanced',
  storageBucket: 'foodieenhanced.appspot.com',
  messagingSenderId: '861050377989',
  appId: '1:861050377989:web:5d827935423070cd34096c',
  measurementId: 'G-QM89X4NXXQ',
}

console.log("Firebase Config:", firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);