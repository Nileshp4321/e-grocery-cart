import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref} from "firebase/database";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDopsxTR5IOkWXfskDINNDqsQUOQZO-Rqo",
  authDomain: "fooddelivery-b7a69.firebaseapp.com",
  databaseURL: "https://fooddelivery-b7a69-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fooddelivery-b7a69",
  storageBucket: "fooddelivery-b7a69.appspot.com",
  messagingSenderId: "4629093531",
  appId: "1:4629093531:web:1dc2419039e96deef83a3e",
  measurementId: "G-YC0RRB0KM0"
};
const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase();
const storage=getStorage();
// console.log("Databasee"+db)
const dbref = ref(db);
export default firebaseConfig;
export {auth,provider,db,dbref,storage}