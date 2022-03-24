import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../contexts/UserContext";

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
  justify-content: space-around;
`;
function Nav() {
  const { userDetails, handleSignOut } = useContext(UserContext);
  const { photoURL, displayName } = userDetails || {
    photoURL: "",
    displayName: "loading",
  };
  console.log(photoURL);
  return (
    <StyledNav>
      <h2>Logo</h2>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
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
            <button onClick={handleSignOut}>Logout</button>
          </div>
        </StyledProfile>
      </section>
    </StyledNav>
  );
}

export default Nav;
