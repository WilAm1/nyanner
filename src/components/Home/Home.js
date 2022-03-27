import { useContext } from "react";
import { queryRecentPosts } from "../../firebase.config";
import { UserContext } from "../../contexts/UserContext";
import FeedList from "../FeedList";
import ComposeMessage from "./ComposeMessage";
import FixedHeader from "../FixedHeader";
import useQueryPosts from "../useQueryPosts";
import styled from "styled-components";
import FallbackComponent from "../FallbackComponent";

const StyledFeed = styled.div`
  position: relative;
`;

function Home() {
  const { feed } = useQueryPosts(queryRecentPosts);
  const { addPost, userStatus } = useContext(UserContext);

  if (userStatus === "signed-out") return <FallbackComponent />;

  return (
    <StyledFeed>
      <FixedHeader title="HOME" />
      {userStatus === "signed-in" && <ComposeMessage handleNewPost={addPost} />}
      <FeedList posts={feed} />
    </StyledFeed>
  );
}

export default Home;
