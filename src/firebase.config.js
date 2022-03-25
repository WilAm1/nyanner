// Import the functions you need from the SDKs you need

import { FirebaseError, initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

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
export const db = getFirestore(app);

export const queryRecentPosts = query(
  collection(db, "posts"),
  orderBy("dateCreated")
);

export const publishUserPost = async (post) => {
  await addDoc(collection(db, "posts"), {
    ...post,
    dateCreated: serverTimestamp(),
  });
  console.log("i push a message !");
};

export const signOutUser = async () => {
  const auth = getAuth();
  const result = await signOut(auth);
  return result;
};

export const signInUser = async () => {
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      // // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      const user = result.user;
      const { uid: id, displayName: name, photoURL } = user;
      setDoc(
        doc(db, "users", user.uid),
        { id, name, photoURL },
        { merge: true }
      );
      console.log("SIGNED IN");
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      return { errorMessage, errorCode };
    });
};
