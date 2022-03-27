import React from "react";
import { useNavigate } from "react-router-dom";

function FallbackComponent() {
  const navigate = useNavigate();
  return (
    <div>
      You must be logged in to view this page.
      <button
        onClick={() => {
          navigate("/sign-in");
        }}
      >
        Login
      </button>
    </div>
  );
}

export default FallbackComponent;
