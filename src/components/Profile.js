import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import FixedHeader from "./FixedHeader";
import styled from "styled-components";
import IndexComponent from "./IndexComponent";

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
  const { userDetails, userStatus } = useContext(UserContext);
  const { displayName, email, photoURL } = userDetails || {
    displayName: null,
    email: "guest@gmail",
    photoURL: null,
  };
  // // ? Will redirect to index if not signed in
  // if (userStatus !== "signed-in") return <IndexComponent />;

  return userStatus !== "signed-in" ? (
    <IndexComponent />
  ) : (
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
    </section>
  );
}

export default Profile;
