import React, { useContext, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../../contexts/UserContext";

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
  const [text, setText] = useState("");
  const { addPost } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO Add post to db
    addPost(text);
  };

  return (
    <div>
      <StyledComposeMessage onSubmit={handleSubmit}>
        <textarea
          placeholder="Nyaa~"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button type="submit">Publish~nya</button>
      </StyledComposeMessage>
    </div>
  );
}

export default ComposeMessage;
