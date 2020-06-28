import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";

var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};
firebase.initializeApp(firebaseConfig);

export default firebase;
