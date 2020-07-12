import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyATi4HioSSbNkB5OiVzOY3YEkUqJfLF0d4",
  authDomain: "dr-clothing.firebaseapp.com",
  databaseURL: "https://dr-clothing.firebaseio.com",
  projectId: "dr-clothing",
  storageBucket: "dr-clothing.appspot.com",
  messagingSenderId: "928342641754",
  appId: "1:928342641754:web:dd66d86172cb114270dc63",
  measurementId: "G-KXG7MQZZH6",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
