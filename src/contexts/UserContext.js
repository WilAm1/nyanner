import { createContext, useEffect, useState } from "react";
import {
  fetchUserDetail,
  publishUserPost,
  signInUser,
  signOutUser,
} from "../firebase.config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import guestIcon from "../guestIcon.svg";

export const UserContext = createContext("something");

export const CurrentUserContext = ({ children }) => {
  const [userDetails, setUserDetails] = useState();
  const [userStatus, setUserStatus] = useState("signed-out");

  const handleDBUser = async ({ uid, photoURL, email }) => {
    // const { displayName, email, photoURL, uid } = user;
    console.log(uid);
    const dbUserDetail = await fetchUserDetail(uid);
    if (!dbUserDetail) {
      setUserStatus("new-user");
      // setUserDetails({ photoURL, email });
    } else {
      setUserDetails(dbUserDetail);
      if (userStatus !== "sign-in") {
        setUserStatus("signed-in");
      }
    }
  };

  const changeSignIn = (details) => {
    setUserDetails(details);
    setUserStatus("signed-in");
  };
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // TODO Check if user id is already on the database
        // TODO If yes, proceed to setUserDetails
        // TODO if Not, Redirect to UserSetup
        // TODO After checking if it was written, proceed to setUserDetails
        handleDBUser(user);
      } else {
        setUserStatus("signed-out");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    await signInUser();
  };

  const handleSignOut = async () => {
    if (userStatus === "signed-in") {
      await signOutUser();
    }
    setUserDetails(null);
    setUserStatus("signed-out");
    return true;
  };

  const handleGuestSignIn = () => {
    console.log("userContext comp", userStatus);
    setUserStatus("guest");
    setUserDetails({
      displayName: "Guest",
      email: "guestNyan@gmail.com",
      photoURL: guestIcon,
      uid: "guest",
    });
  };

  const addPost = async (postText) => {
    const newUserPost = {
      post: postText,
      name: userDetails.name,
      authorUID: userDetails.uid,
      userName: userDetails.userName,
    };
    // TODO calls firebase method
    publishUserPost(newUserPost);
  };

  return (
    <UserContext.Provider
      value={{
        userDetails,
        userStatus,
        changeSignIn,
        handleSignIn,
        handleSignOut,
        addPost,
        handleGuestSignIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
