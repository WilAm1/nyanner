import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { db } from "../firebase.config";

const StyledListItem = styled.li`
  display: grid;
  grid-template-columns: 4rem 1fr;
  grid-template-rows: 1fr 1rem;
  border: 1px solid grey;
  padding: 1rem;
  color: #364f6b;
  background-color: #f5f5f5;
  .img-wrapper {
    width: 3.5rem;
    height: 4rem;
    img {
      object-fit: contain;
      width: 100%;
      border-radius: 100%;
    }
  }
  .user-name {
    margin: 0 1rem;
    opacity: 0.7;
  }
  a {
    text-decoration: none;
    color: #364f6b;
    font-weight: 800;
  }
`;

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
    <StyledListItem>
      <div className="img-wrapper">
        <img
          referrerPolicy="no-referrer"
          src={profileDetails.photoURL}
          alt="user-icon"
        />
      </div>
      <div>
        <p>
          {" "}
          <Link to={`/${profileDetails.userName}`}>{profileDetails.name}</Link>
          <span className="user-name">@{profileDetails.userName}</span>
          {dateCreated.toDate().toDateString()}
        </p>
        <p>{post}</p>
      </div>
      {children}
    </StyledListItem>
  );
}

export default FeedItem;
