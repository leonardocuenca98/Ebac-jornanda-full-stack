// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore} from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4gZpd9gCyHdZ4QgeuLX9a47kVTKDDYm8",
  authDomain: "tiktok---jornada-leonardo.firebaseapp.com",
  projectId: "tiktok---jornada-leonardo",
  storageBucket: "tiktok---jornada-leonardo.appspot.com",
  messagingSenderId: "419651618562",
  appId: "1:419651618562:web:0621b49b69c1ee7d70e41b"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;