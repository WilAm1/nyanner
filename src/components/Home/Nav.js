import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

function Nav() {
  const { userDetails, handleSignOut } = useContext(UserContext);
  const { photoURL, displayName } = userDetails || {
    photoURL: "someting",
    displayName: "loading",
  };
  console.log(photoURL);
  return (
    <nav>
      <h2>NavBar</h2>
      {/* Logo */}
      <ul>
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="profile">Profile</Link>
        </li>
      </ul>
      <section>
        {/* <button>new message~nya</button> */}
        <div>
          <img src={photoURL} alt={"user-logo"} />
          <span>{displayName}</span>
          <button onClick={handleSignOut}>Logout</button>
        </div>
      </section>
    </nav>
  );
}

export default Nav;
