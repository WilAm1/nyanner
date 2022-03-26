import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import IndexComponent from "./IndexComponent";

import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";
const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 20vw 1fr 15vw;
`;

function NavHOC() {
  const { userStatus } = useContext(UserContext);
  console.log(userStatus);
  return (
    <GridLayout>
      <Nav />
      <Outlet />
    </GridLayout>
  );
}

export default NavHOC;
