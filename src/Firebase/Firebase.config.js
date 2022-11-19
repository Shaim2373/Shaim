// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC97uOKCOg4vWGrvPNCMiZxEEAJrmIjO54",
  authDomain: "my-assignments-10.firebaseapp.com",
  projectId: "my-assignments-10",
  storageBucket: "my-assignments-10.appspot.com",
  messagingSenderId: "139162574718",
  appId: "1:139162574718:web:75be8e2fe589cf9b949d2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;