import { Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import SignIn from "./components/SignIn";
import Home from "./components/Home/Home";
import Profile from "./components/Profile";
import NavHOC from "./components/NavHOC";
import IndexComponent from "./components/IndexComponent";

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
//    * Have recent posts on top when new posts arrived...
// *    Heart/Upvote liked tweets

// * Working Log
// ? Connect account to DB
// TODO Add Delete button
// TODO Add struture to /profile
// TODO decouple FeedList
// TODO Add custom hook
// TODO Paginate data on feed
// TODO Add author and img association later (optional)

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route index element={<IndexComponent />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route element={<NavHOC />}>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
