import React, { useState } from "react";
import styled from "styled-components";

const StyledComposeMessage = styled.form`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  padding: 2rem;
  border: 1px solid #364f6b;
`;
const StyledTextArea = styled.textarea`
  resize: none;
  flex: 1;
`;
const StyledSubmitButton = styled.button`
  padding: 0.5rem;
  background-color: #fc5185;
  color: #f5f5f5;
  border: 1px solid #364f6b;
  border-radius: 5px;
`;
function ComposeMessage({ handleNewPost }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNewPost(text);
    setText("");
  };

  return (
    <StyledComposeMessage onSubmit={handleSubmit}>
      <StyledTextArea
        placeholder="Nyaa~"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      ></StyledTextArea>
      <StyledSubmitButton type="submit">Post~nya</StyledSubmitButton>
    </StyledComposeMessage>
  );
}

export default ComposeMessage;
