// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW3FccMFl-TQjinL4LueB6U73IFoSSsWM",
  authDomain: "food-app-c7486.firebaseapp.com",
  databaseURL:
    "https://food-app-c7486-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "food-app-c7486",
  storageBucket: "food-app-c7486.appspot.com",
  messagingSenderId: "226614156820",
  appId: "1:226614156820:web:a999272d6d2ddc24de1101",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
