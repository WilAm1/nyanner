import React from "react";
import styled from "styled-components";
import guestIcon from "../guestIcon.svg";

const StyledIcon = styled.img`
  width: 5rem;
  filter: invert(100%);
`;

function GuestIcon() {
  return <StyledIcon src={guestIcon} alt="logo" />;
}

export default GuestIcon;
