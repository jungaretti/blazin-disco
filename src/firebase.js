import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDTgXrEUqFh1_g-7UxZ3zpJVMrwjw6rviM",
  authDomain: "blazin-disco.firebaseapp.com",
  databaseURL: "https://blazin-disco.firebaseio.com",
  projectId: "blazin-disco",
  storageBucket: "blazin-disco.appspot.com",
  messagingSenderId: "394649767446",
  appId: "1:394649767446:web:c9f0df85b7fa4c23a1af37",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
firebase.auth().signInAnonymously();

export const db = firebase.firestore();
