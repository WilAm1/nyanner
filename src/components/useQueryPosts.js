import React, { useContext, useEffect, useState } from "react";
import {
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db, queryUserPosts } from "../firebase.config";

const useQueryPosts = (query) => {
  let q = query;
  if (typeof query === "function") {
    q = query();
  }
  const [feed, setFeed] = useState([]);
  console.log(q);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const newFeed = [];
        querySnapshot.forEach((snap) => {
          const { id } = snap;
          const post = snap.data({ serverTimestamps: "estimate" });
          newFeed.push({ ...post, id });
        });
        console.log(newFeed);
        setFeed(newFeed);
      },
      { includeMetadataChanges: true }
    );
    return () => {
      unsubscribe();
    };
  }, []);
  return { feed };
};

export default useQueryPosts;
