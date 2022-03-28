import { Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import SignIn from "./components/SignIn";
import Home from "./components/Home/Home";
import Profile from "./components/Profile";
import NavHOC from "./components/NavHOC";
import IndexComponent from "./components/IndexComponent";
import CurrentUserProfile from "./components/CurrentUserProfile";
import withSignOutRedirect from "./components/withSignOutRedirect";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:inherit;
  }
  html{
    height: 100%;
  }
  body{
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #eee;
    min-height: 100vh;
  }
`;

// * High Level TODOS and MVP
// ?    Sign In / Sign Out
// ?    Able to read,write,edit, and delete own tweets
// ?    Display the recent posts
//    * Have recent posts on top when new posts arrived...
// *    Heart/Upvote liked tweets

// * Working Log
// TODO Style the rest
// TODO Refactor
// TODO Fetch data on scroll. Only fetch on the fly
// TODO Paginate data on feed
// TODO Add Suspense on feed

function App() {
  const HomeWithRedirect = withSignOutRedirect(<Home />);
  const UserWithRedirect = withSignOutRedirect(<CurrentUserProfile />);
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route index element={<IndexComponent />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route element={<NavHOC />}>
          <Route path="/home" element={<HomeWithRedirect />} />
          <Route path="/profile" element={<UserWithRedirect />} />
          <Route path="/:id" element={<Profile />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
