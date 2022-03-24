import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";
import IndexComponent from "./IndexComponent";
const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 20vw 1fr 15vw;
`;

function NavHOC() {
  const { userStatus } = useContext(UserContext);

  // ? Will redirect to index if not signed in
  if (userStatus !== "signed-in") return <IndexComponent />;

  return (
    <GridLayout>
      <Nav />
      <Outlet />
    </GridLayout>
  );
}

export default NavHOC;