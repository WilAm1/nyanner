import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

const IndexComponent = () => {
  const { userStatus } = useContext(UserContext);
  const navigate = useNavigate();

  //* Redirects to specific path based from userStatus
  useEffect(() => {
    console.log(userStatus);
    if (userStatus === "signed-in" || userStatus === "guest") {
      navigate("/home");
    }
    if (userStatus === "signed-out") navigate("/sign-in");
  }, [userStatus]);

  return <div>Pending... Please wait! {userStatus}</div>;
};

export default IndexComponent;
