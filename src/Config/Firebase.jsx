import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
import { getDatabase} from 'firebase/database'
import { getStorage } from "firebase/storage";





const firebaseConfig = {
  apiKey: "AIzaSyDQlSW1z-fa800cjqqBaapnWKfESuWPY9c",
  authDomain: "datetime-231d4.firebaseapp.com",
  databaseURL: "https://datetime-231d4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "datetime-231d4",
  storageBucket: "datetime-231d4.appspot.com",
  messagingSenderId: "100848742570",
  appId: "1:100848742570:web:641c9fa7ffd42c926be0d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getDatabase(app)
const storage =getStorage(app)


export {auth,db,storage}