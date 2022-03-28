import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";
import Logo from "./Logo";
const StyledProfile = styled.div`
  display: flex;
  .icon-wrapper {
    width: 4rem;
    height: 4rem;
    img {
      object-fit: contain;
      width: 100%;
      border-radius: 100%;
    }
  }
`;
const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #000000;
  color: white;
`;

function Nav() {
  const { userDetails, handleSignOut, userStatus } = useContext(UserContext);
  const { photoURL, displayName } = userDetails || {
    photoURL: "",
    displayName: "Signing out",
  };
  const navigate = useNavigate();
  const handleUserSignOut = async () => {
    await handleSignOut();
    navigate("/sign-in");
  };
  console.log(photoURL);
  return (
    <StyledNav>
      <Logo />
      <h4>Explore</h4>
      {userStatus === "signed-in" && (
        <>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </>
      )}
      <section>
        {/* <button>new message~nya</button> */}
        <StyledProfile>
          <div className="icon-wrapper">
            <img
              src={photoURL}
              alt={"user-logo"}
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <p>{displayName}</p>
            <button onClick={handleUserSignOut}>Logout</button>
          </div>
        </StyledProfile>
      </section>
    </StyledNav>
  );
}

export default Nav;
