import React from "react";
import Nav from "./Nav";
import { posts } from "../../posts";
import FeedList from "./FeedList";
import ComposeMessage from "./ComposeMessage";
import styled from "styled-components";
import FixedHeader from "./FixedHeader";

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 20vw 1fr 15vw;
`;

const StyledFeed = styled.div`
  position: relative;
`;

function Home() {
  return (
    <GridLayout>
      <Nav />
      <StyledFeed>
        <FixedHeader />
        <ComposeMessage />
        <FeedList posts={posts} />
      </StyledFeed>
    </GridLayout>
  );
}

export default Home;
