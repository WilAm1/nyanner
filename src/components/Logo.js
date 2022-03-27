import React from "react";
import styled from "styled-components";
import catLogo from "../catSVG.svg";

const StyledLogo = styled.img`
  width: 20rem;
  filter: invert(100%);
`;

function Logo() {
  return <StyledLogo src={catLogo} alt="logo" />;
}

export default Logo;
