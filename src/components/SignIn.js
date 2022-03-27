import React, { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import UserSetup from "./UserSetup";

function SignIn() {
  const { handleSignIn, userStatus, handleGuestSignIn } =
    useContext(UserContext);
  const navigate = useNavigate();

  const handleLoginClick = (e) => {
    e.preventDefault();
    console.log("I tried to login to google!");
    handleSignIn();
  };

  const handleGuestClick = () => {
    console.log("I tried to login as a guest!");
    handleGuestSignIn();
  };

  //* Redirects if already signed in
  useEffect(() => {
    console.log("Sign in ", userStatus);

    if (userStatus === "signed-in" || userStatus === "guest") {
      navigate("/home");
    }
  }, [userStatus]);

  if (userStatus === "new-user") {
    return <UserSetup />;
  }

  return (
    <div>
      <h2>Where people gather </h2>
      <div>
        <form onSubmit={handleLoginClick}>
          <button type="submit">Login to Google</button>
          <button type="button" onClick={handleGuestClick}>
            Visit as Guest
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
