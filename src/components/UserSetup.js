import React, { useState } from "react";

function UserSetup() {
  // TODO onSubmit, getAuth user details
  // TODO Publish the new User to the db
  const [signUpDetails, setSignUpDetails] = useState({
    userName: "",
    name: "",
  });

  const handleChange = (e) => {
    const inputName = e.target.name;
    setSignUpDetails((s) => {
      return { ...s, [inputName]: e.target.value };
    });
  };

  const handleSubmit = () => {
    console.log(signUpDetails);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          placeholder="user name"
          onChange={handleChange}
        />
        <button type="button">Check Availability</button>
        <input
          type="text"
          name="name"
          placeholder="display name"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UserSetup;
