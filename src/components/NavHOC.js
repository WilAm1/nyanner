import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

import styled from "styled-components";
const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 20vw 1fr 15vw;
`;

function NavHOC() {
  return (
    <GridLayout>
      <Nav />
      <Outlet />
    </GridLayout>
  );
}

export default NavHOC;
