import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDtEkKLXwpD4DCf8yrDt9pb98pTrJexGHI",
  authDomain: "blog-project-2efff.firebaseapp.com",
  projectId: "blog-project-2efff",
  storageBucket: "blog-project-2efff.firebasestorage.app",
  messagingSenderId: "250670420297",
  appId: "1:250670420297:web:11e40b77bf7a9abd6cca98",
  measurementId: "G-ZRJCHJV0TE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth
