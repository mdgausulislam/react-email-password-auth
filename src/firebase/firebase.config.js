// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgPxxwsnFygIAPhRFL8mDMska75fUKG3Y",
  authDomain: "email-password-auth-92cfe.firebaseapp.com",
  projectId: "email-password-auth-92cfe",
  storageBucket: "email-password-auth-92cfe.appspot.com",
  messagingSenderId: "574237893445",
  appId: "1:574237893445:web:25ff8dc754f462ff53542c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;