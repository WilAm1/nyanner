import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";
import { Button } from "../styles/Button";
import Logo from "../styles/Logo";
const StyledProfile = styled.div`
  display: flex;
  gap: 2rem;
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
  background-color: #3fc1c9;
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

const StyledSignOutButton = styled(Button)`
  background-color: transparent;
  width: 5rem;
  color: white;
  transition: all 0.3s ease-in-out;
  &:hover {
    border: 1px solid #364f6b;
    background-color: #fc5185;
    color: #f5f5f5;
    text-decoration: underline;
  }
`;

function Nav() {
  const { userDetails, handleSignOut, userStatus } = useContext(UserContext);
  const { photoURL, name, userName } = userDetails || {
    photoURL: "",
    name: "No User",
    userName: "please sign in",
  };
  const navigate = useNavigate();
  const handleUserSignOut = async () => {
    await handleSignOut();
    navigate("/sign-in");
  };

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
              <StyledSignOutButton onClick={handleUserSignOut}>
                Logout
              </StyledSignOutButton>
            </div>
          </StyledProfile>
        </section>
      </FixedPositionNav>
    </StyledNav>
  );
}

export default Nav;
