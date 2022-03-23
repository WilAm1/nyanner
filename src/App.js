import { useContext, useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import SignIn from "./components/SignIn";
import { UserContext } from "./contexts/UserContext";
import Home from "./components/Home/Home";

// * High Level TODOS and MVP
// *    Sign In / Sign Out
// *    Able to read,write,edit, and delete own tweets
// *    Display the first 10 recent posts
// *    Heart/Upvote liked tweets

// * Working Log
// * Default the path if no login found to Signin
// TODO Have home component
// TODO configure firebase
// TODO configure context API for user auth
// TODO Make mock api calls

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
    <Routes>
      {/* TODO Change later to redirect to home if already signed in. */}
      <Route path="/">
        <Route path="sign-in" element={<SignIn />} />
        <Route path="home" element={<Home />} />
        <Route index element={<div>Pending...</div>} />
      </Route>
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}

export default App;
