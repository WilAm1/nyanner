import React from "react";
import styled from "styled-components";

const StyledComposeMessage = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  & > * {
    width: 50%;
  }
`;
function ComposeMessage() {
  return (
    <div>
      <StyledComposeMessage>
        <textarea placeholder="Nyaa~"></textarea>
        <button type="submit">Publish~nya</button>
      </StyledComposeMessage>
    </div>
  );
}

export default ComposeMessage;
