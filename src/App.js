import { useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import SignIn from "./components/SignIn";

// * High Level TODOS and MVP
// *    Sign In / Sign Out
// *    Able to read,write,edit, and delete own tweets
// *    Display the first 10 recent posts
// *    Heart/Upvote liked tweets

// * Working Log
// TODO Default the path if no login found to Signin
// TODO Have home component
// TODO configure firebase
// TODO configure context API for user auth
// TODO Make mock api calls

function App() {
  return (
    <Routes>
      {/* TODO Change later to redirect to home if already signed in. */}
      <Route path="/">
        <Route path="sign-in" element={<SignIn />} />
        <Route path="home" element={<div>you are login</div>} />
      </Route>
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}

export default App;
