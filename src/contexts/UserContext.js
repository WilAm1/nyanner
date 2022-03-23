import { app } from "../firebase.config";
import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const UserContext = createContext("something");

export const CurrentUserContext = ({ children }) => {
  const [userDetails, setUserDetails] = useState();
  const [userStatus, setUserStatus] = useState("pending");

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, photoURL, uid } = user;
        setUserDetails({ displayName, email, photoURL, uid });
        if (!userStatus) {
          setUserStatus("signed-in");
          console.log(displayName);
        } else {
          setUserStatus("signed-out");
        }
      }
    });
    return () => unsubscribe();
  }, [userStatus]);

  const handleSignIn = () => {
    setUserStatus(true);
  };

  const handleSignOut = () => {
    setUserStatus(false);
  };

  return (
    <UserContext.Provider
      value={{ ...userDetails, isSignedIn: userStatus, handleSignIn }}
    >
      {children}
    </UserContext.Provider>
  );
};
