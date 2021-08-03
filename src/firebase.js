import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBLKuUWNycWe7g3EHUl51tDyH6C-O55cSE",
    authDomain: "tinder-clone-829ad.firebaseapp.com",
    projectId: "tinder-clone-829ad",
    storageBucket: "tinder-clone-829ad.appspot.com",
    messagingSenderId: "370577987217",
    appId: "1:370577987217:web:e5c7cf8263295712ca1130",
    measurementId: "G-PX85HMSJ9Z"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database= firebaseApp.firestore();

export default database;
