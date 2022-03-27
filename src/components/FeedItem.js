import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase.config";

function FeedItem({ post: feedPost, children }) {
  const { post, dateCreated, authorUID } = feedPost;
  const [profileDetails, setProfileDetails] = useState({
    photoURL: "",
    name: "loading",
  });
  useEffect(() => {
    console.log(authorUID);
    const ref = doc(db, "users", authorUID);
    getDoc(ref).then((d) => {
      console.log(d.data());

      if (d.exists()) {
        setProfileDetails(d.data());
      }
    });
  }, []);

  return (
    <li>
      <div>
        <img
          referrerPolicy="no-referrer"
          src={profileDetails.photoURL}
          alt="user-icon"
        />
        <p>{profileDetails.name}</p>
      </div>
      <p>{post}</p>
      <p>{dateCreated.toDate().toDateString()}</p>
      {children}
    </li>
  );
}

export default FeedItem;
