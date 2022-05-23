// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYgOyf3YXhNkTkaySebiAg6D-3rJFQPbw",
  authDomain: "icasa-site.firebaseapp.com",
  projectId: "icasa-site",
  storageBucket: "icasa-site.appspot.com",
  messagingSenderId: "660312345574",
  appId: "1:660312345574:web:14fbb7c0a045913f3de427",
  measurementId: "G-XF7LJ20QTH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app);