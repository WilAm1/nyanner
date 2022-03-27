import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import FixedHeader from "./FixedHeader";
import styled from "styled-components";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { db, queryUserPosts } from "../firebase.config";
import useQueryPosts from "./useQueryPosts";
import ProfileFeed from "./ProfileFeed";
import FeedList from "./FeedList";
import { useParams } from "react-router-dom";
const StyledCoverBanner = styled.div`
  width: 100%;
  background-color: #6bd562d6;
  height: 200px;
`;
const StyledProfileComponent = styled.div`
  .profile-img-container {
    position: relative;
    height: 100px;
    img {
      object-fit: contain;
      height: 100%;
      transform: translate(1rem, -50%);
    }
  }
`;

function Profile() {
  // TODO Fetch the details of the user on the /users in db!
  const params = useParams();
  const { feed } = useQueryPosts(() => {
    return queryUserPosts(params.id);
  });
  const [accountDetails, setAccountDetails] = useState(null);
  const { photoURL, displayName, email } = accountDetails || {
    photoURL: "",
    displayName: "No User Found",
    email: "",
  };
  useEffect(() => {
    getDoc(doc(db, "users", params.id)).then((d) => {
      const details = d.data();
      setAccountDetails(details);
    });
  }, []);

  return (
    <section>
      <FixedHeader title={displayName} />
      <StyledCoverBanner />
      <StyledProfileComponent>
        <div className="profile-img-container">
          <img src={photoURL} alt="user-profile-icon" />
        </div>
        <div>
          <p>{displayName}</p>
          <p>{email}</p>
        </div>
      </StyledProfileComponent>
      {!feed.length ? <div>Empty Feed...</div> : <FeedList posts={feed} />}
    </section>
  );
}

export default Profile;
