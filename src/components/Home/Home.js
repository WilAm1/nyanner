import FeedList from "../FeedList";
import ComposeMessage from "./ComposeMessage";
import styled from "styled-components";
import FixedHeader from "../FixedHeader";
import { queryRecentPosts } from "../../firebase.config";
import useQueryPosts from "../useQueryPosts";

const StyledFeed = styled.div`
  position: relative;
`;

function Home() {
  const { feed } = useQueryPosts(queryRecentPosts);
  return (
    <StyledFeed>
      <FixedHeader title="HOME" />
      <ComposeMessage />
      <FeedList posts={feed} />
    </StyledFeed>
  );
}

export default Home;
