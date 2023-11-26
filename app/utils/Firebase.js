import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAjtmaTSN8eyhrdOEAVTgZZT8o7j9NUMgQ",
    authDomain: "integradora-servicios.firebaseapp.com",
    projectId: "integradora-servicios",
    storageBucket: "integradora-servicios.appspot.com",
    messagingSenderId: "1035662197324",
    appId: "1:1035662197324:web:2f3e5f1c11f47b3af02ae9"
  };
  
export const app = initializeApp(firebaseConfig);
export const db=getFirestore();