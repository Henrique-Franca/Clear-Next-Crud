import { getApp, initializeApp, getApps } from 'firebase/app';
import 'firebase/firestore'
import { getFirestore } from 'firebase/firestore';
 
 
const firebaseConfig = {
    apiKey: "AIzaSyAMBxsGbMOtjBjzJf-NCRtoECCHk6zZRMs",
  authDomain: "next-crud-a891e.firebaseapp.com",
  projectId: "next-crud-a891e",
  storageBucket: "next-crud-a891e.appspot.com",
  messagingSenderId: "21558020656",
  appId: "1:21558020656:web:580aaac79c7c880da77bf5"
  };
 
const app = !getApps().length ? initializeApp( firebaseConfig) : getApp()
const dataBase = getFirestore(app)
export { dataBase }



