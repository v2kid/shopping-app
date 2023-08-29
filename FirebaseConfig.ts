import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDAtyVeLMZEMk4TGGZJ4EUJyJwwRpnsdZ0",
  authDomain: "androidapp-3abdd.firebaseapp.com",
  projectId: "androidapp-3abdd",
  storageBucket: "androidapp-3abdd.appspot.com",
  messagingSenderId: "298201884613",
  appId: "1:298201884613:web:9c6ee30c6bd9adf3bf8dac",
  measurementId: "G-4F797H0R7C"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const FIREBASE_DB = getFirestore(FIREBASE_APP)