
import { initializeApp } from "firebase/app";

const firebaseConfig = {
   apiKey: "AIzaSyBAHH8G0DQkAZI4XcEbybwBtS47rr5XXLY",
   authDomain: "cosmetic-website.firebaseapp.com",
   projectId: "cosmetic-website",
   storageBucket: "cosmetic-website.appspot.com",
   messagingSenderId: "289899791880",
   appId: "1:289899791880:web:c8d16bb0878f2446cc73bd",
   measurementId: "G-YT4BL46455",
   databaseURL: 'https://cosmetic-website-default-rtdb.firebaseio.com',
 };
 export const app = initializeApp(firebaseConfig);
