import { createContext, useEffect, useState } from "react";
import { signInUser, signOutUser } from "../firebase.config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const UserContext = createContext("something");

export const CurrentUserContext = ({ children }) => {
  const [userDetails, setUserDetails] = useState();
  const [userStatus, setUserStatus] = useState("pending");

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("iran");
        const { displayName, email, photoURL, uid } = user;
        // TODO get the user ref on db here.
        setUserDetails({ displayName, email, photoURL, uid });
        if (userStatus !== "sign-in") {
          setUserStatus("signed-in");
        }
      } else {
        if (userStatus !== "signed-out") setUserStatus("signed-out");
      }
    });
    return () => unsubscribe();
  }, [userStatus]);

  const handleSignIn = async () => {
    await signInUser();
  };

  const handleSignOut = async () => {
    await signOutUser();
    setUserDetails(null);
  };

  return (
    <UserContext.Provider
      value={{ userDetails, userStatus, handleSignIn, handleSignOut }}
    >
      {children}
    </UserContext.Provider>
  );
};
