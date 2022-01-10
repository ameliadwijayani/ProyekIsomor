import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDS5OTalYW0xK9s9maXgvOBqsXKDL83rKA",
    authDomain: "coba-235a7.firebaseapp.com",
    projectId: "coba-235a7",
    storageBucket: "coba-235a7.appspot.com",
    messagingSenderId: "641622734907",
    appId: "1:641622734907:web:e09a1041fe092f5d0b041e",
    measurementId: "G-XQDPR5TY0F"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;
