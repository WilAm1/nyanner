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
  getDoc,
  getFirestore,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  where,
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
  orderBy("dateCreated", "desc")
);

export const queryUserPosts = (id) =>
  query(collection(db, "posts"), where("authorUID", "==", id));

export const publishUserPost = async (post) => {
  console.log(post);
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

// export const checkUserExist = async (id)=>{
//   const ref = doc(db,'users',id);
//   const res = await getDoc(ref);
//   return res.exists();
// }

export const fetchUserDetail = async (id) => {
  const ref = doc(db, "users", id);
  const res = await getDoc(ref);
  if (res.exists()) {
    return res.data();
  }
  return null;
};

export const signInUser = async () => {
  signInWithPopup(getAuth(), provider).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
    return { errorMessage, errorCode };
  });
};
