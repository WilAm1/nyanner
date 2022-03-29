import React from "react";
import styled from "styled-components";
import catLogo from "../assets/svg/catSVG.svg";

const StyledLogo = styled.img`
  width: 2rem;
`;

function Logo({ className }) {
  return <StyledLogo className={className} src={catLogo} alt="logo" />;
}

export default Logo;
