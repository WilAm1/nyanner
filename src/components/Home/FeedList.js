import { onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { queryRecentPosts } from "../../firebase.config";
import FeedItem from "./FeedItem";

function FeedList({ posts }) {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(queryRecentPosts, (querySnapshot) => {
      const newFeed = [];
      querySnapshot.forEach((post) => {
        const { id } = post;
        newFeed.push({ ...post.data(), id });
        console.log({ ...post.data() });
      });
      setFeed(newFeed);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <section>
      <ul>
        {feed.map((post) => {
          return <FeedItem key={post.id} post={post} />;
        })}
      </ul>
    </section>
  );
}

export default FeedList;
