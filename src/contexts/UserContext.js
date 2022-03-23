import { app } from "../firebase.config";
import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const UserContext = createContext();

export const CurrentUserContext = ({ children, values }) => {
  //   const [user, setUser] = useState(() => {
  //     const auth = getAuth();
  //     console.log(auth);
  //     return auth.currentUser;
  //   });
  console.log(values);
  return (
    <UserContext.Provider value={{ ...values }}>
      {children}
    </UserContext.Provider>
  );
};
