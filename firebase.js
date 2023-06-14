// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-next-3342a.firebaseapp.com",
  projectId: "twitter-next-3342a",
  storageBucket: "twitter-next-3342a.appspot.com",
  messagingSenderId: "1072522802151",
  appId: "1:1072522802151:web:13075343f010dd27b58342"
};

// Initialize Firebase

const app = !getApps().length ?  initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};