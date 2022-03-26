import FeedList from "../FeedList";
import ComposeMessage from "./ComposeMessage";
import styled from "styled-components";
import FixedHeader from "../FixedHeader";
import { onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { queryRecentPosts } from "../../firebase.config";
const StyledFeed = styled.div`
  position: relative;
`;

function Home() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      queryRecentPosts,
      (querySnapshot) => {
        const newFeed = [];
        querySnapshot.forEach((snap) => {
          const { id } = snap;
          const post = snap.data({ serverTimestamps: "estimate" });
          newFeed.push({ ...post, id });
        });
        setFeed(newFeed);
      },
      { includeMetadataChanges: true }
    );
    return () => {
      unsubscribe();
    };
  }, []);

  console.log("iran");
  return (
    <StyledFeed>
      <FixedHeader title="HOME" />
      <ComposeMessage />
      <FeedList posts={feed} />
    </StyledFeed>
  );
}

export default Home;
