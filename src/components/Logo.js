import React from "react";
import styled from "styled-components";
import catLogo from "../catSVG.svg";

const StyledLogo = styled.img`
  width: 2rem;
  filter: invert(100%);
`;

function Logo({ className }) {
  return <StyledLogo className={className} src={catLogo} alt="logo" />;
}

export default Logo;
