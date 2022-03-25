import { onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { queryRecentPosts } from "../../firebase.config";
import FeedItem from "./FeedItem";

function FeedList() {
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
