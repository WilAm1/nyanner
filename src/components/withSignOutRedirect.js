import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import FallbackComponent from "./FallbackComponent";

export default function withSignOutRedirect(WrappedComponent) {
  return () => {
    const { userDetails, userStatus } = useContext(UserContext);
    if (!userDetails || userStatus === "signed-out")
      return <FallbackComponent />;
    return WrappedComponent;
  };
}
