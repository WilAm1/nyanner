import React from "react";
import styled from "styled-components";

function SignIn() {
  const handleLoginClick = (e) => {
    e.preventDefault();
    console.log("I tried to login to google!");
  };
  const handleGuestClick = () => {
    console.log("I tried to login as a guest!");
  };

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
