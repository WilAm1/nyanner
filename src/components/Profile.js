import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import FixedHeader from "./FixedHeader";
import styled from "styled-components";
import { deleteDoc, doc } from "firebase/firestore";
import { db, queryUserPosts } from "../firebase.config";
import useQueryPosts from "./useQueryPosts";
import ProfileFeed from "./ProfileFeed";
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
  const { userDetails } = useContext(UserContext);
  const { displayName, email, photoURL, uid } = userDetails;
  const { feed } = useQueryPosts(() => {
    return queryUserPosts(uid);
  });

  const handleClick = async (id) => {
    await deleteDoc(doc(db, "posts", id));
  };

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
      <ProfileFeed posts={feed} handleClick={handleClick} />
    </section>
  );
}

export default Profile;
