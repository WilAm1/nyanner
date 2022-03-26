import { useContext } from "react";
import { queryRecentPosts } from "../../firebase.config";
import { UserContext } from "../../contexts/UserContext";
import FeedList from "../FeedList";
import ComposeMessage from "./ComposeMessage";
import FixedHeader from "../FixedHeader";
import useQueryPosts from "../useQueryPosts";
import styled from "styled-components";

const StyledFeed = styled.div`
  position: relative;
`;

function Home() {
  const { feed } = useQueryPosts(queryRecentPosts);
  const { addPost } = useContext(UserContext);

  return (
    <StyledFeed>
      <FixedHeader title="HOME" />
      <ComposeMessage handleNewPost={addPost} />
      <FeedList posts={feed} />
    </StyledFeed>
  );
}

export default Home;
