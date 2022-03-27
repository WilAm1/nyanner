import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { db } from "../firebase.config";

function FeedItem({ post: feedPost, children }) {
  const { post, dateCreated, userName } = feedPost;
  const [profileDetails, setProfileDetails] = useState({
    photoURL: "",
    name: "loading",
  });
  useEffect(() => {
    console.log(userName);
    const ref = doc(db, "users", userName);
    getDoc(ref).then((d) => {
      console.log(d.data());

      if (d.exists()) {
        setProfileDetails(d.data());
        console.log(d.data);
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
        <Link to={`/${profileDetails.userName}`}>
          @{profileDetails.userName}
        </Link>
      </div>
      <p>{post}</p>
      <p>{dateCreated.toDate().toDateString()}</p>
      {children}
    </li>
  );
}

export default FeedItem;
