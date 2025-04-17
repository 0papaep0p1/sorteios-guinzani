// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk-Dvv1ALr1ayQqR2OC83llJZ05Gbd3nc",
  authDomain: "sorteios-guinzani.firebaseapp.com",
  projectId: "sorteios-guinzani",
  storageBucket: "sorteios-guinzani.firebasestorage.app",
  messagingSenderId: "83810583657",
  appId: "1:83810583657:web:0411437152d908ba404ef8",
  measurementId: "G-SL0NCE7YFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);