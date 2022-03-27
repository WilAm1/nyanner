import React, { useState } from "react";
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

function ComposeMessage({ handleNewPost }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNewPost(text);
    setText("");
  };

  return (
    <div>
      <StyledComposeMessage onSubmit={handleSubmit}>
        <textarea
          placeholder="Nyaa~"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
        <button type="submit">Post~nya</button>
      </StyledComposeMessage>
    </div>
  );
}

export default ComposeMessage;
