import React, { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const { handleSignIn, userStatus } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLoginClick = (e) => {
    e.preventDefault();
    console.log("I tried to login to google!");

    handleSignIn();
  };
  const handleGuestClick = () => {
    console.log("I tried to login as a guest!");
  };

  //* Redirects if already signed in
  useEffect(() => {
    if (userStatus === "signed-in") {
      navigate("/home");
    }
  }, [userStatus]);

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
