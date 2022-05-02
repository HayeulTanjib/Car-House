import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN ,
  projectId: process.env.REACT_APP_PROJECT_ID ,
  storageBucket: process.env.REACT_APP_S_BUCKET ,
  messagingSenderId: process.env.REACT_APP_M_SEND_ID ,
  appId: process.env.REACT_APP_APPID
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;