import { useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import SignIn from "./components/SignIn";
import { UserContext } from "./contexts/UserContext";
import Home from "./components/Home/Home";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Profile from "./components/Profile";
const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:inherit;
  }
  body{
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #eee;
  }
`;
// * High Level TODOS and MVP
// ?    Sign In / Sign Out
// *    Able to read,write,edit, and delete own tweets
// *    Display the first 10 recent posts
// *    Heart/Upvote liked tweets

// * Working Log
// TODO Make mock api calls
// TODO Fill up the home component
// TODO connect the firestore to user accounts

function App() {
  const { userStatus } = useContext(UserContext);
  const navigate = useNavigate();

  //* Redirects to specific path based from userStatus
  useEffect(() => {
    switch (userStatus) {
      case "signed-in":
        navigate("home");
        break;
      case "signed-out":
        navigate("sign-in");
        break;
      default:
        // navigate("*");
        return;
    }
  }, [userStatus]);

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/">
          <Route path="sign-in" element={<SignIn />} />
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />

          <Route index element={<div>Pending...</div>} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
