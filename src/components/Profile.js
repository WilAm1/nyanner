import React, { useEffect, useState } from "react";
// import { UserContext } from "../contexts/UserContext";
import FixedHeader from "./FixedHeader";
import styled from "styled-components";
import { doc, getDoc } from "firebase/firestore";
import { db, queryUserPosts } from "../firebase.config";
import useQueryPosts from "./useQueryPosts";
import FeedList from "./FeedList";
import { useParams } from "react-router-dom";

const StyledCoverBanner = styled.div`
  width: 100%;
  background-color: #6bd562d6;
  height: 200px;
`;
const StyledProfileComponent = styled.div`
  padding: 2rem;

  .profile-img-container {
    position: relative;
    height: 50px;
    img {
      object-fit: contain;
      height: 100%;
      transform: scale(1.5) translate(1rem, -80%);
      border-radius: 100%;
    }
  }
`;
const StyledName = styled.p`
  font-weight: 800;
`;
function Profile() {
  // TODO Fetch the details of the user on the /users in db!
  const params = useParams();
  const { feed } = useQueryPosts(() => {
    return queryUserPosts(params.id);
  });
  const [accountDetails, setAccountDetails] = useState(null);
  const { photoURL, userName, name } = accountDetails || {
    photoURL: "",
    name: "No User Found",
    userName: "none",
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
      <FixedHeader title={userName} />
      <StyledCoverBanner />
      <StyledProfileComponent>
        <div className="profile-img-container">
          <img src={photoURL} alt="user-profile-icon" />
        </div>
        <div>
          <StyledName>{name}</StyledName>
          <span>@{userName}</span>
        </div>
      </StyledProfileComponent>
      {!feed.length ? <div>Empty Feed...</div> : <FeedList posts={feed} />}
    </section>
  );
}

export default Profile;
