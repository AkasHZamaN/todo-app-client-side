// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0xqdDdSi7Qg9SFfKBs5MWCBcNBBHDgR0",
  authDomain: "todo-app-3877f.firebaseapp.com",
  projectId: "todo-app-3877f",
  storageBucket: "todo-app-3877f.appspot.com",
  messagingSenderId: "226917244574",
  appId: "1:226917244574:web:cd5e5ddca8cd025cd4658f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth