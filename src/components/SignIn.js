import React, { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import UserSetup from "./UserSetup";
import styled from "styled-components";
import { Button } from "../styles/Button";
import Logo from "../styles/Logo";
const StyledDivider = styled.section`
  display: flex;
  min-height: 100vh;
  background-color: #f5f5f5;
  color: #364f6b;
`;

const StyledPoster = styled.div`
  width: 50vw;
  background-color: #3fc1c9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonDivider = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
`;

const StyledOr = styled.div`
  display: flex;
  div {
    flex: 1;
  }
`;

const AccentButton = styled(Button)`
  background-color: #fc5185;
  color: #fff;
`;

const MainSection = styled.div`
  max-width: 50vw;
  padding: 2rem;
`;

const HeadingText = styled.h2`
  font-size: 4rem;
  margin: 3rem 0;
`;
const SubheadingText = styled.h3`
  font-size: 2rem;
`;

const BigLogo = styled(Logo)`
  width: 20rem;
`;

function SignIn() {
  const { handleSignIn, userStatus, handleGuestSignIn } =
    useContext(UserContext);
  const navigate = useNavigate();

  const handleLoginClick = (e) => {
    e.preventDefault();
    // console.log("I tried to login to google!");
    handleSignIn();
  };

  const handleGuestClick = () => {
    // console.log("I tried to login as a guest!");
    handleGuestSignIn();
  };

  //* Redirects if already signed in
  useEffect(() => {
    // console.log("Sign in ", userStatus);

    if (userStatus === "signed-in" || userStatus === "guest") {
      navigate("/home");
    }
  }, [userStatus]);

  if (userStatus === "new-user") {
    return <UserSetup />;
  }

  return (
    <StyledDivider>
      <StyledPoster>
        <BigLogo />
      </StyledPoster>
      <MainSection>
        <HeadingText>Happening now</HeadingText>
        <SubheadingText>Join Nyanner today</SubheadingText>
        <form onSubmit={handleLoginClick}>
          <ButtonDivider>
            <AccentButton type="submit">Login with Google</AccentButton>
            <StyledOr>
              <div></div>
              <span>or</span>
              <div></div>
            </StyledOr>
            <Button type="button" onClick={handleGuestClick}>
              Visit as Guest
            </Button>
          </ButtonDivider>
        </form>
      </MainSection>
    </StyledDivider>
  );
}

export default SignIn;
