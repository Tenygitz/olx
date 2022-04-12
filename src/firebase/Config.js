import firebase from "firebase";
import "firebase/auth";
import "firebase/firebase";
import "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCEF9ETmPX-QD88a6GtKVNvbmHKwBij6s8",
    authDomain: "olx-16766.firebaseapp.com",
    projectId: "olx-16766",
    storageBucket: "olx-16766.appspot.com",
    messagingSenderId: "451550278247",
    appId: "1:451550278247:web:5ff8c854562aa9469e9ac2",
    measurementId: "G-0NFW2M3FFL"
  };

 export default firebase.initializeApp(firebaseConfig)