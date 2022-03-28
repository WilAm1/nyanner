import React from "react";
import FeedItem from "./FeedItem";
import styled from "styled-components";

const StyledUL = styled.ul`
  list-style: none;
`;
function FeedList({ posts }) {
  return (
    <section>
      <StyledUL>
        {posts.map((post) => {
          return <FeedItem key={post.id} post={post} />;
        })}
      </StyledUL>
    </section>
  );
}

export default FeedList;
