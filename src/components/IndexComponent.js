import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

const IndexComponent = () => {
  const { userStatus } = useContext(UserContext);
  const navigate = useNavigate();

  //* Redirects to specific path based from userStatus
  useEffect(() => {
    if (userStatus === "signed-out") navigate("sign-in");
    if (userStatus === "signed-in") navigate("home");
    console.log("i was rendered, indexComponent");
  }, [userStatus]);

  return <div>Pending... Please wait!</div>;
};

export default IndexComponent;
