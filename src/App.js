import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
