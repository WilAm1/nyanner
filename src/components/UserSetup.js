import { getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { db } from "../firebase.config";

function UserSetup() {
  const [signUpDetails, setSignUpDetails] = useState({
    userName: "",
    name: "",
  });
  const { setUserStatus } = useContext(UserContext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const inputName = e.target.name;
    setSignUpDetails((s) => {
      return { ...s, [inputName]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(signUpDetails);
    const { currentUser } = getAuth();
    if (currentUser) {
      const { uid, email, photoURL } = currentUser;
      console.log(currentUser);
      await setDoc(doc(db, "google-users", currentUser.uid), {
        userName: signUpDetails.userName,
      });
      await setDoc(doc(db, "users", signUpDetails.userName), {
        uid,
        email,
        photoURL,
        ...signUpDetails,
      });
      setUserStatus("signed-in");
      navigate("/home");
    }
  };
  // TODO Add form handler on userName
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          placeholder="user name"
          required
          onChange={handleChange}
        />
        <button type="button">Check Availability</button>
        <input
          type="text"
          name="name"
          placeholder="display name"
          onChange={handleChange}
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UserSetup;
