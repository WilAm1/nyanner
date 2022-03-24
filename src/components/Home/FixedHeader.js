import React from "react";
import styled from "styled-components";

const StyledFixedHeader = styled.section`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
`;
function FixedHeader() {
  return (
    <StyledFixedHeader>
      <h4>Home</h4>
    </StyledFixedHeader>
  );
}

export default FixedHeader;
