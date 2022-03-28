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
  position: relative;
  background-color: gray;
`;
const FixedPositionNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  color: white;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
`;
const NavLogo = styled(Logo)`
  width: 3rem;
`;
const StyledSignInList = styled.ul`
  list-style: none;
  li {
    margin-bottom: 1rem;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: white;
  }
`;
function Nav() {
  const { userDetails, handleSignOut, userStatus } = useContext(UserContext);
  const { photoURL, name, userName } = userDetails || {
    photoURL: "",
    name: "Signing out",
    userName: "loading",
  };
  const navigate = useNavigate();
  const handleUserSignOut = async () => {
    await handleSignOut();
    navigate("/sign-in");
  };
  console.log(photoURL);
  return (
    <StyledNav>
      <FixedPositionNav>
        <NavLogo />
        <h4>Explore</h4>
        {userStatus === "signed-in" && (
          <StyledSignInList>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </StyledSignInList>
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
              <p>{name}</p>
              <p>@{userName}</p>
              <button onClick={handleUserSignOut}>Logout</button>
            </div>
          </StyledProfile>
        </section>
      </FixedPositionNav>
    </StyledNav>
  );
}

export default Nav;
