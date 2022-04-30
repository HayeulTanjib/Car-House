import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFEbrDElhCgqBMhgep99fd6mhblee8Uqk",
  authDomain: "car-house-f74ee.firebaseapp.com",
  projectId: "car-house-f74ee",
  storageBucket: "car-house-f74ee.appspot.com",
  messagingSenderId: "5412184930",
  appId: "1:5412184930:web:9ed7a5e585068d7a27c23b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;