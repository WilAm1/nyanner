import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { signInUser } from "../firebase.config";
import Home from "./Home/Home";
import styled from "styled-components";

function SignIn() {
  const { handleSignIn, userStatus } = useContext(UserContext);

  const handleLoginClick = (e) => {
    e.preventDefault();
    console.log("I tried to login to google!");

    signInUser().then(() => {
      handleSignIn();
    });
  };
  const handleGuestClick = () => {
    console.log("I tried to login as a guest!");
  };

  return userStatus === "pending" ? (
    <div>Pending</div>
  ) : userStatus === "signed-out" ? (
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
  ) : (
    <Home />
  );
}

export default SignIn;
