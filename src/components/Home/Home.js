import React from "react";
import Nav from "../Nav";
import { posts } from "../../posts";
import FeedList from "./FeedList";
import ComposeMessage from "./ComposeMessage";
import styled from "styled-components";
import FixedHeader from "./FixedHeader";

const StyledFeed = styled.div`
  position: relative;
`;

function Home() {
  return (
    <StyledFeed>
      <FixedHeader />
      <ComposeMessage />
      <FeedList posts={posts} />
    </StyledFeed>
  );
}

export default Home;
