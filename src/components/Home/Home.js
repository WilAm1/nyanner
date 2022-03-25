import React from "react";
import FeedList from "./FeedList";
import ComposeMessage from "./ComposeMessage";
import styled from "styled-components";
import FixedHeader from "../FixedHeader";

const StyledFeed = styled.div`
  position: relative;
`;

function Home() {
  return (
    <StyledFeed>
      <FixedHeader title="HOME" />
      <ComposeMessage />
      <FeedList />
    </StyledFeed>
  );
}

export default Home;
