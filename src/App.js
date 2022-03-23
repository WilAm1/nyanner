import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import { CurrentUserContext } from "./contexts/UserContext";

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
  const [userDetails, setUserDetails] = useState();
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { id, displayName, email, photoURL, uid } = user;
        setUserDetails({ id, displayName, email, photoURL, uid });
      } else {
        console.log("there is no user!");
        setUserDetails(null);
      }
    });
    return () => unsubscribe();
  }, [isSignedIn]);

  return (
    <BrowserRouter>
      <CurrentUserContext values={userDetails}>
        <Routes>
          {/* TODO Change later to redirect to home if already signed in. */}
          <Route path="/">
            {isSignedIn ? (
              <Route
                path="sign-in"
                element={<SignIn setIsSignedIn={setIsSignedIn} />}
              />
            ) : (
              <Route path="home" element={<div>you are login</div>} />
            )}
          </Route>
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </CurrentUserContext>
    </BrowserRouter>
  );
}

export default App;
