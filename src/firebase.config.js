// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { collection, getFirestore, orderBy, query } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDeyI7GaMYEKDCSi1V6jld_cpvpj1lMxUk",

  authDomain: "nyanner-8e77d.firebaseapp.com",

  projectId: "nyanner-8e77d",

  storageBucket: "nyanner-8e77d.appspot.com",

  messagingSenderId: "562647244468",

  appId: "1:562647244468:web:dafcea08b24dbe8a5c81e1",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
// Auth
const provider = new GoogleAuthProvider();
// Firestore
// TODO get the user profile from db query here
const db = getFirestore(app);

export const queryRecentPosts = query(
  collection(db, "posts"),
  orderBy("dateCreated")
);

export const signOutUser = async () => {
  const auth = getAuth();
  const result = await signOut(auth);
  return result;
};

export const signInUser = async () => {
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      // TODO set the db later to add user to db if it does not exists
      const user = result.user;
      console.log(user);
      return { user, token };
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      return { errorMessage, errorCode };
      // ...
    });
};

// Add query later here
